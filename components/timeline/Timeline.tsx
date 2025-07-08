"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TimelineItem {
  id: string
  date: string
  title: string
  company?: string
  type: "project" | "experience" | "education"
  description: string
  technologies?: string[]
  achievements?: string[]
  links?: { name: string; url: string }[]
  award?: string
}

const timelineData: TimelineItem[] = [
  {
    id: "404cast",
    date: "July 5, 2025",
    title: "404cast @ Hack404",
    type: "project",
    description: "Created a gamified safety awareness tool that helps users learn about Toronto neighborhood safety by guessing kidnapping likelihood from Street View locations. Built with real Toronto Police Service data and ML predictions to promote urban safety awareness.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Google Maps API", "PWA"],
    award: "Built for Hack404",
    achievements: [
      "Gamified safety learning with Street View integration",
      "ML risk assessment using Toronto Police Service data",
      "Google Street View API for immersive location experiences"
    ],
    links: [
      { name: "Live Site", url: "https://www.404cast.com" },
      { name: "DevPost", url: "https://devpost.com/software/404cast" }
    ]
  },
  {
    id: "pricevalve",
    date: "June 20, 2025",
    title: "PriceValve @ SpurHacks",
    type: "project",
    description: "Built a real-time dashboard at SpurHacks that helps Steam game developers find optimal pricing using regional data and market trends",
    technologies: ["React", "Node.js", "Steam API", "Data Analysis"],
    award: "Built for SpurHacks 2025",
    achievements: [
      "Integrated multiple Steam APIs for real-time game data analysis",
      "Built revenue optimization engine with confidence scoring",
      "Created responsive interface with data visualization"
    ],
    links: [
      { name: "DevPost", url: "https://devpost.com/software/pricevalve" },
      { name: "GitHub", url: "https://github.com/S3yon/PriceValve" }
    ]
  },
  {
    id: "uno-game",
    date: "April 12, 2025",
    title: "UNO Multiplayer Game @ Software Design Fundamentals Course",
    type: "project",
    description: "Built a Java multiplayer UNO game as coursework for the Software Design Fundamentals class, demonstrating software engineering and design patterns",
    technologies: ["Java", "Git", "OOP", "OOD", "UML", "Agile"],
    achievements: ["100% rule enforcement across 25+ test scenarios", "8+ UML diagrams", "Design patterns implementation"]
  },
  {
    id: "thyrotrack",
    date: "February 25, 2025",
    title: "ThyroTrack - 2nd Place @ AI in Healthcare Hackathon",
    type: "project",
    description: "Built an AI-powered thyroid monitoring app at the AI in Health Science hackathon, winning 2nd place",
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-Learn", "Imblearn"],
    award: "2nd Place @ AI in Healthcare Hackathon",
    achievements: ["Health Metrics Tracking (10+ indicators)", "AI-Powered Predictions with XGBoost"]
  },
  {
    id: "records-system",
    date: "December 15, 2024",
    title: "Records Management System @ Database Design Course",
    type: "project",
    description: "Academic database project designed to efficiently manage and track student records",
    technologies: ["MySQL", "Normalization", "Query Testing"],
    achievements: ["10+ tables designed", "15+ complex queries optimized", "Efficient data management"]
  },
  {
    id: "sheridan",
    date: "May 6, 2024",
    title: "Computer Science @ Sheridan College",
    company: "Sheridan College",
    type: "education",
    description: "Started studying Software Development & Network Engineering at Sheridan College with a GPA of 3.9/4.0 (so far)",
    achievements: ["GPA: 3.9/4.0", "Computer Science Club", "Student Union participation"]
  },
  {
    id: "vistek",
    date: "February 2022",
    title: "Rental Database and Operations Specialist",
    company: "Vistek",
    type: "experience",
    description: "Managing customer profiles and optimizing database operations",
    achievements: [
      "Managed 100+ customer profiles in Microsoft Dynamic NAV",
      "Improved data accuracy, reduced billing errors by 25%",
      "Increased client retention by 15% and satisfaction by 20%"
    ]
  },
  {
    id: "canon",
    date: "July 2020",
    title: "Technical Support Analyst",
    company: "Canon",
    type: "experience",
    description: "Providing technical support and improving customer satisfaction",
    achievements: [
      "Increased customer satisfaction scores by 15%",
      "Documented 50+ recurring issues",
      "Cut support ticket volume by 30%"
    ]
  },
  {
    id: "transcom",
    date: "October 2019",
    title: "Technical Support Advisor",
    company: "Transcom",
    type: "experience",
    description: "Remote technical support for 500+ customers",
    achievements: [
      "Supported 500+ customers",
      "Reduced repeat inquiries by 25%",
      "Adapted to remote support workflows"
    ]
  }
]

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = containerRef.current?.querySelectorAll('[data-timeline-item]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project': return 'bg-blue-500'
      case 'experience': return 'bg-green-500'
      case 'education': return 'bg-purple-500'
      default: return 'bg-text-accent'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      case 'experience':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
          </svg>
        )
      case 'education':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Timeline Container with single-side layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {timelineData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              id={item.id}
              data-timeline-item
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: visibleItems.has(item.id) ? 1 : 0,
                y: visibleItems.has(item.id) ? 0 : 60
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative flex items-start gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              {/* Timeline Symbol */}
              <motion.div 
                className="flex-shrink-0 flex items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: visibleItems.has(item.id) ? 1 : 0,
                  scale: visibleItems.has(item.id) ? 1 : 0.8
                }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-text-accent flex items-center justify-center ${getTypeColor(item.type)} shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-xs sm:text-sm">
                    {getTypeIcon(item.type)}
                  </div>
                </div>
                
                {/* Animated Divider */}
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-text-accent to-transparent w-6 sm:w-8 hidden sm:block"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: visibleItems.has(item.id) ? 1 : 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>

              {/* Main Content */}
              <motion.div 
                className="flex-1 space-y-4 sm:space-y-6 min-w-0"
                initial={{ opacity: 0, x: -40 }}
                animate={{
                  opacity: visibleItems.has(item.id) ? 1 : 0,
                  x: visibleItems.has(item.id) ? 0 : -40
                }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {/* Header Section */}
                <div className="space-y-3">
                  {/* Date Badge */}
                  <motion.span 
                    className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-text-accent/10 text-text-accent rounded-full border border-text-accent/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: visibleItems.has(item.id) ? 1 : 0,
                      y: visibleItems.has(item.id) ? 0 : 20
                    }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {item.date}
                  </motion.span>

                  {/* Title and Company */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: visibleItems.has(item.id) ? 1 : 0,
                      y: visibleItems.has(item.id) ? 0 : 20
                    }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 flex-wrap">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary leading-tight break-words">
                        {item.title}
                      </h3>
                      {item.award && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full animate-pulse border border-yellow-400/30 flex-shrink-0">
                          ✨ {item.award}
                        </span>
                      )}
                    </div>
                    {item.company && (
                      <p className="text-base sm:text-lg lg:text-xl font-semibold text-text-accent mt-2">{item.company}</p>
                    )}
                    <span className={`inline-block px-3 py-1 text-xs sm:text-sm rounded-full ${getTypeColor(item.type)} text-white capitalize font-medium mt-2 sm:mt-3 shadow-md`}>
                      {item.type}
                    </span>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-text-secondary text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: visibleItems.has(item.id) ? 1 : 0,
                    y: visibleItems.has(item.id) ? 0 : 20
                  }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {item.description}
                </motion.p>

                {/* Technologies */}
                {item.technologies && (
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: visibleItems.has(item.id) ? 1 : 0,
                      y: visibleItems.has(item.id) ? 0 : 20
                    }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                  >
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide">Tech Stack</h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: visibleItems.has(item.id) ? 1 : 0,
                        y: visibleItems.has(item.id) ? 0 : 10
                      }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-sm bg-bg-secondary border border-border-primary rounded-lg text-text-secondary hover:border-text-accent/40 hover:bg-bg-tertiary transition-all duration-300 font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* Achievements */}
                {item.achievements && (
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: visibleItems.has(item.id) ? 1 : 0,
                      y: visibleItems.has(item.id) ? 0 : 20
                    }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                  >
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide">Key Highlights</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex} 
                          className="flex items-start gap-3 text-text-secondary leading-relaxed"
                        >
                          <span className="text-text-accent font-bold text-lg mt-0.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Links */}
                {item.links && (
                  <motion.div 
                    className="flex gap-4 pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: visibleItems.has(item.id) ? 1 : 0,
                      y: visibleItems.has(item.id) ? 0 : 10
                    }}
                    transition={{ delay: 0.55, duration: 0.4 }}
                  >
                    {item.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-text-accent/10 text-text-accent rounded-lg border border-text-accent/20 hover:bg-text-accent hover:text-white transition-all duration-300 font-medium group backdrop-blur-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Connecting Line (only for non-last items) */}
              {index < timelineData.length - 1 && (
                <motion.div 
                  className="absolute top-12 left-6 w-0.5 h-16 bg-gradient-to-b from-text-accent/60 to-text-accent/20"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: visibleItems.has(item.id) ? 1 : 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

export default Timeline