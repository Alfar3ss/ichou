"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

type CursorMode = "default" | "link" | "card";

const POINTER_QUERY = "(pointer: fine)";

function subscribePointerChange(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(POINTER_QUERY);
  const handler = () => onStoreChange();
  mediaQuery.addEventListener("change", handler);

  return () => {
    mediaQuery.removeEventListener("change", handler);
  };
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(POINTER_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribePointerChange,
    getPointerSnapshot,
    getServerSnapshot,
  );
  const [mode, setMode] = useState<CursorMode>("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 700, damping: 42 });
  const y = useSpring(mouseY, { stiffness: 700, damping: 42 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest<HTMLElement>('[data-cursor="card"]');
      if (card) {
        setMode("card");
        return;
      }

      const link = target.closest<HTMLElement>('a,button,[data-cursor="link"]');
      if (link) {
        setMode("link");
        return;
      }

      setMode("default");
    };

    const onLeaveWindow = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onLeaveWindow);
    };
  }, [enabled, mouseX, mouseY]);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");
    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const outerClasses =
    mode === "card"
      ? "h-14 w-14 border-2 border-cyan-500/80 bg-cyan-500/10 shadow-[0_0_24px_rgba(6,182,212,0.45)] dark:border-cyan-300 dark:bg-cyan-300/15 dark:shadow-[0_0_30px_rgba(34,211,238,0.65)]"
      : mode === "link"
        ? "h-10 w-10 border-2 border-rose-500/80 bg-rose-500/10 shadow-[0_0_20px_rgba(244,63,94,0.35)] dark:border-fuchsia-300 dark:bg-fuchsia-300/10 dark:shadow-[0_0_24px_rgba(244,114,182,0.6)]"
        : "h-7 w-7 border border-slate-900/40 bg-slate-900/5 shadow-[0_0_14px_rgba(15,23,42,0.18)] dark:border-slate-100/90 dark:bg-slate-50/20 dark:shadow-[0_0_20px_rgba(248,250,252,0.45)]";

  const innerClasses =
    mode === "card"
      ? "h-2.5 w-2.5 bg-cyan-600 dark:bg-cyan-200"
      : mode === "link"
        ? "h-2.5 w-2.5 bg-rose-500 dark:bg-fuchsia-200"
        : "h-2 w-2 bg-slate-900 dark:bg-white";

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color] duration-150 ${outerClasses}`}
        style={{ x, y }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[101] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color] duration-150 ${innerClasses}`}
        style={{ x, y }}
      />
    </>
  );
}
