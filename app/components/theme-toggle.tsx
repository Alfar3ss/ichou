"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved: Theme = stored ?? (systemPrefersDark ? "dark" : "light");

    applyTheme(resolved);
  }, []);

  const toggleTheme = () => {
    const current: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const next: Theme = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      data-cursor="link"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center rounded-md border border-slate-900/15 bg-white p-2 text-slate-900 transition-colors hover:bg-cyan-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    >
      <Moon size={16} className="block dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}
