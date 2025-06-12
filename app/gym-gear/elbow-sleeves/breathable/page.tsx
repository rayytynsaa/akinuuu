import Link from "next/link"

export default function BreathableBrace() {
  const products = [
    {
      id: "red-black",
      name: "Red & Black Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-He72H34nKU4n583m6Ho8hZOJtcglUm.png",
      price: 35,
    },
    {
      id: "pink-black",
      name: "Pink & Black Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JLRlTA10EXOhpJ2nbXfaTNNdVG3dUU.png",
      price: 35,
    },
    {
      id: "gray-black",
      name: "Gray & Black Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OIwR1MCCOKKVDOxW3Cwt8U6uDHU11U.png",
      price: 35,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Breathable Brace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/elbow-sleeves/breathable/${product.id}`} className="group block">
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
