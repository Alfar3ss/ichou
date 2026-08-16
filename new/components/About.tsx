export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 grid gap-10 sm:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-saffron">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink">
            A confident, business-first developer shaped by people and product.
          </h2>
        </div>

        <div className="space-y-6 text-[15px] leading-relaxed text-inksoft">
          <p>
            I began my career as an HSE Coordinator, where every decision had to
            balance safety, timing, and practical results. That role taught me
            how to listen to teams and turn complex requirements into clear
            actions.
          </p>
          <p>
            From there I moved into multi-site IT support and learned how to
            keep systems running across schools and offices. Later, working in
            the tourism industry, I managed digital marketing and SEO for travel
            brands, which gave me a direct understanding of how online visibility,
            messaging, and user experience shape real business outcomes.
          </p>
          <p>
            That path led naturally to full-stack development. In 2025 I earned
            my Full Stack Development diploma from Excel Clever School, and today
            I build web applications that combine practical business sense with
            modern AI, performance, and thoughtful design.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-6">
            <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-saffron">
              Career path
            </span>
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-display text-xl font-medium text-ink">HSE Coordinator</p>
                <p className="mt-2 text-[14px] text-inksoft">
                  Built reliability across industrial teams by combining clear process with practical execution.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-ink">IT Support Specialist</p>
                <p className="mt-2 text-[14px] text-inksoft">
                  Supported multi-site systems, solved urgent technical issues, and kept operations moving.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-ink">Tourism & Digital Marketing</p>
                <p className="mt-2 text-[14px] text-inksoft">
                  Worked with travel brands on SEO, content, and conversion-focused digital experiences.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-ink">Full Stack Development Diploma (2025)</p>
                <p className="mt-2 text-[14px] text-inksoft">
                  Excel Clever School formalized my technical skillset and connected it to product thinking.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-ink">Full Stack & AI Developer</p>
                <p className="mt-2 text-[14px] text-inksoft">
                  Today I build AI-powered web applications, automation tools, and high-performance websites.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-6">
            <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-saffron">
              What I bring
            </span>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-inksoft">
              <p>
                I build solutions that are easy for teams to manage, simple for users to trust, and powerful enough to support business growth. My work bridges the gap between technical capability and commercial value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal">•</span>
                  <span>AI integrations that improve customer support, lead capture, and personalization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal">•</span>
                  <span>Business websites with strong SEO, performance, and conversion clarity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal">•</span>
                  <span>Scalable SaaS platforms, real-time messaging, and admin dashboards built to grow.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
