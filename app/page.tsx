"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Timeline from "@/components/timeline/Timeline"
import References from "@/components/References"

export default function Home() {
  const fullText = `SEYON SRI`

  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 150) // Slower speed for name typing effect

      return () => clearTimeout(timer)
    } else if (currentIndex >= fullText.length && !isTypingComplete) {
      // Typing is complete
      setIsTypingComplete(true)
    }
  }, [currentIndex, fullText, isTypingComplete])

  return (
    <div className={`flex-1 overflow-y-scroll ${!isTypingComplete ? 'overflow-y-hidden' : ''}`} style={{ scrollbarGutter: 'stable' }}>
      {/* Hero Section - Full height with centered content */}
      <section className="min-h-full flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <pre className="text-text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-mono tracking-wider">
            {displayedText}
            <span className="animate-pulse">|</span>
          </pre>
        </div>

        <p className="sr-only">Seyon Sri</p>

        <div className="text-center space-y-2 max-w-2xl px-4">
          <p className={`text-text-primary text-base sm:text-lg transition-all duration-300 transform ${currentIndex >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Software Development & Network Engineering Student
          </p>
          <p className={`text-text-secondary text-sm sm:text-base transition-all duration-300 transform ${currentIndex >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Passionate about turning complex problems into elegant solutions and always looking for new challenges to solve :)
          </p>
        </div>

        {/* Social Media Links - Staggered animation matching typing speed */}
        <div className="flex items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
          <a 
            href="https://www.linkedin.com/in/seyon-sri/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-text-secondary hover:text-text-primary transition-all duration-300 transform ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a 
            href="https://github.com/S3yon" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-text-secondary hover:text-text-primary transition-all duration-300 transform ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="GitHub"
            style={{ transitionDelay: isTypingComplete ? '100ms' : '0ms' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a 
            href="https://www.instagram.com/s3yon" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-text-secondary hover:text-text-primary transition-all duration-300 transform ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="Instagram"
            style={{ transitionDelay: isTypingComplete ? '200ms' : '0ms' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
            </svg>
          </a>

          <a 
            href="mailto:sriskans@sheridancollege.ca"
            className={`text-text-secondary hover:text-text-primary transition-all duration-300 transform ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="Email"
            style={{ transitionDelay: isTypingComplete ? '300ms' : '0ms' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator - Fixed at bottom of hero section */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Timeline Section - Only visible after typing completes */}
      {isTypingComplete && (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">My Journey</h2>
              <p className="text-text-secondary text-sm sm:text-base px-4">
                A chronological timeline of my projects, experience, and education
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      )}

      {/* References Section - Only visible after typing completes */}
      {isTypingComplete && <References />}

      {/* Footer - Only visible after typing completes */}
      {isTypingComplete && (
        <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-border-primary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 sm:space-y-6">
              {/* Navigation arrows */}
              <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-6 text-text-secondary">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <svg className="w-4 h-4 animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  <span className="hidden sm:inline">Learn</span>
                  <Link href="/about" className="text-text-accent hover:text-text-primary transition-colors underline">
                    about
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <svg className="w-4 h-4 animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  <span className="hidden sm:inline">Browse</span>
                  <Link href="/projects" className="text-text-accent hover:text-text-primary transition-colors underline">
                    projects
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <svg className="w-4 h-4 animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  <span className="hidden sm:inline">View</span>
                  <Link href="/experience" className="text-text-accent hover:text-text-primary transition-colors underline">
                    experience
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <svg className="w-4 h-4 animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                  <Link href="/about#resume" className="text-text-accent hover:text-text-primary transition-colors underline">
                    resume
                  </Link>
                </div>
              </div>
              
              <div className="text-text-secondary text-xs">
                © 2025 Seyon Sri
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
