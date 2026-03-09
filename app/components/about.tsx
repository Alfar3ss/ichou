import { CheckCircle2 } from "lucide-react";

const focusAreas = [
  "Tourism platforms",
  "AI-powered applications",
  "Language learning websites",
  "Business dashboards and admin systems",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-20">
      <p className="text-xs tracking-[0.24em] text-slate-500 uppercase dark:text-slate-300">About</p>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl dark:text-white">
        Turning ideas into practical products
      </h2>

      <div className="mt-8 rounded-lg border border-slate-900/15 bg-white p-6 shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900 sm:p-8">
        <div className="mb-5 h-1.5 w-36 rounded-sm bg-cyan-600" />
        <p className="text-slate-700 dark:text-slate-200">
          I have worked on projects including tourism platforms, AI-powered applications, language learning
          websites, and business dashboards with admin systems.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-sm border border-slate-900/15 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
            >
              <CheckCircle2 size={16} className={index % 2 === 0 ? "text-cyan-700" : "text-rose-600"} />
              <span className="text-sm text-slate-700 dark:text-slate-200">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-slate-700 dark:text-slate-200">
          I&apos;m always open to freelance work, collaborations, and international opportunities.
        </p>
      </div>
    </section>
  );
}
