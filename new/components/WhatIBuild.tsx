export function WhatIBuild() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-8">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
            What I build
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink">
            Practical digital products built for business and growth.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">AI applications</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              Conversational assistants, automated workflows, and smart interfaces that add value for teams and customers.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">Business websites</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              SEO-focused, conversion-ready sites that present brands clearly and perform reliably.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">SaaS platforms</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              Scalable dashboards, user accounts, and operational backends for growing businesses.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">Chat systems</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              Real-time messaging, AI chatbots, and customer communication built for clarity and trust.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">Automation tools</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              Integrations and systems that reduce manual work and keep teams focused on results.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/90 p-7 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">SEO & performance</h3>
            <p className="mt-4 text-sm leading-relaxed text-inksoft">
              Technical optimization, search visibility, and speed tuning for digital products that need to be seen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
