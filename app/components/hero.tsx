export function Hero() {
  const stack = ["Next.js", "Laravel", "AI", "SEO", "UX"];

  return (
    <section id="home" className="relative border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--saffron)]">
            Based in Morocco
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[0.94] tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            I build thoughtful digital products for ambitious teams.
          </h1>

          <p className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-[var(--muted)]">
            I&apos;m Nour-Eddine Ichchou, a full-stack developer creating calm, useful, and high-performing experiences for businesses, products, and people.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--teal)] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f8f4ec] transition-opacity hover:opacity-90"
            >
              View projects
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.5)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
