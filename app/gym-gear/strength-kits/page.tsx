import Link from "next/link"

export default function StrengthKits() {
  const products = [
    {
      id: "powerlifting-kit",
      name: "Powerlifting Kit",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      price: 150,
      description: "Complete powerlifting support kit",
    },
    {
      id: "deadlift-kit",
      name: "Deadlift Specialist Kit",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
      price: 120,
      description: "Specialized deadlift support kit",
    },
    {
      id: "bench-kit",
      name: "Bench Press Kit",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f00Fx7xA2ffH46TRH5BwCcdnM5MvWW.png",
      price: 110,
      description: "Complete bench press support kit",
    },
    {
      id: "squat-kit",
      name: "Squat Support Kit",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      price: 130,
      description: "Premium squat support kit",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Strength Kits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/strength-kits/${product.id}`} className="group block">
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
