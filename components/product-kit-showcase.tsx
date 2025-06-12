"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, ShoppingBag, Shield, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductKitShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  // Luxury background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      return { width, height }
    }

    let { width, height } = setCanvasDimensions()

    // Create luxury pattern elements
    const createLuxuryElements = () => {
      // Diamond pattern
      const diamonds = []
      const diamondCount = Math.floor(width / 100)

      for (let i = 0; i < diamondCount; i++) {
        diamonds.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 5 + Math.random() * 15,
          opacity: 0.05 + Math.random() * 0.1,
          rotation: Math.random() * Math.PI,
          rotationSpeed: 0.001 + Math.random() * 0.002,
          color: Math.random() > 0.7 ? "#ff0000" : "#ffffff",
        })
      }

      // Elegant lines
      const lines = []
      const lineCount = Math.floor(width / 200)

      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x1: Math.random() * width,
          y1: Math.random() * height,
          x2: Math.random() * width,
          y2: Math.random() * height,
          width: 0.5 + Math.random() * 1,
          opacity: 0.03 + Math.random() * 0.07,
          color: Math.random() > 0.3 ? "#ff0000" : "#ffffff",
        })
      }

      return { diamonds, lines }
    }

    let { diamonds, lines } = createLuxuryElements()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw diamonds
      diamonds.forEach((diamond) => {
        ctx.save()
        ctx.translate(diamond.x, diamond.y)
        ctx.rotate(diamond.rotation)
        ctx.globalAlpha = diamond.opacity
        ctx.fillStyle = diamond.color

        // Diamond shape
        ctx.beginPath()
        ctx.moveTo(0, -diamond.size)
        ctx.lineTo(diamond.size, 0)
        ctx.lineTo(0, diamond.size)
        ctx.lineTo(-diamond.size, 0)
        ctx.closePath()
        ctx.fill()

        // Update rotation
        diamond.rotation += diamond.rotationSpeed

        ctx.restore()
      })

      // Draw elegant lines
      lines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.strokeStyle = line.color
        ctx.globalAlpha = line.opacity
        ctx.lineWidth = line.width
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    // Handle resize - FIXED THE ERROR HERE
    const handleResize = () => {
      const dimensions = setCanvasDimensions()
      width = dimensions.width
      height = dimensions.height

      const elements = createLuxuryElements()
      diamonds = elements.diamonds
      lines = elements.lines
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const kits = [
    {
      title: "KNEE SLEEVES ESSENTIALS",
      description: "Premium knee sleeves for maximum support and performance",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
      saving: "15",
      href: "/gym-gear/knee-sleeves",
      comingSoon: false,
      icon: <Shield className="w-5 h-5 text-white" />,
      feature: "7mm Neoprene",
    },
    {
      title: "PREMIUM GYM GEAR KIT",
      description: "Essential training kit with premium wrist wraps, knee sleeves, and lifting straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
      saving: "10",
      href: "/gym-gear/strength-kits/powerlifting-kit",
      comingSoon: false,
      icon: <Award className="w-5 h-5 text-white" />,
      feature: "Competition Grade",
    },
    {
      title: "BAKI HANMA GYM BAG",
      description: "Premium gym bag with iconic Baki Hanma design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQyy07VaEkP7aEeLDO8y9VJGMxQ5xD.png",
      saving: "25",
      href: "/gym-gear/gym-bags/baki",
      comingSoon: false,
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      feature: "Water Resistant",
    },
  ]

  // Handle card click to navigate to the product page
  const handleCardClick = (href: string) => {
    router.push(href)
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="featured-collections">
      {/* Luxury animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />
      </div>

      {/* Red accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-800 to-red-600 px-4 py-1 rounded-full mb-4 shadow-lg">
            <span className="text-sm font-bold tracking-wider text-white">PREMIUM SELECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">FEATURED COLLECTIONS</h2>
          <div className="relative w-24 h-0.5 bg-red-600 mx-auto mb-6">
            <div className="absolute -top-[2px] left-0 w-full h-[1px] bg-red-400 opacity-50"></div>
            <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-red-900 opacity-50"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our premium selection of fitness gear designed for peak performance and unmatched durability
          </p>
        </div>

        {/* Featured Collections Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {kits.map((kit, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(kit.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleCardClick(kit.href)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${kit.title} collection`}
            >
              {/* Luxury border with shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-xl p-[2px] shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-shadow duration-300">
                <div className="absolute inset-0 bg-black rounded-[9px]"></div>
              </div>

              {/* Content container */}
              <div className="relative rounded-xl overflow-hidden z-10">
                {/* Product Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredIndex === index ? 0.6 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={kit.image || "/placeholder.svg"}
                    alt={kit.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-[0_2px_10px_rgba(220,38,38,0.3)]">
                      SAVE {kit.saving} DT
                    </div>
                  </div>

                  {/* Feature Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-black/80 backdrop-blur-sm border border-red-600/30 text-white text-xs px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {kit.icon}
                      <span>{kit.feature}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-b from-gray-900 to-black border-t border-red-900/20">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors duration-300">
                    {kit.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{kit.description}</p>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(kit.href)
                      }}
                      className="inline-flex items-center text-white group/button focus:outline-none"
                      aria-label={`Shop ${kit.title} collection`}
                    >
                      <span className="font-medium group-hover/button:text-red-500 transition-colors duration-300">
                        Shop Collection
                      </span>
                      <motion.div
                        className="ml-2 bg-gradient-to-r from-red-700 to-red-600 rounded-full p-1.5 shadow-[0_2px_8px_rgba(220,38,38,0.3)]"
                        initial={{ x: 0 }}
                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-3 h-3 text-white" />
                      </motion.div>
                    </button>

                    {/* Red accent dot */}
                    <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,0.5)]"></div>
                  </div>
                </div>

                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900 opacity-80"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="mt-12 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 rounded-full text-white font-medium transition-all duration-300 group shadow-[0_4px_15px_rgba(220,38,38,0.3)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View all collections"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
