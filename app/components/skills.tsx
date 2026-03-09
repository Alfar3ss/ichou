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
    <section id="skills" className="scroll-mt-24 pt-20">
      <p className="text-xs tracking-[0.24em] text-slate-500 uppercase dark:text-slate-300">Skills</p>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl dark:text-white">
        Expertise & Toolkit
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="relative overflow-hidden rounded-lg border border-slate-900/15 bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 ${index % 2 === 0 ? "bg-cyan-600" : "bg-rose-600"}`}
              />
              <div className="flex items-center gap-2">
                <Icon className={index % 2 === 0 ? "text-cyan-700" : "text-rose-600"} size={20} />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>

              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700 dark:text-slate-200">
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
