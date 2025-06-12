"use client"

import { useEffect, useRef } from "react"

// Define sports equipment SVG paths with improved detail and smooth edges
const EQUIPMENT_PATHS = {
  dumbbell:
    "M5,12 C5,10.34 3.66,9 2,9 C0.34,9 -1,10.34 -1,12 C-1,13.66 0.34,15 2,15 C3.66,15 5,13.66 5,12 Z M25,12 C25,10.34 23.66,9 22,9 C20.34,9 19,10.34 19,12 C19,13.66 20.34,15 22,15 C23.66,15 25,13.66 25,12 Z M19,12 L5,12 C5,12 5,12 5,12 C5,12 5,12 5,12 L19,12 C19,12 19,12 19,12 C19,12 19,12 19,12 Z",
  kettlebell:
    "M12,2 C8.13,2 5,5.13 5,9 C5,10.57 5.46,12.03 6.29,13.28 L6,22 L18,22 L17.71,13.28 C18.54,12.03 19,10.57 19,9 C19,5.13 15.87,2 12,2 Z M12,7 C10.34,7 9,8.34 9,10 C9,11.66 10.34,13 12,13 C13.66,13 15,11.66 15,10 C15,8.34 13.66,7 12,7 Z",
  weightPlate:
    "M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M12,7 C9.24,7 7,9.24 7,12 C7,14.76 9.24,17 12,17 C14.76,17 17,14.76 17,12 C17,9.24 14.76,7 12,7 Z",
  barbell:
    "M6,6 L6,18 L8,18 L8,6 L6,6 Z M16,6 L16,18 L18,18 L18,6 L16,6 Z M2,9 L2,15 L4,15 L4,9 L2,9 Z M20,9 L20,15 L22,15 L22,9 L20,9 Z M8,11 L16,11 L16,13 L8,13 L8,11 Z",
  proteinShaker:
    "M8,2 L16,2 L16,4 L18,4 L18,6 L17,6 L17,22 L7,22 L7,6 L6,6 L6,4 L8,4 L8,2 Z M9,6 L15,6 L15,4 L9,4 L9,6 Z M9,10 L15,10 L15,8 L9,8 L9,10 Z",
  wristWraps:
    "M6,2 C4.34,2 3,3.34 3,5 L3,19 C3,20.66 4.34,22 6,22 L18,22 C19.66,22 21,20.66 21,19 L21,5 C21,3.34 19.66,2 18,2 L6,2 Z M6,4 L18,4 C18.55,4 19,4.45 19,5 L19,19 C19,19.55 18.55,20 18,20 L6,20 C5.45,20 5,19.55 5,19 L5,5 C5,4.45 5.45,4 6,4 Z M8,7 L16,7 L16,9 L8,9 L8,7 Z M8,11 L16,11 L16,13 L8,13 L8,11 Z M8,15 L16,15 L16,17 L8,17 L8,15 Z",
  gymRing:
    "M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M12,6 C8.69,6 6,8.69 6,12 C6,15.31 8.69,18 12,18 C15.31,18 18,15.31 18,12 C18,8.69 15.31,6 12,6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z",
  sportsNecklace:
    "M12,2 C10.9,2 10,2.9 10,4 C10,4.74 10.4,5.39 11,5.73 L11,7 L8,7 C6.9,7 6,7.9 6,9 L6,11 C6,11.55 6.45,12 7,12 L7,19 C7,20.66 8.34,22 10,22 L14,22 C15.66,22 17,20.66 17,19 L17,12 C17.55,12 18,11.55 18,11 L18,9 C18,7.9 17.1,7 16,7 L13,7 L13,5.73 C13.6,5.39 14,4.74 14,4 C14,2.9 13.1,2 12,2 Z M12,4 C12,4 12,4 12,4 C12,4 12,4 12,4 C12,4 12,4 12,4 Z M8,9 L16,9 L16,10 L8,10 L8,9 Z M9,12 L15,12 L15,19 C15,19.55 14.55,20 14,20 L10,20 C9.45,20 9,19.55 9,19 L9,12 Z",
  resistanceBand:
    "M20,5 L20,19 C20,20.1 19.1,21 18,21 L6,21 C4.9,21 4,20.1 4,19 L4,5 C4,3.9 4.9,3 6,3 L18,3 C19.1,3 20,3.9 20,5 Z M18,5 L6,5 L6,19 L18,19 L18,5 Z M9,8 L15,8 C15.55,8 16,8.45 16,9 C16,9.55 15.55,10 15,10 L9,10 C8.45,10 8,9.55 8,9 C8,8.45 8.45,8 9,8 Z M9,12 L15,12 C15.55,12 16,12.45 16,13 C16,13.55 15.55,14 15,14 L9,14 C8.45,14 8,13.55 8,13 C8,12.45 8.45,12 9,12 Z M9,16 L15,16 C15.55,16 16,16.45 16,17 C16,17.55 15.55,18 15,18 L9,18 C8.45,18 8,17.55 8,17 C8,16.45 8.45,16 9,16 Z",
  yogaMat:
    "M20,4 L20,20 C20,21.1 19.1,22 18,22 L6,22 C4.9,22 4,21.1 4,20 L4,4 C4,2.9 4.9,2 6,2 L18,2 C19.1,2 20,2.9 20,4 Z M18,4 L6,4 L6,20 L18,20 L18,4 Z",
  jumpRope:
    "M8,5 C8,3.34 6.66,2 5,2 C3.34,2 2,3.34 2,5 C2,6.66 3.34,8 5,8 C5.73,8 6.41,7.74 6.97,7.3 L7,16.17 C7,17.73 8.27,19 9.83,19 L14.17,19 C15.73,19 17,17.73 17,16.17 L17.03,7.3 C17.59,7.74 18.27,8 19,8 C20.66,8 22,6.66 22,5 C22,3.34 20.66,2 19,2 C17.34,2 16,3.34 16,5 C16,6.05 16.55,6.98 17.4,7.52 L17.37,16.17 C17.37,17.54 16.54,18.7 15.37,19 L14.17,19 L14.17,13 L12.83,13 L12.83,19 L9.83,19 L8.63,19 C7.46,18.7 6.63,17.54 6.63,16.17 L6.6,7.52 C7.45,6.98 8,6.05 8,5 Z",
  sportsBracelet:
    "M18,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,4 C20,2.9 19.1,2 18,2 Z M18,20 L6,20 L6,4 L18,4 L18,20 Z M9.5,11 L14.5,11 C15.33,11 16,10.33 16,9.5 C16,8.67 15.33,8 14.5,8 L9.5,8 C8.67,8 8,8.67 8,9.5 C8,10.33 8.67,11 9.5,11 Z M9.5,16 L14.5,16 C15.33,16 16,15.33 16,14.5 C16,13.67 15.33,13 14.5,13 L9.5,13 C8.67,13 8,13.67 8,14.5 C8,15.33 8.67,16 9.5,16 Z",
  weightLifter:
    "M12,2 C13.1,2 14,2.9 14,4 C14,5.1 13.1,6 12,6 C10.9,6 10,5.1 10,4 C10,2.9 10.9,2 12,2 Z M15.89,8.3 C15.96,8.52 16,8.76 16,9 L16,10 L8,10 L8,9 C8,8.76 8.04,8.52 8.11,8.3 L10,5 L14,5 L15.89,8.3 Z M16,12 L16,22 L14,22 L14,16 L13,16 L13,22 L11,22 L11,16 L10,16 L10,22 L8,22 L8,12 L16,12 Z M4.5,9 C5.33,9 6,9.67 6,10.5 L6,14.5 C6,15.33 5.33,16 4.5,16 C3.67,16 3,15.33 3,14.5 L3,10.5 C3,9.67 3.67,9 4.5,9 Z M19.5,9 C20.33,9 21,9.67 21,10.5 L21,14.5 C21,15.33 20.33,16 19.5,16 C18.67,16 18,15.33 18,14.5 L18,10.5 C18,9.67 18.67,9 19.5,9 Z",
}

