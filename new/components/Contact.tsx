export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden texture">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
          Let&apos;s build together
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Bring your next digital product to life with clarity, speed, and AI support.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-line bg-white/90 p-6 shadow-sm">
            <a
              href="mailto:contact@ichou.icu"
              aria-label="Email"
              title="Email"
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition hover:bg-teal/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M4 5.5h16v13H4z" />
                <path d="M4 5.5l8 6.5 8-6.5" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-6 shadow-sm">
            <a
              href="https://ichou.icu"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              title="Website"
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition hover:bg-teal/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18" />
                <path d="M2 12h20" />
                <path d="M5 6a15 15 0 0 0 14 0" />
                <path d="M5 18a15 15 0 0 1 14 0" />
              </svg>
              <span className="sr-only">Website</span>
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-6 shadow-sm">
            <a
              href="https://github.com/alfar3ss/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition hover:bg-teal/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6 0-.3 0-1.1 0-2.1-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.2.7.2.7 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5-1.3-5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.5 2.9-.5 1 0 2 .2 2.9.5 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.5 5.6-5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-6 shadow-sm">
            <a
              href="https://www.linkedin.com/in/nour-eddine-ichchou-562aa02ba/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition hover:bg-teal/20"
            >
              <svg viewBox="0 0 382 382" fill="currentColor" className="h-7 w-7">
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:hello@ichou.icu"
            className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 font-mono text-[13px] uppercase tracking-wide text-plaster transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s build something
          </a>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-[12px] text-inksoft sm:flex-row">
          <span>© {new Date().getFullYear()} Nour. Built with Next.js and Tailwind CSS.</span>
          <span>Crafted in Morocco.</span>
        </div>
      </footer>
    </section>
  );
}
