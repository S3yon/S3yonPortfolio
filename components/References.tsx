"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Reference {
  id: string
  quote: string
  author: string
  position: string
  company: string
  fileName: string
  downloadPath: string
}

const references: Reference[] = [
  {
    id: "ref1",
    quote: "Seyon was an excellent student; his marks on the assignments and exams reflect that. He was always on time and present for class and showed a great deal of interest in the course materials. It was indeed a pleasure to teach Seyon.",
    author: "Punam Parashar",
    position: "Professor",
    company: "Sheridan College",
    fileName: "SeyonReferencePunam.pdf",
    downloadPath: "/references/SeyonReferencePunam.pdf"
  },
  {
    id: "ref2", 
    quote: "Seyon did spectacularly well in the course earning 98%. He attended all classes and participated in class discussions — his points were always well thought out and provided valuable insight. Seyon made our classroom a better place.",
    author: "John Dafoe",
    position: "Instructor",
    company: "Sheridan College",
    fileName: "SeyonReferenceJohnDafoe.pdf",
    downloadPath: "/references/SeyonReferenceJohnDafoe.pdf"
  },
  {
    id: "ref3",
    quote: "I have always found Seyon to be pleasant, approachable, mature, and result-oriented. Seyon demonstrated the ability to work efficiently under pressure and meet all deadlines. His work ethics were strong and work quality was outstanding.",
    author: "Joe Z. Ganczarski",
    position: "Adjunct Professor",
    company: "Sheridan College",
    fileName: "SeyonReferenceJoe.pdf",
    downloadPath: "/references/SeyonReferenceJoe.pdf"
  }
]

const References = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === references.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleDownload = (reference: Reference) => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = reference.downloadPath
    link.download = reference.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            References
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            What colleagues and mentors have said about working with me
          </p>
        </motion.div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={reference.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-bg-secondary/60 backdrop-blur-lg border border-border-primary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-text-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-text-accent/10 hover:-translate-y-2 relative overflow-hidden">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-text-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Quote Icon */}
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-text-accent/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-text-accent/30 transition-colors duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-primary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-medium italic relative">
                    "{reference.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="text-base sm:text-lg font-bold text-text-primary">
                      {reference.author}
                    </div>
                    <div className="text-sm sm:text-base text-text-accent font-semibold">
                      {reference.position}
                    </div>
                    <div className="text-sm sm:text-base text-text-secondary font-medium">
                      {reference.company}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(reference)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-text-accent/10 text-text-accent border border-text-accent/30 rounded-lg sm:rounded-xl hover:bg-text-accent hover:text-white transition-all duration-300 font-semibold group/btn backdrop-blur-sm hover:shadow-lg hover:shadow-text-accent/25 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Reference
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default References