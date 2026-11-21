import Image from "next/image";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  index: number;
  horizontal?: boolean;
};

export default function ProjectCard({
  project,
  index,
  horizontal = false,
}: Props) {
  const number = String(index + 1).padStart(2, "0");
  const github = project.link.includes("github.com");
  const linkLabel = github ? "GitHub" : "Live demo";

  return (
    <article
      className={
        horizontal ? "group w-[46vw] shrink-0" : "group w-full min-w-0"
      }
    >
      {/* bild */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Öppna ${project.title} – ${linkLabel}`}
        className="group/image relative block aspect-[3/2] overflow-hidden rounded-card bg-line/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:aspect-[7/4]"
      >
        <Image
          src={project.image}
          alt={`Förhandsvisning av ${project.title}`}
          fill
          sizes={horizontal ? "46vw" : "(min-width: 640px) 45vw, 100vw"}
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.035] ${
            project.title === "WorldScope" ? "brightness-250" : ""
          } ${project.title === "Hivify" ? "object-fill" : ""}`}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
        />

        <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-canvas/90 font-mono text-[11px] text-ink backdrop-blur-sm">
          {number}
        </span>

        <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-canvas/90 px-4 py-2 font-mono text-[11px] text-ink backdrop-blur-sm transition-transform duration-300 group-hover/image:-translate-y-1">
          {linkLabel}
          <span aria-hidden="true">↗</span>
        </span>
      </a>

      {/* information */}
      <div className="mt-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
          {project.category}
        </span>

        <h3 className="mt-2 font-serif text-2xl leading-tight text-ink lg:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-muted lg:text-base">
          {project.description}
        </p>
      </div>
    </article>
  );
}
