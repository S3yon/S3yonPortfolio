"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Rental Database and Operations Specialist",
      company: "Vistek",
      location: "Mississauga, ON",
      duration: "Feb 2022 - Present",
      type: "Full-time",
      achievements: [
        "Developed database solutions using SQL, maintaining inventory accuracy and optimizing daily operations across 3 departments",
        "Managed 100+ customer profiles in Microsoft Dynamic NAV, improving data accuracy and reducing billing errors",
        "Developed equipment recommendations across 3+ channels, increasing client retention and satisfaction",
        "Improved POS system speed by identifying workflow inefficiencies and optimizing daily operations",
      ],
    },
    {
      title: "Technical Support Analyst",
      company: "Canon",
      location: "Mississauga, ON",
      duration: "Jul 2020 – Feb 2022",
      type: "Full-time",
      achievements: [
        "Provided troubleshooting for software/hardware issues using root cause analysis, reducing ticket resolution time",
        "Collaborated with engineering teams to stabilize support systems, resulting in 15% increase in customer satisfaction scores",
        "Documented 50+ recurring issues in technical knowledge base, cutting support ticket volume",
        "Trained new support staff on diagnostic procedures and internal tools, improving onboarding and reducing escalations",
      ],
    },
    {
      title: "Technical Support Advisor",
      company: "Transcom",
      location: "Remote",
      duration: "Oct 2019 – Jul 2020",
      type: "Full-time",
      achievements: [
        "Supported 500+ customers by diagnosing technical issues and guiding self-resolution, reducing repeat inquiries",
        "Conducted research to identify and implement new solutions, improving support accuracy and service quality",
        "Adapted to remote support workflows while collaborating across teams to maintain high service quality",
      ],
    },
  ]

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
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Work Experience
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Professional experience spanning technical support, database management, and operations optimization
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative"
              >
                <div className="bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-2xl p-8 hover:border-text-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-text-accent/10 hover:-translate-y-1 relative overflow-hidden">
                  {/* Card gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-text-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-text-primary group-hover:text-text-accent transition-colors">
                          {exp.title}
                        </h2>
                        <div className="flex items-center gap-2 text-lg">
                          <span className="text-text-accent font-semibold">{exp.company}</span>
                          <span className="text-text-secondary">•</span>
                          <span className="text-text-secondary">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="px-3 py-1 bg-text-accent/10 text-text-accent rounded-full border border-text-accent/20 font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="px-4 py-2 bg-bg-tertiary/80 rounded-lg border border-border-primary/30">
                          <p className="text-text-primary font-semibold">{exp.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-4">
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIdx) => (
                          <li 
                            key={achievementIdx} 
                            className="flex items-start gap-3 text-text-secondary leading-relaxed"
                          >
                            <span className="text-text-accent font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-text-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
