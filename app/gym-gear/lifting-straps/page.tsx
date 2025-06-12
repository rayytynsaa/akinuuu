import Link from "next/link"

export default function LiftingStraps() {
  const products = [
    {
      id: "why-so-serious",
      name: "Why So Serious Lifting Straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxPAebHtAwzyjRCYdBD2iXeChbOOON.png",
      price: 35,
      description: "Premium lifting straps with unique joker-inspired design",
    },
    {
      id: "bats",
      name: "Bats Lifting Straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OXNyIAyZp6KIX0ejvx2Nqi91rOfliC.png",
      price: 35,
      description: "Classic lifting straps with bat pattern design",
    },
    {
      id: "blood-red",
      name: "Blood Red Lifting Straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SI01SmxyPDHWbBsRuJAa9U2mOp6fmb.png",
      price: 35,
      description: "Professional lifting straps with blood red pattern",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Lifting Straps</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/lifting-straps/${product.id}`} className="group block">
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
              <p className="text-gray-500 mt-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
