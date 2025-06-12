import Link from "next/link"

export default function CombatEssentials() {
  const products = [
    {
      name: "Bandage",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VTGcZlUwz3GnFAGZmtjkZKlBTozijf.png",
      href: "/combat-essentials/bandage",
    },
    {
      name: "Gloves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZHjTz4uJ3Uwu2SK5Vt87rbZ0ZqxXXs.png",
      href: "/combat-essentials/gloves",
    },
    {
      name: "Support Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4lXo1UCtcXIHzLHzMG7OBLtFOAfQdb.png",
      href: "/combat-essentials/support-sleeves",
    },
    {
      name: "Protege Teeth",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l9pypRisX6nHYwMrFIgJpEJMm6oeR3.png",
      href: "/combat-essentials/protege-teeth",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Combat Essentials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.name} href={product.href} className="group block">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-xl font-medium text-center">{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
