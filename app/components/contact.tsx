import { Briefcase, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-20 pt-8">
      <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--saffron)]">
          Contact
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.05em] text-[var(--foreground)]">
          Let&apos;s build something thoughtful together.
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <a
            href="mailto:contact@ichou.icu"
            className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4 transition-opacity hover:opacity-90"
          >
            <Mail size={18} className="text-[var(--teal)]" />
            <p className="mt-3 text-sm text-[var(--foreground)]">contact@ichou.icu</p>
          </a>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4">
            <MapPin size={18} className="text-[var(--teal)]" />
            <p className="mt-3 text-sm text-[var(--foreground)]">Morocco — remote friendly</p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4">
            <Briefcase size={18} className="text-[var(--teal)]" />
            <p className="mt-3 text-sm text-[var(--foreground)]">Freelance & contract work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
