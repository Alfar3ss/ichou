"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/app/components/magnetic";
import { ThemeToggle } from "@/app/components/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="rounded-lg border border-slate-900/15 bg-white/95 px-4 py-3 backdrop-blur-md shadow-[0_10px_24px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900/95">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            data-cursor="link"
            className="text-sm font-black tracking-[0.14em] text-slate-950 uppercase dark:text-white"
          >
            Nour-Eddine Ichchou
          </Link>

          <ul className="hidden items-center gap-1 rounded-md border border-slate-900/15 bg-slate-50 px-1 py-1 md:flex dark:border-slate-700 dark:bg-slate-800">
            {links.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.16}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    className="rounded-sm px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-cyan-600 hover:text-white dark:text-slate-200"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md border border-slate-900/15 bg-white p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 space-y-2 border-t border-slate-900/15 pt-3 dark:border-slate-700 md:hidden"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    className="block rounded-sm px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-cyan-600 hover:text-white dark:text-slate-200"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
