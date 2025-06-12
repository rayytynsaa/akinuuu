import Link from "next/link"

export default function BestSellers() {
  const products = [
    {
      name: "Goth Bish Deathcore",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zy1Pe73WpTBOd1TXx2xEu0tDyX97bA.png",
      href: "/gym-gear/gym-bags/goth-bish",
      price: 75,
    },
    {
      name: "Why So Serious Lifting Straps",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxPAebHtAwzyjRCYdBD2iXeChbOOON.png",
      href: "/gym-gear/lifting-straps/classic-straps/why-so-serious",
      price: 35,
    },
    {
      name: "Kanji Knee Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
      href: "/gym-gear/knee-sleeves/kanji",
      price: 40,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Best Sellers</h1>
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
