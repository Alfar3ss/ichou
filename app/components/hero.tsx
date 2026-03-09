"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const headlines = ["Modern Websites", "Web Platforms", "Digital Tools"];

const typingSpeed = 80;
const deletingSpeed = 45;
const holdTime = 1200;

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timer = window.setTimeout(
      () => {
        if (!deleting && display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
          return;
        }

        if (!deleting && display.length === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
          return;
        }

        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      },
      !deleting && display.length === current.length
        ? holdTime
        : deleting
          ? deletingSpeed
          : typingSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [deleting, display, wordIndex, words]);

  return display;
}

export function Hero() {
  const text = useTypewriter(headlines);

  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const springX = useSpring(magneticX, { stiffness: 220, damping: 18 });
  const springY = useSpring(magneticY, { stiffness: 220, damping: 18 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateXSpring = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const glowX = useTransform(springX, [-24, 24], [35, 65]);
  const glowY = useTransform(springY, [-24, 24], [35, 65]);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(6,182,212,0.26), rgba(15,23,42,0.06) 50%, transparent 78%)`;

  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-sm border border-slate-900/15 bg-white px-3 py-1 text-xs font-semibold tracking-[0.24em] text-slate-700 uppercase shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Full-Stack Web Developer & IT Specialist
          </p>

          <h1 className="text-4xl font-black leading-[1.05] text-balance sm:text-6xl lg:text-7xl text-slate-950 dark:text-white">
            I build modern websites, web platforms, and digital tools for businesses and startups.
          </h1>

          <div className="flex items-center gap-3">
            <div className="h-2 w-28 rounded-sm bg-cyan-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-300">Issue 2026</span>
          </div>

          <p className="max-w-xl text-base text-slate-800 sm:text-lg dark:text-slate-100">
            From tourism platforms to AI-powered applications, I focus on creating practical, scalable, and
            user-friendly solutions.
          </p>

          <p className="max-w-xl text-base text-slate-800 sm:text-lg dark:text-slate-100">
            <span className="mr-2 text-slate-500 dark:text-slate-300">I work with</span>
            <span className="font-semibold text-cyan-700">{text}</span>
            <span className="ml-1 animate-pulse text-rose-500">|</span>
          </p>

          <p className="max-w-xl text-sm text-slate-700 sm:text-base dark:text-slate-200">
            Technologies: PHP • JavaScript • Next.js • MySQL • Android • APIs • Cloud Hosting
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              data-cursor="link"
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = event.clientX - rect.left - rect.width / 2;
                const y = event.clientY - rect.top - rect.height / 2;
                magneticX.set(x * 0.18);
                magneticY.set(y * 0.18);
              }}
              onMouseLeave={() => {
                magneticX.set(0);
                magneticY.set(0);
              }}
              style={{ x: springX, y: springY, backgroundImage: glow }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm border border-cyan-800/30 bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(8,145,178,0.32)]"
              whileTap={{ scale: 0.97 }}
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Alfar3ss/"
                data-cursor="link"
                aria-label="GitHub"
                className="rounded-sm border border-slate-900/15 bg-white p-2 text-slate-700 transition-colors hover:bg-cyan-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nour-eddine-ichchou-562aa02ba/"
                data-cursor="link"
                aria-label="LinkedIn"
                className="rounded-sm border border-slate-900/15 bg-white p-2 text-slate-700 transition-colors hover:bg-cyan-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-[22rem]"
        >
          <motion.div
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const px = (event.clientX - rect.left) / rect.width;
              const py = (event.clientY - rect.top) / rect.height;
              rotateY.set((px - 0.5) * 12);
              rotateX.set((0.5 - py) * 12);
            }}
            onMouseLeave={() => {
              rotateX.set(0);
              rotateY.set(0);
            }}
            style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
            className="relative aspect-[1015/1400] rounded-lg border border-slate-900/15 bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.2),transparent_44%),radial-gradient(circle_at_80%_85%,rgba(244,63,94,0.14),transparent_50%)]" />
            <Image
              src="/profile.png"
              alt="Nour-Eddine Ichchou profile"
              fill
              sizes="(max-width: 768px) 80vw, 28rem"
              priority
              className="rounded-md object-cover object-top"
            />
          </motion.div>

          <div className="mt-4 rounded-lg border border-slate-900/15 bg-white p-5 shadow-[0_14px_24px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Hi, I&apos;m Nour-Eddine Ichchou, a developer from Morocco.</h2>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              I specialize in building web platforms, business websites, and custom digital tools. I enjoy
              transforming ideas into real products that people can use every day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
