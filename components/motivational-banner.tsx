"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MotivationalBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const elementPosition = containerRef.current.offsetTop

      // Calculate how far the element is from the viewport
      const distance = elementPosition - scrollPosition

      // If element is in view
      if (distance < viewportHeight && distance > -containerRef.current.offsetHeight) {
        // Calculate how far through the viewport the element is (0 to 1)
        const scrollProgress = 1 - distance / viewportHeight

        // Apply parallax effect to the background
        if (containerRef.current.querySelector(".bg-parallax")) {
          const parallaxElement = containerRef.current.querySelector(".bg-parallax") as HTMLElement
          parallaxElement.style.transform = `translateY(${scrollProgress * 50}px)`
        }

        // Apply opacity based on scroll
        const contentElement = containerRef.current.querySelector(".content-wrapper") as HTMLElement
        if (contentElement) {
          contentElement.style.opacity = Math.min(1, scrollProgress * 1.5).toString()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      {/* Background with parallax effect */}
      <div className="bg-parallax absolute inset-0 w-full h-full">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>

        {/* Main background image */}
        <div className="absolute inset-0 bg-[url('/images/motivation-bg.jpg')] bg-cover bg-center opacity-40"></div>

        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-15 mix-blend-overlay"></div>

        {/* Red accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-red-700/15 rounded-full blur-3xl"></div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      </div>

      {/* Content */}
      <div className="content-wrapper relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left side - Main slogan */}
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
              <div className="inline-block relative">
                <span className="absolute -left-3 top-0 h-full w-1 bg-red-600"></span>
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-medium">
                  Our Philosophy
                </h2>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="block text-white">FORGE YOUR LEGACY</span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  BEYOND LIMITS
                </span>
              </h3>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                Premium equipment engineered for those who refuse to compromise. Every rep, every set—a step toward the
                extraordinary.
              </p>

              <Link
                href="/gym-gear"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-red-500 transition-colors group"
              >
                Explore Premium Collection
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right side - Stats/Features */}
            <div className="flex-1 w-full mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {[
                  { number: "7MM", label: "Neoprene Thickness" },
                  { number: "316L", label: "Stainless Steel" },
                  { number: "100%", label: "Premium Materials" },
                  { number: "24/7", label: "Performance Ready" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 bg-black/50 backdrop-blur-sm p-3 sm:p-6 rounded-lg hover:border-red-800 transition-colors duration-300"
                  >
                    <div className="text-xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent"></div>
    </div>
  )
}
