import Link from "next/link"

export default function ResistanceBands() {
  const products = [
    {
      id: "yoga-resistance",
      name: "Yoga Resistance",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TjEK0esfnDjNAH0oRMCh6xVKdquj4p.png",
      price: 120,
      description: "Multi-level resistance bands for yoga",
    },
    {
      id: "strength-rubber",
      name: "Strength Rubber Band",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5C61JbUe2GIwikwkqRwW2LZOlP7ppK.png",
      price: 120,
      description: "Professional strength training bands",
    },
    {
      id: "bands-handles",
      name: "Bands with Handles",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dLjSwslor2mLvAbb5eZXd8H8jtIXZ1.png",
      price: 120,
      description: "Resistance bands with comfortable handles",
    },
    {
      id: "yoga-pilates",
      name: "Yoga Pilates",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RknHj78W3eFBsx5hmbkcL3Diusvhhj.png",
      price: 120,
      description: "Premium yoga and pilates bands",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Resistance Bands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/gymnax-calisthenics/resistance-band/${product.id}`} className="group block">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-gray-400">{product.price} DT</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
