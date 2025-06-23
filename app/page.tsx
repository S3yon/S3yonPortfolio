"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const fullText = `SEYON SRI`

  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 150) // Slower speed for name typing effect

      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  return (
    <section className="flex flex-grow flex-col items-center justify-center space-y-6 px-8">
      <div className="text-center">
        <pre className="text-text-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-mono tracking-wider">
          {displayedText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>

      <p className="sr-only">Seyon Sri</p>

      <div className="text-center space-y-2 max-w-2xl">
        <p className="text-text-primary text-lg">Software Development & Network Engineering Student</p>
        <p className="text-text-secondary">
          Passionate about turning complex problems into elegant solutions and always looking for new challenges to
          solve :)
        </p>
      </div>
    </section>
  )
}
