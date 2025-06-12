import Link from "next/link"

export default function Necklaces() {
  const products = [
    {
      id: "onepiece-wheel",
      name: "One Piece Wheel Necklace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P22bo10Yvb7fQfKi4WTw3h3FViRRYw.png",
      price: 15,
      description: "Straw Hat Pirates wheel pendant",
    },
    {
      id: "ace-wanted",
      name: "Portgas D. Ace Wanted Poster",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E7GKbCkxeHx8pjBrSkjAvHbS2URG3w.png",
      price: 15,
      description: "Double-sided wanted poster dog tag",
    },
    {
      id: "berserk-brand",
      name: "Brand of Sacrifice",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H8dWMNbwpz8HmJkbUARrL7hjqZ6jxm.png",
      price: 15,
      description: "Berserk Brand of Sacrifice pendant",
    },
    {
      id: "aot-sword",
      name: "Attack on Titan Sword",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gvE6FP0cPVet4DCw5VDlUj96ARGUCd.png",
      price: 15,
      description: "Survey Corps blade pendant",
    },
    {
      id: "ak47-pendant",
      name: "AK-47 Pendant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RTXqrqau7Qyw1eyI71IX1KApVrFfJs.png",
      price: 15,
      description: "Detailed AK-47 design pendant",
    },
    {
      id: "ace-spades",
      name: "Ace of Spades",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DhTXpUVMrzSJbdIa2568o5KkiNnKCn.png",
      price: 15,
      description: "Classic playing card pendant",
    },
    {
      id: "viking-axe",
      name: "Viking Axe Pendant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BKRMwKItMjCArXLwvEDFpEQKu1YhZW.png",
      price: 15,
      description: "Nordic style axe pendant",
    },
    {
      id: "onepiece-anchor",
      name: "One Piece Anchor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P22bo10Yvb7fQfKi4WTw3h3FViRRYw.png",
      price: 15,
      description: "Straw Hat Pirates anchor pendant",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Anime & Gaming Necklaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