// Define the equipment types
type EquipmentType = keyof typeof EQUIPMENT_PATHS

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  equipment: EquipmentType
  rotation: number
  rotationSpeed: number
  pulseSpeed: number
  pulseDirection: 1 | -1
  trailLength: number
  trailOpacity: number
  zIndex: number
  color: string
}

interface FieldLine {
  x1: number
  y1: number
  x2: number
  y2: number
  width: number
  opacity: number
  dashPattern?: number[]
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const fieldLines = useRef<FieldLine[]>([])
  const animationFrameId = useRef<number>()
  const mousePosition = useRef({ x: 0, y: 0 })
  const isMouseMoving = useRef(false)
  const lastMouseMoveTime = useRef(0)
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
      initFieldLines()
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      isMouseMoving.current = true
      lastMouseMoveTime.current = Date.now()

      // Add a few particles at mouse position with reduced frequency
      if (Math.random() > 0.85) {
        addParticleAtPosition(e.clientX, e.clientY)
      }
    }

    // Add a particle at a specific position
    const addParticleAtPosition = (x: number, y: number) => {
      const equipmentTypes = Object.keys(EQUIPMENT_PATHS) as EquipmentType[]
      const equipment = equipmentTypes[Math.floor(Math.random() * equipmentTypes.length)]

      // Subtle color variations for visual interest
      const colors = [
        "rgba(255, 255, 255, 1)", // White
        "rgba(240, 240, 240, 1)", // Off-white
        "rgba(220, 220, 220, 1)", // Light gray
        "rgba(200, 200, 200, 1)", // Silver
      ]

      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.current.push({
        x,
        y,
        size: Math.random() * 12 + 8, // Smaller size range for better visibility
        speedX: (Math.random() - 0.5) * 0.5, // Slower movement
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.2, // Lower opacity for subtlety
        equipment,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005, // Slower rotation
        pulseSpeed: Math.random() * 0.01 + 0.005, // Gentler pulsing
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        trailLength: Math.random() * 3 + 1, // Shorter trails
        trailOpacity: Math.random() * 0.1 + 0.05, // Subtler trails
        zIndex: Math.floor(Math.random() * 3),
        color,
      })

      // Keep particle count in check
      if (particles.current.length > 150) {
        // Reduced max particles
        particles.current.splice(0, 1)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()

    // Initialize field lines
    function initFieldLines() {
      fieldLines.current = []
      const { width, height } = canvas

      // Create subtle grid lines
      const horizontalLineCount = 3 // Fewer lines
      const horizontalSpacing = height / (horizontalLineCount + 1)

      for (let i = 1; i <= horizontalLineCount; i++) {
        const y = i * horizontalSpacing
        fieldLines.current.push({
          x1: 0,
          y1: y,
          x2: width,
          y2: y,
          width: 0.5, // Thinner lines
          opacity: 0.03, // More subtle
        })
      }

      // Create vertical field lines
      const verticalLineCount = 4 // Fewer lines
      const verticalSpacing = width / (verticalLineCount + 1)

      for (let i = 1; i <= verticalLineCount; i++) {
        const x = i * verticalSpacing
        fieldLines.current.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: height,
          width: 0.5,
          opacity: 0.03,
        })
      }

      // Add center circle - more subtle
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.12

      // Create circle using multiple short lines
      const segments = 24 // Fewer segments
      for (let i = 0; i < segments; i++) {
        const angle1 = (i / segments) * Math.PI * 2
        const angle2 = ((i + 1) / segments) * Math.PI * 2

        fieldLines.current.push({
          x1: centerX + Math.cos(angle1) * radius,
          y1: centerY + Math.sin(angle1) * radius,
          x2: centerX + Math.cos(angle2) * radius,
          y2: centerY + Math.sin(angle2) * radius,
          width: 0.75,
          opacity: 0.04,
          dashPattern: [3, 6], // More spaced dashes
        })
      }
    }

    // Initialize particles
    function initParticles() {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60) // Fewer particles

      const equipmentTypes = Object.keys(EQUIPMENT_PATHS) as EquipmentType[]

      // Subtle color variations for visual interest
      const colors = [
        "rgba(255, 255, 255, 1)", // White
        "rgba(240, 240, 240, 1)", // Off-white
        "rgba(220, 220, 220, 1)", // Light gray
        "rgba(200, 200, 200, 1)", // Silver
      ]

      for (let i = 0; i < particleCount; i++) {
        const equipment = equipmentTypes[Math.floor(Math.random() * equipmentTypes.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]

        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 15 + 10, // Smaller size range
          speedX: (Math.random() - 0.5) * 0.3, // Slower movement
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.2, // Lower opacity
          equipment,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005, // Slower rotation
          pulseSpeed: Math.random() * 0.01 + 0.005, // Gentler pulsing
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          trailLength: Math.random() * 3 + 1, // Shorter trails
          trailOpacity: Math.random() * 0.1 + 0.05, // Subtler trails
          zIndex: Math.floor(Math.random() * 3),
          color,
        })
      }
    }

    // Draw an SVG path
    function drawSvgPath(
      ctx: CanvasRenderingContext2D,
      path: string,
      x: number,
      y: number,
      scale: number,
      color: string,
    ) {
      const svgPath = new Path2D(path)
      ctx.fillStyle = color
      ctx.translate(x, y)
      ctx.scale(scale, scale)
      ctx.fill(svgPath)
      ctx.scale(1 / scale, 1 / scale)
      ctx.translate(-x, -y)
    }

    // Draw a particle based on its equipment type
    function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)

      // Draw motion trail if particle is moving fast enough
      const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
      if (speed > 0.15) {
        const trailLength = particle.trailLength * speed * 8
        const trailDirection = Math.atan2(-particle.speedY, -particle.speedX)

        ctx.save()
        ctx.rotate(trailDirection)

        const gradient = ctx.createLinearGradient(0, 0, -trailLength, 0)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.trailOpacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.moveTo(0, -particle.size / 4)
        ctx.lineTo(-trailLength, 0)
        ctx.lineTo(0, particle.size / 4)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }

      // Calculate scale based on size
      const scale = particle.size / 24

      // Draw the equipment icon
      const path = EQUIPMENT_PATHS[particle.equipment]
      drawSvgPath(ctx, path, 0, 0, scale, `rgba(255, 255, 255, ${particle.opacity})`)

      ctx.restore()
    }

    // Draw field lines
    function drawFieldLines(ctx: CanvasRenderingContext2D) {
      fieldLines.current.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`
        ctx.lineWidth = line.width

        if (line.dashPattern) {
          ctx.setLineDash(line.dashPattern)
        } else {
          ctx.setLineDash([])
        }

        ctx.stroke()
        ctx.setLineDash([])
      })
    }

    // Animation loop
    function animate() {
      time.current += 0.007 // Slower time progression
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if mouse has stopped moving
      if (isMouseMoving.current && Date.now() - lastMouseMoveTime.current > 100) {
        isMouseMoving.current = false
      }

      // Draw field lines first (behind particles)
      drawFieldLines(ctx)

      // Draw flowing waves
      drawFlowingWaves(ctx)

      // Sort particles by zIndex for layered rendering
      const sortedParticles = [...particles.current].sort((a, b) => a.zIndex - b.zIndex)

      // Update and draw particles
      sortedParticles.forEach((particle, index) => {
        // Update position with smoother movement
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Update rotation
        particle.rotation += particle.rotationSpeed

        // Pulse size more gently
        particle.size += particle.pulseSpeed * particle.pulseDirection
        if (particle.size > 25 || particle.size < 10) {
          particle.pulseDirection *= -1
        }

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw particle
        drawParticle(ctx, particle)

        // Draw connections with reduced frequency
        if (index % 2 === 0) {
          // Only connect every other particle
          connectParticles(particle, index, sortedParticles)
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Connect particles with lines if they're close enough
    function connectParticles(particle: Particle, index: number, particles: Particle[]) {
      const connectionDistance = 120 // Shorter connection distance

      for (let i = index + 1; i < particles.length; i++) {
        const otherParticle = particles[i]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          // Calculate opacity based on distance
          const opacity = (1 - distance / connectionDistance) * 0.1 // More subtle connections

          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.lineWidth = 0.3 // Thinner lines
          ctx.stroke()
        }
      }
    }

    // Draw flowing wave patterns
    function drawFlowingWaves(ctx: CanvasRenderingContext2D) {
      const waveCount = 2 // Fewer waves

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath()

        const amplitude = 20 + w * 10 // Smaller amplitude
        const period = 0.004 - w * 0.001
        const phaseShift = time.current * (0.15 + w * 0.08) // Slower movement
        const yOffset = canvas.height * (0.3 + w * 0.2)

        for (let x = 0; x < canvas.width; x += 8) {
          // Fewer points for smoother curves
          const y = yOffset + Math.sin(x * period + phaseShift) * amplitude

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + w * 0.01})` // More subtle
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
}
