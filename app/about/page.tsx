"use client"

import { useState, useEffect } from "react"
import { resumeData } from "@/lib/resume"

export default function About() {
  const [activeTab, setActiveTab] = useState<'personal' | 'resume'>('personal')

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'resume') {
      setActiveTab('resume')
    } else if (hash === 'personal') {
      setActiveTab('personal')
    }
  }, [])

  // Update URL when tab changes
  const handleTabChange = (tab: 'personal' | 'resume') => {
    setActiveTab(tab)
    window.history.pushState(null, '', `#${tab}`)
  }

  return (
    <section className="flex-1 flex-grow overflow-y-auto">
      <div className="h-full flex flex-col">
        {/* Tab bar */}
        <div className="flex items-center bg-bg-secondary/30 border-b border-border-primary px-4">
          <div className="flex items-center gap-1">
            <div 
              className={`px-3 py-1 text-sm rounded-t border-t border-l border-r cursor-pointer transition-colors ${
                activeTab === 'personal' 
                  ? 'bg-bg-tertiary text-text-primary border-border-secondary' 
                  : 'text-text-secondary hover:text-text-primary border-transparent'
              }`}
              onClick={() => handleTabChange('personal')}
            >
              personal.ts
            </div>
            <div 
              className={`px-3 py-1 text-sm rounded-t border-t border-l border-r cursor-pointer transition-colors ${
                activeTab === 'resume' 
                  ? 'bg-bg-tertiary text-text-primary border-border-secondary' 
                  : 'text-text-secondary hover:text-text-primary border-transparent'
              }`}
              onClick={() => handleTabChange('resume')}
            >
              resume.ts
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'personal' && (
              <pre className="text-sm text-text-primary leading-relaxed font-mono">
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">1</div>
                  <div>
                    <span className="text-blue-400">const</span> <span className="text-text-accent">NAME</span> ={" "}
                    <span className="text-green-400">{"Seyon Sri"}</span>;
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">2</div>
                  <div></div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">3</div>
                  <div>
                    <span className="text-blue-400">let</span> <span className="text-text-accent">location</span> ={" "}
                    <span className="text-green-400">{"Greater Toronto Area, Canada"}</span>;
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">4</div>
                  <div></div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">5</div>
                  <div>
                    <span className="text-blue-400">let</span> <span className="text-text-accent">hobbies</span> = [
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">6</div>
                  <div className="ml-4">
                    <span className="text-green-400">{"Programming"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">7</div>
                  <div className="ml-4">
                    <span className="text-green-400">{"Gaming"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">8</div>
                  <div className="ml-4">
                    <span className="text-green-400">{"Cycling"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">9</div>
                  <div className="ml-4">
                    <span className="text-green-400">{"Guitar"}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">10</div>
                  <div className="ml-4">
                    <span className="text-text-secondary">// {"Sleeping"}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-8 text-right mr-4 select-none">11</div>
                  <div>];</div>
                </div>
              </pre>
            )}


            {activeTab === 'resume' && (
              <div className="space-y-8 w-full">
                {/* Header with Download Button */}
                <div className="text-center border-b border-border-primary pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div></div>
                    <div className="text-center flex-1">
                      <h1 className="text-3xl font-bold text-text-accent mb-2">{resumeData.personal.name}</h1>
                      <p className="text-xl text-text-primary mb-4">{resumeData.personal.title}</p>
                    </div>
                    <a 
                      href="/resume.pdf" 
                      download="Seyon_Sri_Resume.pdf"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-text-accent text-bg-primary rounded hover:bg-text-primary transition-colors text-sm"
                    >
                      📄 PDF
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
                    <span>{resumeData.personal.location}</span>
                    <span>•</span>
                    <span>{resumeData.personal.email}</span>
                    <span>•</span>
                    <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                      LinkedIn
                    </a>
                    <span>•</span>
                    <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold text-text-accent mb-3">Professional Summary</h2>
                  <p className="text-text-secondary leading-relaxed">{resumeData.summary}</p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold text-text-accent mb-4">Education</h2>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border border-border-primary bg-bg-secondary/30 p-4 rounded mb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">{edu.degree}</h3>
                          <p className="text-text-secondary">{edu.institution}, {edu.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-text-secondary">{edu.period}</p>
                          {edu.gpa && <p className="text-text-secondary">GPA: {edu.gpa}</p>}
                        </div>
                      </div>
                      {edu.relevantCourses && (
                        <div>
                          <p className="text-sm font-medium text-text-primary mb-2">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, courseIndex) => (
                              <span key={courseIndex} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold text-text-accent mb-4">Professional Experience</h2>
                  {resumeData.experience.map((job, index) => (
                    <div key={index} className="border border-border-primary bg-bg-secondary/30 p-4 rounded mb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">{job.title}</h3>
                          <p className="text-text-secondary">{job.company}, {job.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-text-secondary">{job.period}</p>
                          <p className="text-xs text-text-secondary">{job.type}</p>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-text-secondary text-sm">
                            • {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xl font-bold text-text-accent mb-4">Key Projects</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                          <span className="text-xs text-text-secondary">{project.period}</span>
                        </div>
                        <p className="text-text-secondary text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-text-secondary text-xs">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold text-text-accent mb-4">Technical Skills</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.languages.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Frameworks</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.frameworks.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Databases</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.databases.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.tools.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Libraries</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.libraries.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">Concepts</h3>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.concepts.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards & Certifications */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h2 className="text-xl font-bold text-text-accent mb-4">Awards</h2>
                    <ul className="space-y-2">
                      {resumeData.awards.map((award, index) => (
                        <li key={index} className="text-text-secondary text-sm flex items-center gap-2">
                          <span className="text-yellow-500">🏆</span>
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-accent mb-4">Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="border border-border-primary bg-bg-secondary/30 p-3 rounded mb-2">
                        <h3 className="font-semibold text-text-primary text-sm">{cert.name}</h3>
                        <p className="text-text-secondary text-xs">{cert.issuer}</p>
                        <p className="text-text-secondary text-xs">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
