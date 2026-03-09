import { Briefcase, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-16 pt-20">
      <div className="rounded-lg border border-slate-900/15 bg-white p-6 shadow-[0_18px_34px_rgba(15,23,42,0.1)] dark:border-slate-700 dark:bg-slate-900 sm:p-8">
        <p className="text-xs tracking-[0.24em] text-slate-500 uppercase dark:text-slate-300">Contact</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl dark:text-white">
          Let&apos;s work together on your next project.
        </h2>
        <div className="mt-3 h-1.5 w-44 rounded-sm bg-cyan-600" />

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <a
            href="mailto:ichchoun@gmail.com"
            className="rounded-sm border border-slate-900/15 bg-slate-50 p-4 transition-colors hover:border-cyan-700/35 dark:border-slate-700 dark:bg-slate-800"
          >
            <Mail size={18} className="text-cyan-700" />
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">ichchoun@gmail.com</p>
          </a>

          <div className="rounded-sm border border-slate-900/15 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <MapPin size={18} className="text-rose-600" />
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Morocco - Available for Remote Work</p>
          </div>

          <div className="rounded-sm border border-slate-900/15 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <Briefcase size={18} className="text-cyan-700" />
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Freelance & Contract Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
