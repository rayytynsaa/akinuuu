import Link from "next/link"

export default function GymBags() {
  const products = [
    {
      id: "bereserk",
      name: "Bereserk Bag",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rldggGpUoDQJHu95qe7IwdUM5Lgqui.png",
      price: 75,
      description: "Premium marble pattern gym bag",
    },
    {
      id: "vegeta",
      name: "Vegeta Bag",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OakvHpJ97F6J5WzyClwrKWJvlSnwzV.png",
      price: 75,
      description: "Dragon Ball inspired design",
    },
    {
      id: "zoro",
      name: "Zoro Bag",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W469RHJRxQsaacOQy40rCJ6mwTlQJm.png",
      price: 75,
      description: "One Piece inspired gym bag",
    },
    {
      id: "baki",
      name: "Baki Hanma",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQyy07VaEkP7aEeLDO8y9VJGMxQ5xD.png",
      price: 75,
      description: "Baki inspired design",
    },
    {
      id: "goth-bish",
      name: "Goth Bish Deathcore",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zy1Pe73WpTBOd1TXx2xEu0tDyX97bA.png",
      price: 75,
      description: "Gothic style gym bag",
    },
    {
      id: "red-flame",
      name: "Red Flame",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qCdHBRhF2QuYUKjTOvvCh6hE3yz7WM.png",
      price: 75,
      description: "Red tribal pattern design",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Gym Bags</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/gym-gear/gym-bags/${product.id}`} className="group block">
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
