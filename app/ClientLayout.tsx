"use client"

import type React from "react"
import "./globals.css"
import Header from "@/components/layout/header"
import Navbar from "@/components/layout/navbar"
import Particle from "@/components/layout/particle"
import PWARegistration from "@/components/PWARegistration"
import PWAInstallPrompt from "@/components/PWAInstallPrompt"
import PWAStandaloneDetector from "@/components/PWAStandaloneDetector"
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
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleFullscreen = async () => {
    if (isMobile) return
    
    try {
      if (!isFullscreen && containerRef.current) {
        await containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else if (document.fullscreenElement) {
        await document.exitFullscreen()
        setPosition({ x: 0, y: 0 })
        setIsFullscreen(false)
      }
    } catch (error) {
      // Silently handle fullscreen errors (user denied, not supported, etc.)
      console.warn('Fullscreen request failed:', error)
    }
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
      <head>
        <meta name="application-name" content="Seyon Sri Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Seyon Sri" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="bg-bg-primary text-text-primary grid h-dvh place-items-center overflow-hidden antialiased font-mono w-full max-w-full">
        <ThemeProvider>
          <PWARegistration />
          <PWAStandaloneDetector />
          <main
            ref={containerRef}
            className={`bg-gradient-to-br from-bg-secondary to-bg-tertiary z-10 flex h-dvh flex-col overflow-hidden md:h-[75dvh] md:w-[70dvw] ${
              isFullscreen || isMobile ? "rounded-none w-full max-w-full" : "rounded-xl w-dvw"
            } ${!isFullscreen && !isMobile ? "container-shadow" : ""}`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: dragging ? "none" : "all 0.2s ease-out",
            }}
          >
            <Header isFullscreen={isFullscreen} onMouseDown={onMouseDown} toggleFullscreen={toggleFullscreen} isMobile={isMobile} />
            {children}
            <Navbar />
          </main>

          <div className="grid-pattern absolute top-0 left-0 h-full w-full" aria-hidden="true"></div>
          <div className="grain-noise pointer-events-none fixed size-[300%]" aria-hidden="true"></div>
          <Particle quantity={500} size={0.4} vx={0} vy={0} />
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  )
}
