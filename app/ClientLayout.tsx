"use client"

import type React from "react"
import "./globals.css"
import Header from "@/components/layout/header"
import Navbar from "@/components/layout/navbar"
import Particle from "@/components/layout/particle"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { JetBrains_Mono } from "next/font/google"
import { useState, useRef, useEffect } from "react"

// Load JetBrains Mono font with next/font
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [dragging, setDragging] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleFullscreen = () => {
    if (isMobile) return
    if (!isFullscreen && containerRef.current) {
      containerRef.current.requestFullscreen()
    } else {
      document.exitFullscreen()
      setPosition({ x: 0, y: 0 })
    }
    setIsFullscreen(!isFullscreen)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return
    setDragging(true)
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  useEffect(() => {
    const handleMouseUp = () => setDragging(false)

    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y })
      }
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false)
      }
    }

    if (dragging) {
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("mousemove", handleMouseMove)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [dragging, offset])

  useEffect(() => {
    if (isMobile) {
      setPosition({ x: 0, y: 0 })
    }
  }, [isMobile])

  return (
    <html lang="en" suppressHydrationWarning className={jetBrainsMono.variable}>
      <body className="bg-bg-primary text-text-primary grid h-dvh place-items-center overflow-hidden antialiased font-mono">
        <ThemeProvider>
          <main
            ref={containerRef}
            className={`bg-gradient-to-br from-bg-secondary to-bg-tertiary z-10 flex h-dvh w-dvw flex-col overflow-hidden lg:h-[75dvh] lg:w-[70dvw] ${
              isFullscreen || isMobile ? "rounded-none" : "rounded-xl"
            } ${!isFullscreen && !isMobile ? "container-shadow" : ""}`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: dragging ? "none" : "all 0.2s ease-out",
            }}
          >
            <Header isFullscreen={isFullscreen} onMouseDown={onMouseDown} toggleFullscreen={toggleFullscreen} />
            {children}
            <Navbar />
          </main>

          <div className="grid-pattern absolute top-0 left-0 h-full w-full" aria-hidden="true"></div>
          <div className="grain-noise pointer-events-none fixed top-0 size-[300%]" aria-hidden="true"></div>
          <Particle quantity={500} size={0.4} vx={0} vy={0} />
        </ThemeProvider>
      </body>
    </html>
  )
}
