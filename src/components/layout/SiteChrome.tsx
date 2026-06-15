'use client';

import { usePathname } from 'next/navigation';

// Hides the public Navbar/Footer on admin routes, which have their own chrome.
export default function SiteChrome({
  navbar,
  footer,
  children,
}: {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      {navbar}
      <main className="min-h-screen">{children}</main>
      {footer}
    </>
  );
}
