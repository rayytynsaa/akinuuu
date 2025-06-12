import Link from "next/link"

export default function NewArrivals() {
  const products = [
    {
      name: "Classic Black Wrist Wraps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
      href: "/gym-gear/wrist-wraps/classic-black",
      price: 35,
    },
    {
      name: "Bereserk Bag",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rldggGpUoDQJHu95qe7IwdUM5Lgqui.png",
      href: "/gym-gear/gym-bags/bereserk",
      price: 75,
    },
    {
      name: "Red & Black Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-He72H34nKU4n583m6Ho8hZOJtcglUm.png",
      href: "/gym-gear/elbow-sleeves/breathable/red-black",
      price: 35,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.name} href={product.href} className="group block">
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
