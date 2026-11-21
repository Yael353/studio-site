"use client";

import { useRef } from "react";

import projects from "../../data/projects";
import ProjectCard from "./project-card";
import { ProjectsIntro } from "./projects-intro";
import { useProjectScroll } from "./use-project-scroll";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useProjectScroll(sectionRef, trackRef, progressRef);

  const total = String(projects.length).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      id="projekt"
      className="relative bg-canvas md:motion-safe:h-screen md:motion-safe:overflow-hidden"
    >
      {/* mobil */}
      <div className="px-6 py-24 md:motion-safe:hidden md:motion-reduce:px-12">
        <div className="mx-auto max-w-6xl">
          <ProjectsIntro />

          <div className="mt-14 grid gap-14 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden h-full md:motion-safe:block">
        <div className="pointer-events-none absolute left-12 top-10 z-20 lg:left-20">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-muted">
            03 / Utvalda projekt
          </span>
        </div>

        <div
          ref={trackRef}
          className="flex h-full w-max items-center gap-8 px-12 lg:gap-12 lg:px-20"
        >
          <ProjectsIntro horizontal />

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              horizontal
            />
          ))}
        </div>

        {/* progress */}
        <div className="pointer-events-none absolute bottom-9 left-12 right-12 z-20 flex items-center gap-8 lg:left-20 lg:right-20">
          <span className="shrink-0 font-mono text-xs tracking-[0.2em] text-ink-muted">
            01 — {total}
          </span>

          <div className="relative h-px flex-1 bg-ink/15">
            <div
              ref={progressRef}
              className="absolute inset-0 origin-left scale-x-0 bg-ink"
            />
          </div>

          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Projekt
          </span>
        </div>
      </div>
    </section>
  );
}
