import Link from "next/link"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section className="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
      <h1 className="sr-only">Seyon Sri's Projects</h1>

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Link
            key={i}
            href={`/projects/${project.slug}`}
            className="divide-border-primary border-border-primary divide-y overflow-hidden border select-none group"
            aria-label={`View details for project: ${project.title}`}
          >
            <figure className="relative aspect-video bg-bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl opacity-20">{project.icon}</div>
              </div>
              <div className="absolute top-0 left-0 grid h-full w-full place-items-center bg-bg-secondary/90 transition-opacity duration-500 group-hover:opacity-0">
                <p className="px-4 text-center text-xl font-semibold uppercase lg:text-2xl text-text-accent">
                  {project.title}
                </p>
              </div>
            </figure>
            <div className="p-2">
              <div className="flex flex-wrap gap-1 mb-2">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-xs bg-bg-tertiary text-text-primary px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs text-text-secondary">+{project.techStack.length - 3} more</span>
                )}
              </div>
              <p className="line-clamp-3 text-sm text-text-secondary">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
