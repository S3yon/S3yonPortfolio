"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/contexts/ThemeContext"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
}

interface ParticleProps {
  quantity?: number
  size?: number
  vx?: number
  vy?: number
}

export default function Particle({ quantity = 100, size = 3, vx = 0.2, vy = 0.2 }: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize particles
    const initParticles = () => {
      // Theme-aware particle color
      const particleColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0'

      particlesRef.current = []
      for (let i = 0; i < quantity; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 2 + vx,
          vy: (Math.random() - 0.5) * 2 + vy,
          size: Math.random() * size + 1,
          color: particleColor,
          alpha: Math.random() * 0.3 + 0.2
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        
        // Glow effect
        ctx.shadowColor = `rgba(${particle.color}, ${particle.alpha})`
        ctx.shadowBlur = 10
        
        // Main particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`
        ctx.fill()
        
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initParticles() // Recreate particles for new dimensions
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [quantity, size, vx, vy, theme])

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full" style={{ zIndex: 1 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}