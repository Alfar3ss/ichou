import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
            Skills
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink">
            Clear categories, practical experience, and modern delivery.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-3xl border border-line bg-white/80 p-8 shadow-sm"
            >
              <h3 className="font-mono text-[13px] uppercase tracking-wide text-saffron">
                {group.label}
              </h3>
              <p className="mt-3 text-sm text-inksoft">
                {group.description}
              </p>
              <div className="mt-8 space-y-5">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-display text-sm font-medium text-ink">
                        {item.name}
                      </p>
                      <span className="text-[12px] uppercase tracking-[0.18em] text-inksoft">
                        {item.level}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-teal transition-all"
                        style={{ width: item.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
