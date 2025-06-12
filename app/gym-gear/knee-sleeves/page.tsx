import Link from "next/link"

export default function KneeSleeves() {
  const products = [
    {
      id: "kanji",
      name: "Kanji Knee Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
      price: 60,
    },
    {
      id: "spider",
      name: "Spider Web Knee Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q3CSoW8o2bGXO3QPZN1uRRsj0WkZu7.png",
      price: 60,
    },
    {
      id: "skull",
      name: "Skull Knee Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vbwkNPwjNac0QqpG1YwErIHngaygif.png",
      price: 60,
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Knee Sleeves</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/knee-sleeves/${product.id}`} className="group block">
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
