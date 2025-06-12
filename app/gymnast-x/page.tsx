import Link from "next/link"

export default function GymnastX() {
  const products = [
    {
      name: "Resistance Band",
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1000&auto=format&fit=crop",
      href: "/gymnast-x/resistance-band",
      count: 4,
    },
    {
      name: "Mat",
      image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?q=80&w=1000&auto=format&fit=crop",
      href: "/gymnast-x/mat",
      count: 4,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">GymnastX</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <p className="text-gray-400">{product.count} Products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
