"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
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
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.header 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative bg-gradient-to-br from-text-accent/10 to-text-accent/5 rounded-3xl p-12 overflow-hidden border border-border-primary/50 backdrop-blur-sm">
              {/* Project Icon Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="text-[200px] leading-none">{project.icon}</div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-text-primary tracking-tight">
                    {project.title}
                  </h1>
                  {project.award && (
                    <motion.div 
                      className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-400/30 text-sm font-bold animate-pulse"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      ✨ {project.award}
                    </motion.div>
                  )}
                </div>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.header>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-text-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
                      className="px-4 py-2 bg-bg-tertiary/80 text-text-secondary rounded-full border border-border-primary/30 font-medium hover:border-text-accent/30 hover:bg-bg-secondary transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              {project.features && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-text-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Key Features
                  </h2>
                  <div className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                        className="flex items-start gap-3 p-4 bg-bg-tertiary/30 rounded-xl border border-border-primary/20"
                      >
                        <span className="text-text-accent font-bold text-lg mt-0.5">•</span>
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                          <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Achievements */}
              {project.achievements && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-text-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Achievements
                  </h2>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                        className="flex items-start gap-3 text-text-secondary leading-relaxed"
                      >
                        <span className="text-text-accent font-bold text-lg mt-0.5">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Links */}
              {project.links && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Project Links
                  </h3>
                  <div className="space-y-3">
                    {project.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (idx * 0.1), duration: 0.4 }}
                        className="block w-full px-4 py-3 bg-text-accent/10 text-text-accent rounded-xl border border-text-accent/30 hover:bg-text-accent hover:text-white transition-all duration-300 font-medium text-center group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {link.label}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Technologies</span>
                    <span className="text-text-accent font-bold">{project.techStack.length}</span>
                  </div>
                  {project.features && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Features</span>
                      <span className="text-text-accent font-bold">{project.features.length}</span>
                    </div>
                  )}
                  {project.achievements && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Achievements</span>
                      <span className="text-text-accent font-bold">{project.achievements.length}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
