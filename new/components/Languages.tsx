import { languages } from "@/lib/content";

export function Languages() {
  return (
    <section id="languages" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-4">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
            Languages
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink">
            Clear communication across every experience.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-3xl border border-line bg-white/80 p-6 shadow-sm"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-inksoft">
                {lang.name}
              </p>
              <p className="mt-4 font-display text-2xl font-semibold text-ink">
                {lang.level}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-inksoft">
                {lang.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
