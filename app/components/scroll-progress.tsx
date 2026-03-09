"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Chapter 01" },
  { id: "about", label: "Chapter 02" },
  { id: "projects", label: "Chapter 03" },
  { id: "skills", label: "Chapter 04" },
  { id: "contact", label: "Chapter 05" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });

  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const marker = window.innerHeight * 0.35;

      for (const element of sectionElements) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom >= marker) {
          setActiveId(element.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="Page chapters">
        <div className="rounded-md border border-slate-900/15 bg-white/95 p-3 shadow-[0_12px_22px_rgba(15,23,42,0.14)] backdrop-blur">
          <div className="mb-3 flex gap-2">
            <div className="relative h-24 w-1 rounded-full bg-slate-200">
              <motion.div className="absolute inset-x-0 top-0 rounded-full bg-cyan-600" style={{ scaleY: progress, transformOrigin: "top" }} />
            </div>

            <div className="space-y-1.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  data-cursor="link"
                  className={`block rounded-sm px-2 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                    activeId === section.id ? "bg-cyan-600 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <motion.div className="fixed left-0 top-0 z-50 h-1 bg-cyan-600 xl:hidden" style={{ scaleX: progress, transformOrigin: "left" }} />
    </>
  );
}
