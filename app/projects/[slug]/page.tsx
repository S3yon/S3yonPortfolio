import { notFound } from "next/navigation"
import { projects } from "@/lib/data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
      <div className="max-w-4xl mx-auto">
        <header className="group border-ash-700 bg-ash-700 relative mb-5 aspect-[3/1] overflow-hidden border">
          <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">{project.icon}</div>
          <div className="absolute top-0 left-0 grid h-full w-full place-items-center bg-[#080808]/80 transition-opacity duration-500 group-hover:opacity-0">
            <h1 className="max-w-[80%] px-4 text-center text-2xl font-semibold uppercase lg:max-w-[60%] lg:text-4xl">
              {project.title}
            </h1>
          </div>
          {project.award && (
            <div className="absolute top-4 right-4 bg-yellow-600 text-yellow-100 px-3 py-1 rounded text-sm font-semibold">
              🏆 {project.award}
            </div>
          )}
        </header>

        <article className="prose prose-invert prose-ash max-w-none">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-ash-700 text-ash-200 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-lg text-ash-300 leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-6">
            {project.features && (
              <div>
                <h2 className="text-xl font-semibold text-ash-200 mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-ash-400">
                      <strong className="text-ash-200">{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.achievements && (
              <div>
                <h2 className="text-xl font-semibold text-ash-200 mb-3">Achievements</h2>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-ash-400">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.links && (
              <div>
                <h2 className="text-xl font-semibold text-ash-200 mb-3">Links</h2>
                <div className="flex gap-4">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ash-300 text-ash-800 px-4 py-2 rounded hover:bg-ash-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
