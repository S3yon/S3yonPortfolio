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
    <section className="flex-1 flex-grow overflow-y-auto relative">
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
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'personal' && (
              <pre className="text-xs sm:text-sm text-text-primary leading-relaxed font-mono overflow-x-auto">
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">1</div>
                  <div className="min-w-0">
                    <span className="text-blue-400">const</span> <span className="text-text-accent">NAME</span> ={" "}
                    <span className="text-green-400">{"Seyon Sri"}</span>;
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">2</div>
                  <div className="min-w-0"></div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">3</div>
                  <div className="min-w-0">
                    <span className="text-blue-400">let</span> <span className="text-text-accent">location</span> ={" "}
                    <span className="text-green-400">{"Greater Toronto Area, Canada"}</span>;
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">4</div>
                  <div className="min-w-0"></div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">5</div>
                  <div className="min-w-0">
                    <span className="text-blue-400">let</span> <span className="text-text-accent">hobbies</span> = [
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">6</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-green-400">{"Programming"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">7</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-green-400">{"Gaming"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">8</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-green-400">{"Cycling"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">9</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-green-400">{"Guitar"}</span>,
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">10</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-green-400">{"Videography"}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">11</div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <span className="text-text-secondary">{`// Sleeping`}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-text-secondary w-6 sm:w-8 text-right mr-2 sm:mr-4 select-none flex-shrink-0">12</div>
                  <div className="min-w-0">];</div>
                </div>
              </pre>
            )}


            {activeTab === 'resume' && (
              <div className="space-y-6 sm:space-y-8 w-full relative">
                {/* Header with integrated PDF download */}
                <div className="text-center border-b border-border-primary pb-4 sm:pb-6 relative">
                  {/* Mobile: Stacked layout with prominent download button */}
                  <div className="block sm:hidden">
                    <h1 className="text-2xl font-bold text-text-accent mb-2">{resumeData.personal.name}</h1>
                    <p className="text-lg text-text-primary mb-4">{resumeData.personal.title}</p>
                    
                    {/* Mobile PDF Download Button - Prominent and centered */}
                    <div className="flex justify-center mb-4">
                      <a 
                        href="/resume.pdf" 
                        download="Seyon_Sri_Resume.pdf"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-text-accent to-text-primary text-bg-primary rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-text-primary to-text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 text-sm">📄</span>
                        <span className="relative z-10 text-sm font-semibold">Download PDF Resume</span>
                        <svg className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Desktop: Header with inline download button */}
                  <div className="hidden sm:block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1"></div>
                      <div className="text-center flex-1">
                        <h1 className="text-3xl font-bold text-text-accent mb-2">{resumeData.personal.name}</h1>
                        <p className="text-xl text-text-primary">{resumeData.personal.title}</p>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <a 
                          href="/resume.pdf" 
                          download="Seyon_Sri_Resume.pdf"
                          className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-text-accent to-text-primary text-bg-primary rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-text-primary to-text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative z-10">📄</span>
                          <span className="relative z-10 text-sm font-medium">PDF</span>
                          <svg className="relative z-10 w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary">
                    <span>{resumeData.personal.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="break-all">{resumeData.personal.email}</span>
                    <span className="hidden sm:inline">•</span>
                    <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                      LinkedIn
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3">Professional Summary</h2>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{resumeData.summary}</p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Education</h2>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-base sm:text-lg font-semibold text-text-primary">{edu.degree}</h3>
                          <p className="text-text-secondary text-sm sm:text-base">{edu.institution}, {edu.location}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-text-secondary text-sm sm:text-base">{edu.period}</p>
                          {edu.gpa && <p className="text-text-secondary text-sm sm:text-base">GPA: {edu.gpa}</p>}
                        </div>
                      </div>
                      {edu.relevantCourses && (
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-text-primary mb-2">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
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
                  <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Professional Experience</h2>
                  {resumeData.experience.map((job, index) => (
                    <div key={index} className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-3">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-base sm:text-lg font-semibold text-text-primary">{job.title}</h3>
                          <p className="text-text-secondary text-sm sm:text-base">{job.company}, {job.location}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-text-secondary text-sm sm:text-base">{job.period}</p>
                          <p className="text-xs sm:text-sm text-text-secondary">{job.type}</p>
                        </div>
                      </div>
                      <ul className="space-y-1 sm:space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                            • {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Key Projects</h2>
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-1 sm:mb-0">{project.name}</h3>
                          <span className="text-xs sm:text-sm text-text-secondary">{project.period}</span>
                        </div>
                        <p className="text-text-secondary text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-text-secondary text-xs leading-relaxed">
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
                  <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Technical Skills</h2>
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Languages</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.languages.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Frameworks</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.frameworks.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Databases</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.databases.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Tools</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.tools.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Libraries</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.libraries.map((skill, index) => (
                          <span key={index} className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">Concepts</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
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
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Awards</h2>
                    <ul className="space-y-2 sm:space-y-3">
                      {resumeData.awards.map((award, index) => (
                        <li key={index} className="text-text-secondary text-xs sm:text-sm flex items-center gap-2">
                          <span className="text-yellow-500 text-sm sm:text-base">🏆</span>
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-text-accent mb-3 sm:mb-4">Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="border border-border-primary bg-bg-secondary/30 p-3 sm:p-4 rounded mb-2 sm:mb-3">
                        <h3 className="font-semibold text-text-primary text-xs sm:text-sm">{cert.name}</h3>
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
