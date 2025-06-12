import Link from "next/link"

export default function ElbowSleeves() {
  const products = [
    {
      id: "breathable",
      name: "Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FEZbkpNSTScSxtnwsDsuw1et5ZcwxR.png",
      price: 35,
      description: "Premium breathable elbow support",
    },
    {
      id: "neoprene",
      name: "Neoprene Elbow Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ke0EyftTLBPvCRUDPhxrIpzAHegd5o.png",
      price: 35,
      description: "Professional neoprene elbow sleeves",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Elbow Sleeves</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/elbow-sleeves/${product.id}`} className="group block">
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
