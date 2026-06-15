// Server-side metadata fetcher. Given a URL (website or Behance project link),
// it fetches the page HTML and extracts Open Graph / Twitter / <title> tags so
// the admin form can be auto-prefilled. Runs on the server to dodge CORS.
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface Metadata {
  title: string;
  description: string;
  image: string;
  siteName: string;
}

// Pulls the `content` of a <meta> tag matching property/name === key.
function readMeta(html: string, key: string): string {
  // Handles both attribute orders: property before content, and content before property.
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["']`,
      'i'
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${key}["']`,
      'i'
    ),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return decodeEntities(m[1].trim());
  }
  return '';
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function normalizeUrl(raw: string): string | null {
  let url = raw.trim();
  if (!url) return null;
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url: rawUrl } = (await request.json()) as { url?: string };
    const url = normalizeUrl(rawUrl || '');
    if (!url) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    let res: Response;
    try {
      res = await fetch(url, {
        signal: controller.signal,
        headers: {
          // A real browser UA so sites like Behance return full OG markup.
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml',
        },
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: `Could not reach the page (status ${res.status}).` },
        { status: 502 }
      );
    }

    const html = (await res.text()).slice(0, 500_000); // cap parse size

    const titleTag = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '';

    const metadata: Metadata = {
      title:
        readMeta(html, 'og:title') ||
        readMeta(html, 'twitter:title') ||
        decodeEntities(titleTag.trim()),
      description:
        readMeta(html, 'og:description') ||
        readMeta(html, 'twitter:description') ||
        readMeta(html, 'description'),
      image:
        readMeta(html, 'og:image') ||
        readMeta(html, 'og:image:secure_url') ||
        readMeta(html, 'twitter:image') ||
        readMeta(html, 'twitter:image:src'),
      siteName: readMeta(html, 'og:site_name'),
    };

    // Resolve a relative og:image against the page origin.
    if (metadata.image && !/^https?:\/\//i.test(metadata.image)) {
      try {
        metadata.image = new URL(metadata.image, url).toString();
      } catch {
        metadata.image = '';
      }
    }

    return NextResponse.json({ url, ...metadata });
  } catch (err) {
    console.error('fetch-metadata error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch metadata. Check the URL and try again.' },
      { status: 500 }
    );
  }
}
