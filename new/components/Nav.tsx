const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-plaster/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          Ichou<span className="text-saffron">.</span>
        </a>
        <ul className="hidden gap-8 font-mono text-[13px] uppercase tracking-wide text-inksoft sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-teal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-teal px-4 py-1.5 font-mono text-[13px] text-teal transition-colors hover:bg-teal hover:text-plaster"
        >
          Let&apos;s build something
        </a>
      </nav>
    </header>
  );
}
