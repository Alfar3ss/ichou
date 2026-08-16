import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,244,236,0.9)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="#home" className="font-display text-[1.35rem] leading-none tracking-[-0.04em] text-[var(--foreground)]">
          Ichou<span className="text-[var(--saffron)]">.</span>
        </Link>

        <ul className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-[var(--teal)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-[var(--teal)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f8f4ec] transition-opacity hover:opacity-90"
        >
          Let&apos;s build
        </a>
      </nav>
    </header>
  );
}
