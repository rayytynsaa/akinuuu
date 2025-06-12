import Link from "next/link"

export default function Bracelets() {
  const products = [
    {
      id: "onepiece-skull",
      name: "One Piece Skull Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N45MYzBJgaTZzfkutyFrnQ6lJmAg7L.png",
      price: 15,
      description: "Straw Hat Pirates leather bracelet",
    },
    {
      id: "akatsuki-cloud",
      name: "Akatsuki Cloud Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IjLu1WZs9K7khWYoEjzZRAjUPtNBbq.png",
      price: 15,
      description: "Naruto Akatsuki red cloud bracelet",
    },
    {
      id: "aot-wings",
      name: "Survey Corps Wings Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oxDsfbLcoQqUxXrJvZauHmN3JvDAZk.png",
      price: 15,
      description: "Attack on Titan Survey Corps emblem",
    },
    {
      id: "aot-freedom",
      name: "Wings of Freedom Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2MRqyyiY5w9SWYuGFAzhyCIbZNvutC.png",
      price: 15,
      description: "Attack on Titan Wings of Freedom design",
    },
    {
      id: "onepiece-bronze",
      name: "Straw Hat Bronze Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuP8aPX2xeDVNiFib3K6WVfGVdHLj2.png",
      price: 15,
      description: "One Piece bronze skull design",
    },
    {
      id: "berserk-band",
      name: "Berserk Band Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZYdLnWywckzGYDKwEbqRXL8A8qu4N4.png",
      price: 15,
      description: "Band of the Hawk inspired bracelet",
    },
    {
      id: "berserk-chain",
      name: "Berserk Chain Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M2FEUEPMGFmBbv6e1Jz5orNbak4aI5.png",
      price: 15,
      description: "Premium metal chain design",
    },
    {
      id: "fitness-dumbbell",
      name: "Fitness Dumbbell Bracelet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1N7G6PC1T7a1bCHOpeUtCnZ4yUXTPQ.png",
      price: 15,
      description: "Beaded bracelet with dumbbell charm",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Anime & Fitness Bracelets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/accessories/bracelets/payment/${product.id}`} className="group block">
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
