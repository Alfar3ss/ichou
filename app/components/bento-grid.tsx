"use client";

import { ArrowUpRight, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "@/app/components/magnetic";

type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  span: string;
  challenge: string;
  solution: string;
  impact: string;
};

const projects: Project[] = [
  {
    title: "ExploreDarija",
    description: "AI-powered Moroccan Darija learning platform with interactive chatbot features.",
    tags: ["PHP", "OpenAI API", "JavaScript", "Firebase"],
    url: "https://exploredarija.com",
    span: "sm:col-span-2",
    challenge: "Deliver engaging language practice that feels conversational and culturally native.",
    solution:
      "Built interactive chatbot flows with AI-assisted lessons, quick practice loops, and mobile-first interface patterns.",
    impact: "Improved learning retention through short, repeatable sessions and instant feedback.",
  },
  {
    title: "GoAdventuresMorocco",
    description: "Tourism website promoting authentic Moroccan travel experiences.",
    tags: ["Web Development", "SEO", "Cloudflare", "Hosting"],
    url: "https://goadventuresmorocco.com",
    span: "sm:col-span-1",
    challenge: "Present local travel offers with trust, speed, and clear booking paths.",
    solution:
      "Created an SEO-focused content architecture, optimized media delivery, and clear conversion-first layouts.",
    impact: "Higher discoverability and smoother user journey from search to inquiry.",
  },
  {
    title: "Fluency Center Dashboard",
    description: "Education management dashboard for teachers, students, and class administration.",
    tags: ["PHP", "MySQL", "JavaScript"],
    url: "https://fluency.center",
    span: "sm:col-span-1",
    challenge: "Manage complex class operations while keeping interface simple for daily use.",
    solution:
      "Designed role-based dashboard modules for attendance, schedules, and communication with clear navigation.",
    impact: "Reduced admin friction and improved visibility across teacher and student workflows.",
  },
  {
    title: "Whisper to the Void (AI App)",
    description: "AI-based emotional support web app combining poetry responses and Quranic references.",
    tags: ["OpenAI API", "PHP", "JS", "Interactive UI"],
    span: "sm:col-span-2",
    challenge:
      "Balance emotional sensitivity with meaningful responses in a calm and respectful user experience.",
    solution:
      "Built prompt strategies and guided interaction flows with gentle UI tone and minimal cognitive load.",
    impact: "Created a comforting, reflective digital experience with high user engagement.",
  },
  {
    title: "The English School Center",
    description: "Website and education management dashboard for teachers, students, and class administration.",
    tags: ["PHP", "MySQL", "JavaScript"],
    url: "https://theenglishschool.center",
    span: "sm:col-span-2",
    challenge: "Combine public website communication with operational back-office tools.",
    solution:
      "Implemented a unified platform that supports admissions content, class management, and staff workflows.",
    impact: "Streamlined operations and improved communication between school and learners.",
  },
];

type ProjectCardProps = {
  index: number;
  project: Project;
  onOpen: (project: Project) => void;
};

function ProjectCard({ index, project, onOpen }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(x, { stiffness: 140, damping: 18 });

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        x.set((px - 0.5) * 8);
        y.set((0.5 - py) * 8);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      data-cursor="card"
      className={`group relative overflow-hidden rounded-lg border border-slate-900/15 bg-white p-5 shadow-[0_14px_24px_rgba(15,23,42,0.07)] dark:border-slate-700 dark:bg-slate-900 ${project.span}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-cyan-600" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(125deg,rgba(6,182,212,0.14),rgba(244,63,94,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-md border border-slate-900/5 dark:border-slate-700/40" />

      <div className="relative z-10">
        <p className="mb-2 inline-flex rounded-sm border border-slate-900/20 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-slate-600 uppercase dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Issue {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-slate-900/15 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Magnetic strength={0.16}>
            <button
              type="button"
              data-cursor="link"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 rounded-sm border border-slate-900/20 bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
            >
              Open Case File
            </button>
          </Magnetic>

          {project.url ? (
            <Magnetic strength={0.16}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-1.5 rounded-sm border border-cyan-800/25 bg-cyan-600 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(8,145,178,0.24)]"
                aria-label={`Open ${project.title}`}
              >
                Visit Project <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="scroll-mt-24 pt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.24em] text-slate-500 uppercase dark:text-slate-300">Featured Projects</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl dark:text-white">Selected Work</h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/45 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.dialog
              open
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl rounded-lg border border-slate-900/15 bg-white p-0 shadow-[0_30px_60px_rgba(15,23,42,0.25)] dark:border-slate-700 dark:bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-300">Case Study</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{selectedProject.title}</h3>
                </div>

                <button
                  type="button"
                  data-cursor="link"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-sm border border-slate-900/20 p-2 text-slate-700 transition-colors hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-slate-200"
                  aria-label="Close case study"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-5 px-5 py-5">
                <p className="text-sm text-slate-700 dark:text-slate-200">{selectedProject.description}</p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <article className="rounded-sm border border-slate-900/15 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">Challenge</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{selectedProject.challenge}</p>
                  </article>
                  <article className="rounded-sm border border-slate-900/15 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">Solution</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{selectedProject.solution}</p>
                  </article>
                  <article className="rounded-sm border border-slate-900/15 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">Impact</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{selectedProject.impact}</p>
                  </article>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-slate-900/15 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-cyan-800/25 bg-cyan-600 px-3 py-1.5 text-sm font-semibold text-white"
                  >
                    Launch Live Project <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </motion.dialog>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
