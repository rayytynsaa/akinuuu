import Link from "next/link"

export default function WristWraps() {
  const products = [
    {
      id: "classic-black",
      name: "Classic Black Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
      price: 35,
    },
    {
      id: "kanji-black",
      name: "Kanji Black Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OrtaEeRzvNLdqaWQU0bNg0mNOMh8GK.png",
      price: 35,
    },
    {
      id: "dragon-white",
      name: "Dragon White Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H3ov3jkI5Y8oll2IKwmeyquaz7OC8L.png",
      price: 35,
    },
    {
      id: "blue-wave",
      name: "Blue Wave Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yq1lDRfBbCnLRWUPriR4iGCQsgAmBJ.png",
      price: 35,
    },
    {
      id: "metallic-red",
      name: "Metallic Red Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G8CagbCB2Orw64AQzW4ZtARsMasyXY.png",
      price: 35,
    },
    {
      id: "artistic-red",
      name: "Artistic Red Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H5vtYw0yfWqRFEvH4cgevob38RFmtS.png",
      price: 35,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Wrist Wraps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/wrist-wraps/${product.id}`} className="group block">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
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
