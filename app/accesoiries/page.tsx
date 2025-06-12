import Link from "next/link"

export default function Accessories() {
  const categories = [
    {
      name: "Necklaces",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cg5IfIiJustzSAlQaO286KAPhGPGA3.png", // Replace with actual necklace image
      href: "/accessories/necklaces",
      description: "Premium Gothic Necklaces",
    },
    {
      name: "Rings",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rD5xaNXijnHoRCZw14sIcnx5XleIrE.png",
      href: "/accessories/rings",
      description: "Mystic Eye Collection",
    },
    {
      name: "Bracelets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q2bQNveFFa9kEefvqX9Zy7rWxvLqDP.png",
      href: "/accessories/bracelets",
      description: "Gothic Steel Collection",
    },
    {
      name: "Packs",
      image: "/accessories-pack.jpg", // Create a composite image
      href: "/accessories/packs",
      description: "Complete Collections",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
