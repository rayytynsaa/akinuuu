import Link from "next/link"

export default function Rings() {
  const products = [
    {
      id: "onepiece-liberty",
      name: "One Piece Liberty Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7scfqwFwPKToORZrzyTcRruApooPJ7.png",
      price: 15,
      description: "Liberty design with gold accent",
    },
    {
      id: "berserk-brand",
      name: "Berserk Brand Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wG34cExnEsc7gzx9ZE7AHFL4zrDK5b.png",
      price: 15,
      description: "Brand of Sacrifice black ring",
    },
    {
      id: "chain-black",
      name: "Chain Pattern Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oydMIQ3qymn9tivuhlMD900e3WfNon.png",
      price: 15,
      description: "Black chain design with numerals",
    },
    {
      id: "cards-ace",
      name: "Ace of Spades Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BayFljbxDG4qejCAoFD3yLFUo4TXcz.png",
      price: 15,
      description: "Playing cards themed ring",
    },
    {
      id: "eye-pattern",
      name: "Eye Pattern Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DkjXG2glHMNCuVd7qRH71UBzOwtdCw.png",
      price: 15,
      description: "Mystical eye design ring",
    },
    {
      id: "kanji-black",
      name: "Kanji Symbol Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-grmzvMGkY0MmZaQrgwLvfjVwSYntP1.png",
      price: 15,
      description: "Japanese character design",
    },
    {
      id: "silver-leaf",
      name: "Silver Leaf Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-65Hkowa4vKlGS30d4ft07mLGwH3M9i.png",
      price: 15,
      description: "Wrap-around leaf design",
    },
    {
      id: "dragon-wrap",
      name: "Dragon Wrap Ring",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuPDVzh8Frnmf2SmYnVnutbYDGWT1D.png",
      price: 15,
      description: "Dragon wrap-around design",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Gothic & Anime Rings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/accessories/rings/${product.id}`} className="group block">
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
