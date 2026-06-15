'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Loader2 } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Login failed.');
        return;
      }
      const from = searchParams.get('from') || '/admin';
      router.push(from);
      router.refresh();
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexus-surface/60 dark:bg-nexus-navy px-6">
      <div className="w-full max-w-[380px]">
        <div className="rounded-2xl border border-black/[0.06] bg-white dark:bg-white/[0.03] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-nexus-blue/[0.08] text-nexus-blue">
              <Lock size={18} />
            </div>
            <div>
              <h1 className="font-display text-[18px] font-semibold text-nexus-navy dark:text-slate-100">
                Admin Access
              </h1>
              <p className="text-[12px] text-nexus-text-secondary">Nexus Technology</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-nexus-navy dark:text-slate-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full rounded-lg border border-black/[0.08] bg-white dark:bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-nexus-navy dark:text-slate-100 outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <p className="text-[13px] text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-nexus-blue px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-nexus-blue-dark disabled:opacity-50"
            >
              {loading && <Loader2 size={15} className="animate-spin" />}
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-nexus-surface/60 dark:bg-nexus-navy">
          <Loader2 className="animate-spin text-nexus-text-tertiary" size={24} />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
