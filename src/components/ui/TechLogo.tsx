'use client';

export function TechLogo({ name, abbr }: { name: string; abbr: string }) {
  const common = 'w-10 h-10';
  const mono = (
    <div className={`${common} rounded-lg bg-nexus-navy/[0.04] dark:bg-white/[0.06] flex items-center justify-center
      text-[13px] font-mono font-medium text-nexus-navy/70 dark:text-slate-300`}>
      {abbr}
    </div>
  );
 

  const icon: Record<string, string> = {
  React: 'react',
  'Next.js': 'nextdotjs',
  TypeScript: 'typescript',
  'Node.js': 'nodedotjs',
  Express: 'express',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Redis: 'redis',

  // FIXED
  Kubernetes: 'kubernetes',

  Docker: 'docker',
  Vercel: 'vercel',
  Tailwind: 'tailwindcss',

  Flutter: 'flutter',
  'React Native': 'react',
  Swift: 'swift',
  Kotlin: 'kotlin',
  Firebase: 'firebase',
  Supabase: 'supabase',
  GraphQL: 'graphql',

  Python: 'python',
  TensorFlow: 'tensorflow',
  PyTorch: 'pytorch',

  // FIXED
  n8n: 'n8n',
  LangChain: 'langchain',
  HuggingFace: 'huggingface',
  FastAPI: 'fastapi',

  // FIXED
  crewAi: 'crewai',
  
  SQL: 'mysql',
  
 

  // REST APIs
  'REST APIs': 'fastapi',
  'scikit-learn': 'scikitlearn',
};
  const slug = icon[name];
  if (!slug) return mono;

  const url = `https://cdn.simpleicons.org/${slug}`;

  // Some logos (e.g. Next.js/Vercel) are black by default; show a white variant in dark mode.
  if (slug === 'nextdotjs' || slug === 'vercel' || slug === 'express') {
    const lightUrl = `https://cdn.simpleicons.org/${slug}/000`;
    const darkUrl = `https://cdn.simpleicons.org/${slug}/fff`;
    return (
      <>
        <img src={lightUrl} alt={`${name} logo`} width={40} height={40} className={`${common} dark:hidden`} loading="lazy" />
        <img src={darkUrl} alt={`${name} logo`} width={40} height={40} className={`${common} hidden dark:block`} loading="lazy" />
      </>
    );
  }

  return <img src={url} alt={`${name} logo`} width={40} height={40} className={common} loading="lazy" />;
}