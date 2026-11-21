"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../data/projects";
import ProjectCard from "./projectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !track || !progress) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, motion } = context.conditions ?? {};

        if (!desktop || !motion) return;

        const getDistance = () =>
          Math.max(0, track.scrollWidth - section.clientWidth + 10);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(1, getDistance())}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              gsap.set(progress, {
                scaleX: self.progress,
                transformOrigin: "left center",
              });
            },
          },
        });
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projekt"
      className="
        relative bg-canvas
        md:h-screen md:overflow-hidden
        motion-reduce:md:h-auto
        motion-reduce:md:overflow-visible
      "
    >
      {/* Mobil*/}
      <div
        className="
          block px-6 py-24
          md:hidden
          motion-reduce:md:block
          motion-reduce:md:px-12
        "
      >
        <div className="mx-auto max-w-6xl">
          <span
            className="
              font-sans text-xs font-medium
              uppercase tracking-[0.3em]
              text-ink-muted
            "
          >
            03 / Utvalda projekt
          </span>

          <h2
            className="
              mt-8 font-serif
              text-4xl leading-tight text-ink
              md:text-5xl
            "
          >
            Ett urval av <span className="italic">arbeten.</span>
          </h2>

          <p
            className="
              mt-5 max-w-xl
              font-sans text-lg
              leading-relaxed text-ink-muted
            "
          >
            Från första idé till färdig lösning. Projekt där design, teknik och
            funktion möts.
          </p>

          <div
            className="
              mt-14 grid gap-14
              sm:grid-cols-2
            "
          >
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

      {/* Desktop */}
      <div
        className="
          hidden h-full
          md:block
          motion-reduce:md:hidden
        "
      >
        {/* Sektionsetikett */}
        <div
          className="
            pointer-events-none
            absolute left-12 top-10 z-20
            lg:left-20
          "
        >
          <span
            className="
              font-sans text-xs font-medium
              uppercase tracking-[0.3em]
              text-ink-muted
            "
          >
            03 / Utvalda projekt
          </span>
        </div>

        {/* Horisontell track */}
        <div
          ref={trackRef}
          className="
            flex h-full w-max
            items-center gap-8
            px-12 lg:gap-12 lg:px-20
          "
        >
          {/* Introduktion */}
          <div
            className="
              flex h-full w-[38vw]
              shrink-0 flex-col
              justify-center pr-8
            "
          >
            <span
              className="
                mb-8 font-mono text-xs
                uppercase tracking-[0.25em]
                text-ink-muted
              "
            >
              Portfolio / 2026
            </span>

            <h2
              className="
                font-serif
                text-5xl leading-[1.1]
                text-ink lg:text-7xl
              "
            >
              Ett urval
              <br />
              av <span className="italic font-normal">arbeten.</span>
            </h2>

            <p
              className="
                mt-8 max-w-sm
                font-sans text-lg
                leading-relaxed text-ink-muted
              "
            >
              Från första idé till en färdig lösning. Ett urval av projekt där
              design, teknik och funktion möts.
            </p>

            <div
              className="
                mt-12 flex items-center gap-4
                text-ink-muted
              "
            >
              <span
                className="
                  h-px w-12
                  bg-current opacity-40
                "
              />

              <span
                className="
                  font-mono text-xs
                  uppercase tracking-[0.2em]
                "
              >
                Scrolla för att utforska
              </span>
            </div>
          </div>

          {/* Projektkort */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              horizontal
            />
          ))}
        </div>

        {/* Progressindikator*/}
        <div
          className="
            pointer-events-none
            absolute bottom-9 left-12 right-12
            z-20 flex items-center gap-8
            lg:left-20 lg:right-20
          "
        >
          <span
            className="
              shrink-0 font-mono
              text-xs tracking-[0.2em]
              text-ink-muted
            "
          >
            01 — 04
          </span>

          <div
            className="
              relative h-px flex-1
              bg-ink/15
            "
          >
            <div
              ref={progressRef}
              className="
                absolute inset-0
                origin-left scale-x-0
                bg-ink
              "
            />
          </div>

          <span
            className="
              shrink-0 font-mono
              text-xs uppercase
              tracking-[0.2em]
              text-ink-muted
            "
          >
            Projekt
          </span>
        </div>
      </div>
    </section>
  );
}
