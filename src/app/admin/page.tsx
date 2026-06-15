'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Loader2,
  LogOut,
  Trash2,
  Plus,
  ExternalLink,
  ImageOff,
  CheckCircle2,
} from 'lucide-react';

interface AdminProject {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  behanceUrl?: string;
  featured?: boolean;
}

const EMPTY_FORM = {
  title: '',
  category: 'web',
  description: '',
  thumbnail: '',
  technologies: '',
  results: '',
  liveUrl: '',
  behanceUrl: '',
  client: '',
  industry: '',
  duration: '',
  challenge: '',
  solution: '',
  featured: false,
};

type FormState = typeof EMPTY_FORM;

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<AdminProject[]>([]);
  const [loadingList, setLoadingList] = useState(true);

  const [sourceUrl, setSourceUrl] = useState('');
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saved, setSaved] = useState(false);

  const update = (key: keyof FormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const loadProjects = useCallback(async () => {
    setLoadingList(true);
    try {
      const res = await fetch('/api/admin/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data.projects || []);
      }
    } catch {
      /* ignore */
    } finally {
      setLoadingList(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  async function handleAutoFetch() {
    if (!sourceUrl.trim()) return;
    setFetching(true);
    setFetchError('');
    try {
      const res = await fetch('/api/fetch-metadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: sourceUrl }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFetchError(data.error || 'Could not fetch that URL.');
        return;
      }

      const isBehance = /behance\.net/i.test(data.url || sourceUrl);
      setForm((f) => ({
        ...f,
        title: data.title || f.title,
        description: data.description || f.description,
        thumbnail: data.image || f.thumbnail,
        liveUrl: isBehance ? f.liveUrl : data.url || f.liveUrl,
        behanceUrl: isBehance ? data.url || f.behanceUrl : f.behanceUrl,
      }));
    } catch {
      setFetchError('Network error while fetching. Try again.');
    } finally {
      setFetching(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    setSaved(false);
    try {
      const payload = {
        ...form,
        technologies: form.technologies
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        results: form.results
          .split('\n')
          .map((r) => r.trim())
          .filter(Boolean),
      };
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setSaveError(data.error || 'Failed to save.');
        return;
      }
      setSaved(true);
      setForm(EMPTY_FORM);
      setSourceUrl('');
      loadProjects();
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setSaveError('Network error while saving.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return;
    setProjects((p) => p.filter((x) => x.id !== id));
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
    loadProjects();
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const inputClass =
    'w-full rounded-lg border border-black/[0.08] bg-white dark:bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-nexus-navy dark:text-slate-100 outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20';
  const labelClass =
    'mb-1.5 block text-[12px] font-medium text-nexus-navy dark:text-slate-200';

  return (
    <div className="min-h-screen bg-nexus-surface/60 dark:bg-nexus-navy pb-24">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-black/[0.06] bg-white/90 dark:bg-nexus-navy/90 backdrop-blur">
        <div className="max-content flex items-center justify-between px-6 py-4 md:px-12">
          <div>
            <h1 className="font-display text-[18px] font-semibold text-nexus-navy dark:text-slate-100">
              Portfolio Admin
            </h1>
            <p className="text-[12px] text-nexus-text-secondary">
              Add work by pasting a website or Behance link
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-black/[0.08] px-3.5 py-2 text-[13px] font-medium text-nexus-text-secondary transition-colors hover:text-nexus-navy"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <main className="max-content px-6 md:px-12 pt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: add form */}
        <section>
          {/* Auto-fetch bar */}
          <div className="rounded-2xl border border-nexus-blue/[0.15] bg-nexus-blue/[0.04] p-5">
            <label className={labelClass}>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={13} className="text-nexus-blue" /> Auto-fetch from URL
              </span>
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAutoFetch();
                  }
                }}
                placeholder="https://yourproject.com  or  behance.net/gallery/..."
                className={inputClass}
              />
              <button
                type="button"
                onClick={handleAutoFetch}
                disabled={fetching || !sourceUrl.trim()}
                className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-nexus-blue px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-nexus-blue-dark disabled:opacity-50"
              >
                {fetching ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Sparkles size={15} />
                )}
                {fetching ? 'Fetching…' : 'Fetch'}
              </button>
            </div>
            {fetchError && <p className="mt-2 text-[13px] text-red-500">{fetchError}</p>}
            <p className="mt-2 text-[12px] text-nexus-text-secondary">
              Pulls the title, description &amp; preview image. Edit anything below before saving.
            </p>
          </div>

          {/* Editable form */}
          <form onSubmit={handleSave} className="mt-6 space-y-4">
            {form.thumbnail && (
              <div className="overflow-hidden rounded-xl border border-black/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.thumbnail}
                  alt="Preview"
                  className="h-44 w-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}

            <div>
              <label className={labelClass}>Title *</label>
              <input
                className={inputClass}
                value={form.title}
                onChange={(e) => update('title', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Category</label>
                <select
                  className={inputClass}
                  value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                >
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="ai">AI &amp; LLM</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex cursor-pointer items-center gap-2 text-[14px] text-nexus-navy dark:text-slate-200">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => update('featured', e.target.checked)}
                    className="h-4 w-4 accent-nexus-blue"
                  />
                  Featured project
                </label>
              </div>
            </div>

            <div>
              <label className={labelClass}>Description</label>
              <textarea
                className={`${inputClass} min-h-[80px] resize-y`}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Preview image URL</label>
              <input
                className={inputClass}
                value={form.thumbnail}
                onChange={(e) => update('thumbnail', e.target.value)}
                placeholder="https://…"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Website URL</label>
                <input
                  className={inputClass}
                  value={form.liveUrl}
                  onChange={(e) => update('liveUrl', e.target.value)}
                  placeholder="https://…"
                />
              </div>
              <div>
                <label className={labelClass}>Behance URL</label>
                <input
                  className={inputClass}
                  value={form.behanceUrl}
                  onChange={(e) => update('behanceUrl', e.target.value)}
                  placeholder="https://behance.net/…"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Technologies <span className="text-nexus-text-tertiary">(comma-separated)</span>
              </label>
              <input
                className={inputClass}
                value={form.technologies}
                onChange={(e) => update('technologies', e.target.value)}
                placeholder="Next.js, TypeScript, Tailwind CSS"
              />
            </div>

            <details className="rounded-lg border border-black/[0.06] p-4">
              <summary className="cursor-pointer text-[13px] font-medium text-nexus-navy dark:text-slate-200">
                Case-study details (optional)
              </summary>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className={labelClass}>Client</label>
                    <input className={inputClass} value={form.client} onChange={(e) => update('client', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Industry</label>
                    <input className={inputClass} value={form.industry} onChange={(e) => update('industry', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Duration</label>
                    <input className={inputClass} value={form.duration} onChange={(e) => update('duration', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Challenge</label>
                  <textarea className={`${inputClass} min-h-[70px] resize-y`} value={form.challenge} onChange={(e) => update('challenge', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Solution</label>
                  <textarea className={`${inputClass} min-h-[70px] resize-y`} value={form.solution} onChange={(e) => update('solution', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>
                    Results <span className="text-nexus-text-tertiary">(one per line)</span>
                  </label>
                  <textarea className={`${inputClass} min-h-[70px] resize-y`} value={form.results} onChange={(e) => update('results', e.target.value)} />
                </div>
              </div>
            </details>

            {saveError && <p className="text-[13px] text-red-500">{saveError}</p>}

            <button
              type="submit"
              disabled={saving || !form.title.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-nexus-navy px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-nexus-navy/90 disabled:opacity-50 dark:bg-nexus-blue dark:hover:bg-nexus-blue-dark"
            >
              {saving ? (
                <Loader2 size={15} className="animate-spin" />
              ) : saved ? (
                <CheckCircle2 size={15} />
              ) : (
                <Plus size={15} />
              )}
              {saving ? 'Saving…' : saved ? 'Saved!' : 'Add Project'}
            </button>
          </form>
        </section>

        {/* Right: existing projects */}
        <section>
          <h2 className="mb-3 text-[13px] font-medium uppercase tracking-wide text-nexus-text-secondary">
            Published projects ({projects.length})
          </h2>

          {loadingList ? (
            <div className="flex items-center gap-2 text-[14px] text-nexus-text-secondary">
              <Loader2 size={15} className="animate-spin" /> Loading…
            </div>
          ) : projects.length === 0 ? (
            <p className="rounded-xl border border-dashed border-black/[0.1] p-6 text-[14px] text-nexus-text-secondary">
              No projects yet. Add your first one using the form.
            </p>
          ) : (
            <div className="space-y-3">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-3 rounded-xl border border-black/[0.06] bg-white dark:bg-white/[0.03] p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-nexus-surface">
                    {p.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.thumbnail} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-nexus-text-tertiary">
                        <ImageOff size={18} />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-[14px] font-medium text-nexus-navy dark:text-slate-100">
                        {p.title}
                      </p>
                      {p.featured && (
                        <span className="rounded bg-nexus-blue/[0.1] px-1.5 py-0.5 text-[10px] font-medium uppercase text-nexus-blue">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 truncate text-[12px] text-nexus-text-secondary">
                      {p.description || '—'}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="text-[11px] uppercase text-nexus-text-tertiary">
                        {p.category}
                      </span>
                      {(p.liveUrl || p.behanceUrl) && (
                        <a
                          href={p.liveUrl || p.behanceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-nexus-blue hover:underline"
                        >
                          Visit <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="self-start rounded-lg p-2 text-nexus-text-tertiary transition-colors hover:bg-red-500/10 hover:text-red-500"
                    aria-label="Delete project"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
