const focusAreas = [
  "Tourism platforms",
  "AI-powered applications",
  "Language learning websites",
  "Business dashboards and admin systems",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--saffron)]">
            About
          </p>
          <h2 className="mt-4 max-w-sm font-display text-4xl leading-tight tracking-[-0.05em] text-[var(--foreground)]">
            Product-minded, business-aware, and design-conscious.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-[1.02rem] leading-relaxed text-[var(--muted)]">
            I work across tourism, education, AI, and business systems to build interfaces and tools that feel
            clear, useful, and easy to trust. My work sits between product thinking, implementation, and a more
            human approach to digital experiences.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className={`rounded-2xl border p-3 text-sm text-[var(--foreground)] ${
                  index % 2 === 0 ? "border-[var(--line)] bg-[var(--surface-soft)]" : "border-[rgba(122,46,58,0.18)] bg-[rgba(122,46,58,0.03)]"
                }`}
              >
                {area}
              </div>
            ))}
          </div>

          <p className="mt-6 text-[1.02rem] leading-relaxed text-[var(--muted)]">
            I&apos;m open to freelance work, collaborations, and international opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
