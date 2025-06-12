import Link from "next/link"

export default function MatProducts() {
  const products = [
    {
      id: "eco-green",
      name: "Eco-Friendly Green Mat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hwWD8Uf0AtPIJcuTAbscmRZaECOO2Z.png",
      price: 120,
      description: "Premium eco-friendly exercise mat for yoga and calisthenics",
    },
    {
      id: "classic-blue",
      name: "Classic Blue Mat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6LKSZAl4KqOeTxdtQ4qSjGDPYc1Nst.png",
      price: 120,
      description: "Professional grade blue exercise mat",
    },
    {
      id: "premium-red",
      name: "Premium Red Mat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2i0dc5bUI1h1RZjIzkMdXy2TUl8zwj.png",
      price: 120,
      description: "High-density comfort exercise mat",
    },
    {
      id: "pro-black",
      name: "Professional Black Mat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKsmcs6w5TZioTo1f3xdD1xRW7RJKO.png",
      price: 120,
      description: "Competition grade black exercise mat",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Exercise Mats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/gymnax-calisthenics/mat/${product.id}`} className="group block">
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
