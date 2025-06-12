"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Define the quality aspects
const qualityAspects = [
  {
    title: "Premium Design & Build Quality",
    description:
      "Every product is crafted with meticulous attention to detail, using only the highest quality materials for unmatched durability and performance.",
  },
  {
    title: "Superior Performance",
    description:
      "Engineered for maximum functionality and comfort, our products enhance your training experience with professional-grade support and reliability.",
  },
  {
    title: "Professional Grade Materials",
    description:
      "We source only the finest materials, ensuring each product meets the demanding standards of professional athletes and serious fitness enthusiasts.",
  },
  {
    title: "Innovative Technology",
    description:
      "Our products incorporate cutting-edge design features and technology to provide superior support and enhance your training performance.",
  },
  {
    title: "Precision Engineering",
    description:
      "Each product is engineered with precision to deliver consistent performance, optimal support, and exceptional durability in demanding conditions.",
  },
  {
    title: "Lifetime Warranty",
    description:
      "We stand behind our quality with a comprehensive lifetime warranty, guaranteeing your satisfaction and peace of mind with every purchase.",
  },
]

export default function QualityShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-cycle through quality aspects
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % qualityAspects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-cycling on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Manual navigation
  const goToAspect = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">UNMATCHED QUALITY AND DESIGN</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Crafted to professional specifications with precision engineering and premium materials. Our products
            represent the pinnacle of fitness equipment design and functionality.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto relative min-h-[300px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-800 mb-12 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 transition-all duration-300 ease-in-out"
              style={{ width: `${((currentIndex + 1) / qualityAspects.length) * 100}%` }}
            />
          </div>

          {/* Content carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Star rating */}
              <div className="flex justify-center items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 text-red-500 fill-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <h3 className="text-3xl font-bold mb-6">{qualityAspects[currentIndex].title}</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">{qualityAspects[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {qualityAspects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToAspect(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-red-600 w-6" : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`View ${qualityAspects[index].title}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={() => goToAspect((currentIndex - 1 + qualityAspects.length) % qualityAspects.length)}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto hover:bg-black/70 transition-colors"
              aria-label="Previous quality aspect"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => goToAspect((currentIndex + 1) % qualityAspects.length)}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto hover:bg-black/70 transition-colors"
              aria-label="Next quality aspect"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
