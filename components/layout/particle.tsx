"use client"

import { useEffect, useRef, useState } from "react"

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

interface ParticleProps {
  quantity?: number
  size?: number
  vx?: number
  vy?: number
}

export default function Particle({ quantity = 500, size = 0.4, vx = 0, vy = 0 }: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [circles, setCircles] = useState<Circle[]>([])
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 })
  const rafRef = useRef<number | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  // Only run on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  const createCircleParams = (): Circle => {
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
      dy: (Math.random() - 0.5) * 0.2,
    }
  }

  const drawCircle = (circle: Circle, update = false) => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.save()
    ctx.translate(circle.translateX, circle.translateY)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`
    ctx.fill()
    ctx.restore()

    if (!update) {
      setCircles((prev) => [...prev, circle])
    }
  }

  const initCanvas = () => {
    if (!mounted) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    setCircles([])

    const newCanvasSize = {
      w: container.offsetWidth,
      h: container.offsetHeight,
    }
    setCanvasSize(newCanvasSize)

    canvas.width = newCanvasSize.w * dpr
    canvas.height = newCanvasSize.h * dpr
    canvas.style.width = `${newCanvasSize.w}px`
    canvas.style.height = `${newCanvasSize.h}px`

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.scale(dpr, dpr)
    contextRef.current = ctx

    // Initial particle generation
    const initialCircles: Circle[] = []
    for (let i = 0; i < quantity; i++) {
      const circle = createCircleParams()
      initialCircles.push(circle)
    }
    setCircles(initialCircles)
  }

  const animate = () => {
    if (!mounted) return

    const ctx = contextRef.current
    if (!ctx) return

    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h)

    setCircles((prevCircles) => {
      const updatedCircles = [...prevCircles]

      for (let i = updatedCircles.length - 1; i >= 0; i--) {
        const circle = updatedCircles[i]

        // Calculate edge distances
        const edgeDistances = [
          circle.x + circle.translateX - circle.size,
          canvasSize.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.h - circle.y - circle.translateY - circle.size,
        ]

        const closestEdge = Math.min(...edgeDistances)
        const alphaModifier = Math.max(Math.min(closestEdge / 20, 1), 0)

        // Smooth alpha transition
        circle.alpha +=
          alphaModifier > 0.5 ? (circle.alpha < circle.targetAlpha ? 0.02 : 0) : circle.targetAlpha * alphaModifier

        // Update position
        circle.x += circle.dx + vx
        circle.y += circle.dy + vy

        drawCircle(circle, true)

        // Replace out-of-bounds particles
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.h + circle.size
        ) {
          updatedCircles.splice(i, 1)
          const newCircle = createCircleParams()
          updatedCircles.push(newCircle)
        }
      }

      return updatedCircles
    })

    rafRef.current = window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!mounted) return

    initCanvas()
    animate()

    const handleResize = () => initCanvas()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [mounted, quantity, size, vx, vy])

  // Don't render anything on server
  if (!mounted) {
    return (
      <div className="pointer-events-none absolute top-0 left-0 h-dvh w-dvw" aria-hidden="true">
        <div className="size-full" />
      </div>
    )
  }

  return (
    <div ref={containerRef} className="pointer-events-none absolute top-0 left-0 h-dvh w-dvw" aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
