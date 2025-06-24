import { projects } from "@/lib/data"

export default function S3yonPortfolioProject() {
  const project = projects.find(p => p.slug === "s3yon-portfolio")
  
  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <section className="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{project.icon}</span>
            <h1 className="text-2xl font-bold text-text-accent">{project.title}</h1>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-bg-tertiary text-text-primary rounded-full text-sm font-medium border border-border-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-text-accent mb-4">🔗 Project Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bg-secondary border border-border-primary rounded-lg text-text-primary hover:bg-bg-tertiary transition-colors"
                >
                  {link.label}
                  <span className="ml-2">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">⚡ Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-text-accent mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🛠️ Technical Implementation</h2>
          <div className="space-y-6">
            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Advanced Particle System</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Implemented a sophisticated canvas-based particle system with 500+ particles featuring:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li>Edge-aware alpha blending for seamless appearance/disappearance</li>
                <li>Device pixel ratio support for crisp rendering on high-DPI displays</li>
                <li>Performance-optimized particle recycling system</li>
                <li>Smooth 60fps animation using requestAnimationFrame</li>
              </ul>
            </div>

            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Authentic Film Grain Effect</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Created realistic film grain using actual texture assets and advanced CSS:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li>Real grain.webp texture for authentic visual appearance</li>
                <li>Step-based animation (8s with 10 steps) for realistic grain movement</li>
                <li>300% sizing for seamless pattern repetition during animations</li>
                <li>Theme-aware opacity adjustments for optimal visibility</li>
              </ul>
            </div>

            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Modern Development Stack</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Built with cutting-edge technologies and best practices:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li>Next.js 14 with App Router for optimal performance and SEO</li>
                <li>TypeScript for type safety and enhanced developer experience</li>
                <li>Tailwind CSS with custom design system and theme variables</li>
                <li>shadcn/ui components for consistent and accessible UI elements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🏆 Key Achievements</h2>
          <div className="space-y-4">
            {project.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border border-border-primary bg-bg-secondary/30 rounded-lg"
              >
                <span className="text-xl mt-1">✨</span>
                <span className="text-text-secondary leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🏗️ Architecture Overview</h2>
          <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-text-accent mb-3">Frontend Architecture</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Component-based React architecture</li>
                  <li>Custom theme context for state management</li>
                  <li>Responsive layout with mobile-first design</li>
                  <li>Optimized asset loading and caching</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-accent mb-3">Performance Features</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Static site generation for fast loading</li>
                  <li>Optimized images and font loading</li>
                  <li>Efficient particle system with minimal overhead</li>
                  <li>Smooth animations with CSS transforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}