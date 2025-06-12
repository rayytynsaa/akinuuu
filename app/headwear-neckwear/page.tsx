import Link from "next/link"

export default function HeadwearNeckwear() {
  const categories = [
    {
      name: "Caps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5awEMW2pnT2JdOQARynfZabVlhgbb6.png",
      href: "/headwear-neckwear/caps",
      description: "Premium Training Caps",
    },
    {
      name: "Knits",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l5Rte8KDNGJVhGI8pOkS9HjLOr03qG.png",
      href: "/headwear-neckwear/knits",
      description: "Stylish Training Beanies",
    },
    {
      name: "Neck Gaiter",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uAlF98GOETzzERftAyXNHso1oMLi27.png",
      href: "/headwear-neckwear/neck-gaiter",
      description: "Performance Neck Protection",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Headwear & Neckwear</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="group block">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium">{category.name}</h3>
              <p className="text-gray-400">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
