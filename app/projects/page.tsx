"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section className="flex-1 flex-grow overflow-y-auto relative">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Projects
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my development skills and problem-solving approach
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl overflow-hidden hover:border-text-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-text-accent/10 hover:-translate-y-2"
                  aria-label={`View details for project: ${project.title}`}
                >
                  {/* Project Image/Icon */}
                  <div className="relative aspect-video bg-gradient-to-br from-text-accent/10 to-text-accent/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 text-xs bg-bg-tertiary/80 text-text-secondary rounded-full border border-border-primary/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1 text-xs text-text-accent rounded-full border border-text-accent/30 font-medium">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Project Arrow */}
                    <div className="pt-2 flex items-center text-text-accent group-hover:text-text-primary transition-colors">
                      <span className="text-sm font-medium">View Project</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Project Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-text-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
