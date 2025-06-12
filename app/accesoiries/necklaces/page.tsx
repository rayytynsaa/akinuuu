import Link from "next/link"

export default function Necklaces() {
  const products = [
    {
      id: "dumbbell",
      name: "Dumbbell Warrior Necklace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2jTlwSkdxiTgvL11CFSqK0I9tn89vl.png",
      price: 55,
      description: "Premium stainless steel dumbbell pendant",
    },
    {
      id: "katana",
      name: "Shadow Katana Necklace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OiD4HfTAgbw7aqag7vIFfbo2JHhllB.png",
      price: 60,
      description: "Sleek katana pendant on leather cord",
    },
    {
      id: "thor",
      name: "Thor's Hammer Pendant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LcA9I2qKdYy9aG9sA90SCOBj7Rh7SM.png",
      price: 65,
      description: "Norse-inspired hammer pendant",
    },
    {
      id: "sword",
      name: "Warrior's Sword Necklace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ABAotJ1ssc3fNKNrySDkK1CIzcfLV1.png",
      price: 58,
      description: "Classic sword pendant design",
    },
    {
      id: "skull",
      name: "Ram Skull Pendant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-obI3UtfmbdRSK8jyVRUZ7q56zxkATq.png",
      price: 70,
      description: "Gothic ram skull design",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Premium Necklaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/accessories/necklaces/${product.id}`} className="group block">
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
