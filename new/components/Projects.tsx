import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-2 zellige-divider w-16" />
        <h2 className="font-display text-3xl font-medium text-ink">
          Featured projects
        </h2>
        <p className="mt-3 max-w-lg text-[15px] text-inksoft">
          Real products for real users: hotel concierge systems, language platforms,
          faith apps, travel brands, and AI-first experiences designed for scale.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-[1.75rem] border border-line bg-white/80 p-6 shadow-sm"
            >
              <span className="font-mono text-[12px] uppercase tracking-wide text-saffron">
                {project.domain}
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                {project.name}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-inksoft">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((stackItem) => (
                  <span
                    key={stackItem}
                    className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-inksoft"
                  >
                    {stackItem}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
