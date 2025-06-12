import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      title: "Knee Sleeves",
      description: "Premium knee sleeves for maximum support and performance",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
      href: "/gym-gear/knee-sleeves",
    },
    {
      title: "Premium Gym Gear Kits",
      description: "Essential training kits with premium wrist wraps, knee sleeves, and lifting straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
      href: "/gym-gear/strength-kits",
    },
    {
      title: "Gym Bags",
      description: "Premium gym bags with iconic designs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQyy07VaEkP7aEeLDO8y9VJGMxQ5xD.png",
      href: "/gym-gear/gym-bags",
    },
    {
      title: "Wrist Wraps",
      description: "Professional wrist support for heavy lifting",
      image: "/placeholder.svg?height=400&width=600",
      href: "/gym-gear/wrist-wraps",
    },
    {
      title: "Lifting Straps",
      description: "Enhanced grip for deadlifts and pulls",
      image: "/placeholder.svg?height=400&width=600",
      href: "/gym-gear/lifting-straps",
    },
    {
      title: "Elbow Sleeves",
      description: "Premium elbow protection and support",
      image: "/placeholder.svg?height=400&width=600",
      href: "/gym-gear/elbow-sleeves",
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-red-500 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">All Collections</h1>
        <div className="w-24 h-1 bg-red-600 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.href}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                  {collection.title}
                </h2>
                <p className="text-gray-400 text-sm">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
