"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductKitShowcase from "@/components/product-kit-showcase"
import QualityShowcase from "@/components/quality-showcase"
import ParticlesBackground from "@/components/particles-background"
import MotivationalBanner from "@/components/motivational-banner"

export default function Home() {
  const categories = [
    {
      name: "GymGear",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop",
      href: "/gym-gear",
      description: "Premium Weightlifting Accessories",
      comingSoon: false,
    },
    {
      name: "GymnaXcalisthenics",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontlever_230cb747-cff9-4ea8-896d-73e8df9fafdc-Q2awpdkGyLBTyzCipY9gFtiiM0wOYs.webp",
      href: "/gymnax-calisthenics",
      description: "Essential Calisthenics Equipment",
      comingSoon: true,
    },
    {
      name: "Accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cg5IfIiJustzSAlQaO286KAPhGPGA3.png",
      href: "/accessories",
      description: "Premium Fitness Accessories",
      comingSoon: false,
    },
    {
      name: "Gym Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XzgwnFonrY8E5XIdox3E7pRx9Cq0Ca.png",
      href: "/gym-shorts",
      description: "High Performance Shorts",
      comingSoon: true,
    },
  ]

  return (
    <div>
      {/* Hero Section - Restored to original state */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
          {/* Artistic animated background with fitness equipment */}
          <div className="absolute inset-0 opacity-60">
            <ParticlesBackground />
          </div>

          {/* Gradient overlay - restored to original */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90"></div>
        </div>

        <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-5xl mx-auto px-4 py-20 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in">
            <span className="block mb-2 text-red-600">EMBRACE THE GRIND,</span>
            <span className="block">DOMINATE YOUR LIMITS</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed">
            Premium fitness gear designed for those who push beyond boundaries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-8 animate-fade-in-delayed-more">
            <Link
              href="/gym-gear"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Explore our collection of gym gear"
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              href="/best-sellers"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="View our best selling products"
            >
              BEST SELLERS
            </Link>
          </div>
        </div>

        {/* Animated down arrow - make it scroll to featured collections */}
        <Link
          href="#featured-collections"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          aria-label="Scroll to featured collections"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("featured-collections")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      <section id="featured-collections" className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {categories.map((category) =>
              category.comingSoon ? (
                <div
                  key={category.name}
                  className="group relative aspect-[4/3] overflow-hidden bg-gray-900 rounded-xl shadow-2xl cursor-not-allowed"
                  aria-label={`${category.name} - Coming Soon`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="absolute inset-0 h-full w-full object-cover filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-8 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{category.name}</h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-2 max-w-md">{category.description}</p>
                    <p className="text-yellow-300 font-semibold text-sm sm:text-lg mb-4 sm:mb-6">COMING SOON</p>
                  </div>
                </div>
              ) : (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative aspect-[4/3] overflow-hidden bg-gray-900 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-4 focus:ring-offset-black"
                  aria-label={`Browse ${category.name} collection - ${category.description}`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity group-hover:via-black/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-8 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 transform transition-transform duration-300 group-hover:translate-y-[-0.5rem]">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 max-w-md transform transition-transform duration-300 group-hover:translate-y-[-0.5rem]">
                      {category.description}
                    </p>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Quality Showcase */}
      <QualityShowcase />

      {/* Product Kits */}
      <ProductKitShowcase />

      {/* Motivational Banner */}
      <MotivationalBanner />
    </div>
  )
}
