import Link from "next/link"

export default function Accessories() {
  const categories = [
    {
      name: "Rings",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mzFAixBCVN3ZAIO0s6615iYlM7qT3p.png",
      href: "/accessories/rings",
      description: "Premium Gothic Rings",
      comingSoon: false,
    },
    {
      name: "Bracelets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aPIOIjXVwNyuJfK2rqb9Ok8o44wEMn.png",
      href: "/accessories/bracelets",
      description: "Anime Themed Bracelets",
      comingSoon: false,
    },
    {
      name: "Necklaces",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7kWlSrdG6Ck0SLzwE9rfNSVRRael9D.png",
      href: "/accessories/necklaces",
      description: "Anime Inspired Necklaces",
      comingSoon: false,
    },
    {
      name: "Packs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w67RxzdoZtqzwc8goKOuPcY3vDGIFI.png",
      href: "/accessories/packs",
      description: "Complete Jewelry Collections",
      comingSoon: true,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) =>
          category.comingSoon ? (
            <div key={category.name} className="group block opacity-80 cursor-not-allowed">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-xl relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-full w-full object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Coming Soon</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight">{category.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">{category.description}</p>
                <p className="text-yellow-300 mt-1 font-semibold">Coming Soon</p>
              </div>
            </div>
          ) : (
            <Link key={category.name} href={category.href} className="group block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-full">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight">{category.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">{category.description}</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
