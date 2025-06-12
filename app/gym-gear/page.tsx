import Link from "next/link"

export default function GymGear() {
  const products = [
    {
      name: "Gym Bags",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AkHhGbbbcZsANJpyxtlqvxIq1maC0t.png",
      href: "/gym-gear/gym-bags",
      count: 6,
      description: "Premium Gym & Sports Bags",
      comingSoon: false,
    },
    {
      name: "Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f00Fx7xA2ffH46TRH5BwCcdnM5MvWW.png",
      href: "/gym-gear/wrist-wraps",
      count: 6,
      description: "Professional Wrist Support",
      comingSoon: false,
    },
    {
      name: "Knee Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      href: "/gym-gear/knee-sleeves",
      count: 3,
      description: "Premium Knee Support",
      comingSoon: false,
    },
    {
      name: "Lifting Straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
      href: "/gym-gear/lifting-straps",
      count: 3,
      description: "Enhanced Grip Support",
      comingSoon: false,
    },
    {
      name: "Strength Kits",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zy1Pe73WpTBOd1TXx2xEu0tDyX97bA.png",
      href: "/gym-gear/strength-kits",
      count: 4,
      description: "Complete Strength Training Sets",
      comingSoon: false,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Gym Gear</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) =>
          product.comingSoon ? (
            <div key={product.name} className="group block opacity-80 cursor-not-allowed">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-xl relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Coming Soon</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">{product.description}</p>
                <p className="text-yellow-300 mt-1 font-semibold">Coming Soon</p>
              </div>
            </div>
          ) : (
            <Link key={product.name} href={product.href} className="group block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-full">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">{product.description}</p>
                <p className="text-gray-500 mt-1">{product.count} Products</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
