"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useTheme } from "@/contexts/ThemeContext"

interface ParticleProps {
  quantity?: number
  size?: number
  vx?: number
  vy?: number
}

interface Circle {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
}

export default function Particle({ quantity = 500, size = 0.4, vx = 0, vy = 0 }: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const circlesRef = useRef<Circle[]>([])
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 })
  const [isInitialized, setIsInitialized] = useState(false)
  const { theme } = useTheme()

  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  const createCircleParams = useCallback((): Circle => {
    const { w, h } = canvasSize
    return {
      x: Math.floor(Math.random() * w),
      y: Math.floor(Math.random() * h),
      translateX: 0,
      translateY: 0,
      size: Math.max(1, Math.floor(Math.random() * 2) + size),
      alpha: 0,
      targetAlpha: Number((Math.random() * 0.5 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2
    }
  }, [canvasSize.w, canvasSize.h, size])

  const drawCircle = useCallback((circle: Circle, update = false) => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.save()
    ctx.translate(circle.translateX, circle.translateY)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    
    // Theme-aware particle color
    const color = theme === 'light' ? '0, 0, 0' : '255, 255, 255'
    ctx.fillStyle = `rgba(${color}, ${circle.alpha})`
    ctx.fill()
    ctx.restore()

    if (!update) {
      circlesRef.current.push(circle)
    }
  }, [theme])

  const initCanvas = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Reset circles
    circlesRef.current = []

    // Set canvas dimensions
    const newCanvasSize = {
      w: containerRef.current.offsetWidth,
      h: containerRef.current.offsetHeight
    }

    setCanvasSize(newCanvasSize)

    canvasRef.current.width = newCanvasSize.w * dpr
    canvasRef.current.height = newCanvasSize.h * dpr
    canvasRef.current.style.width = `${newCanvasSize.w}px`
    canvasRef.current.style.height = `${newCanvasSize.h}px`

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    ctx.scale(dpr, dpr)
    contextRef.current = ctx

    setIsInitialized(true)
  }, [dpr])

  const animate = useCallback(() => {
    const ctx = contextRef.current
    if (!ctx || canvasSize.w === 0 || canvasSize.h === 0) return

    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h)

    for (let i = circlesRef.current.length - 1; i >= 0; i--) {
      const circle = circlesRef.current[i]

      // Calculate edge distances
      const edgeDistances = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size
      ]

      const closestEdge = Math.min(...edgeDistances)
      const alphaModifier = Math.max(Math.min(closestEdge / 20, 1), 0)

      // Smooth alpha transition
      circle.alpha += alphaModifier > 0.5 
        ? (circle.alpha < circle.targetAlpha ? 0.02 : 0) 
        : circle.targetAlpha * alphaModifier

      // Update position
      circle.x += circle.dx + vx
      circle.y += circle.dy + vy

      drawCircle(circle, true)

      // Replace out-of-bounds particles
      if (circle.x < -circle.size || circle.x > canvasSize.w + circle.size || 
          circle.y < -circle.size || circle.y > canvasSize.h + circle.size) {
        circlesRef.current.splice(i, 1)
        const newCircle = createCircleParams()
        drawCircle(newCircle)
      }
    }

    rafRef.current = window.requestAnimationFrame(animate)
  }, [canvasSize.w, canvasSize.h, vx, vy, createCircleParams, drawCircle])

  // Initialize particles after canvas is ready
  useEffect(() => {
    if (!isInitialized || !contextRef.current || canvasSize.w === 0 || canvasSize.h === 0) return

    // Clear existing particles
    circlesRef.current = []

    // Generate initial particles
    for (let i = 0; i < quantity; i++) {
      const circle = createCircleParams()
      drawCircle(circle)
    }

    // Start animation
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
    }
    animate()
  }, [isInitialized, quantity, canvasSize.w, canvasSize.h, createCircleParams, drawCircle, animate])

  // Handle canvas initialization and resize
  useEffect(() => {
    const handleResize = () => {
      initCanvas()
    }

    initCanvas()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      contextRef.current = null
    }
  }, [initCanvas])

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none absolute top-0 left-0 h-dvh w-dvw" 
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}