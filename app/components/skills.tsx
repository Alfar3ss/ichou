import { Database, GitBranch, Globe, Smartphone } from "lucide-react";

const groups = [
  {
    title: "Web Development",
    icon: Globe,
    items: ["PHP", "JavaScript", "Next.js", "HTML / CSS"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    items: ["MySQL", "API Integration", "Authentication Systems"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: ["Android (Kotlin / XML)"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    items: ["Git", "Cloudflare", "cPanel", "Vercel", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--saffron)]">
        Skills
      </p>
      <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-[-0.05em] text-[var(--foreground)]">
        Practical expertise across product, code, and systems.
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--teal)]">
                  <Icon size={17} />
                </span>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--saffron)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
