import { ZelligeStar } from "./ZelligeStar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line texture"
    >
      <ZelligeStar
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.08] animate-spinslow"
        color="#1D5C6B"
      />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
          Based In Morocco
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
          I build AI-powered web applications that solve real business problems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-inksoft">
          I am a full-stack developer specializing in Laravel, Next.js, AI integrations, SEO, and scalable web applications. I design premium digital products that feel personal, perform reliably, and move companies forward.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-plaster transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
