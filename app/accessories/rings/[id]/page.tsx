"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  "onepiece-liberty": {
    name: "One Piece Liberty Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7scfqwFwPKToORZrzyTcRruApooPJ7.png",
    price: 15,
    description: "Liberty design with gold accent",
    details:
      "Premium stainless steel ring featuring One Piece inspired design with gold-plated Statue of Liberty accent. Perfect for fans of the series.",
    features: [
      "Stainless steel construction",
      "Gold-plated accent",
      "Detailed engraving",
      "Comfort fit design",
      "Tarnish resistant",
    ],
  },
  "berserk-brand": {
    name: "Berserk Brand Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wG34cExnEsc7gzx9ZE7AHFL4zrDK5b.png",
    price: 15,
    description: "Brand of Sacrifice black ring",
    details:
      "Black stainless steel ring featuring the iconic Brand of Sacrifice from Berserk. Perfect for fans of the dark fantasy series.",
    features: [
      "Black finish",
      "Premium steel construction",
      "Detailed brand symbol",
      "Comfort fit band",
      "Scratch resistant",
    ],
  },
  "chain-black": {
    name: "Chain Pattern Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oydMIQ3qymn9tivuhlMD900e3WfNon.png",
    price: 15,
    description: "Black chain design with numerals",
    details:
      "Unique black ring featuring a chain pattern design with Roman numerals. Made from premium stainless steel with a comfort fit interior.",
    features: [
      "Chain link pattern",
      "Roman numeral details",
      "Black finish",
      "Comfort fit design",
      "Durable construction",
    ],
  },
  "cards-ace": {
    name: "Ace of Spades Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BayFljbxDG4qejCAoFD3yLFUo4TXcz.png",
    price: 15,
    description: "Playing cards themed ring",
    details:
      "Sterling silver ring featuring playing card designs with Ace of Spades motif. Includes detailed card symbols and premium finish.",
    features: [
      "Sterling silver construction",
      "Playing card designs",
      "Detailed engravings",
      "Comfort band",
      "Premium finish",
    ],
  },
  "eye-pattern": {
    name: "Eye Pattern Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DkjXG2glHMNCuVd7qRH71UBzOwtdCw.png",
    price: 15,
    description: "Mystical eye design ring",
    details:
      "Black stainless steel ring with repeating mystical eye pattern. Perfect for fans of supernatural and mystic themes.",
    features: ["Repeating eye pattern", "Black finish", "Premium steel", "Comfort fit", "Detailed engraving"],
  },
  "kanji-black": {
    name: "Kanji Symbol Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-grmzvMGkY0MmZaQrgwLvfjVwSYntP1.png",
    price: 15,
    description: "Japanese character design",
    details:
      "Black stainless steel ring featuring Japanese kanji character. Sleek and minimalist design with premium finish.",
    features: ["Japanese kanji design", "Black finish", "Stainless steel", "Minimalist style", "Comfort fit band"],
  },
  "silver-leaf": {
    name: "Silver Leaf Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-65Hkowa4vKlGS30d4ft07mLGwH3M9i.png",
    price: 15,
    description: "Wrap-around leaf design",
    details: "Sterling silver wrap-around ring with detailed leaf pattern. Adjustable design for perfect fit.",
    features: ["Sterling silver", "Adjustable design", "Leaf pattern detail", "Premium finish", "Unique wrap style"],
  },
  "dragon-wrap": {
    name: "Dragon Wrap Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuPDVzh8Frnmf2SmYnVnutbYDGWT1D.png",
    price: 15,
    description: "Dragon wrap-around design",
    details:
      "Detailed dragon wrap-around ring in antique silver finish. Features intricate scales and design elements.",
    features: [
      "Antique silver finish",
      "Detailed dragon design",
      "Wrap-around style",
      "Premium construction",
      "Adjustable fit",
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("18")
  const { addToCart } = useCart()
  const { toast } = useToast()
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: params.id,
      name: product.name,
      price: 15,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-400">{product.price} DT</p>
          <p className="text-gray-300">{product.details}</p>

          <div>
            <label className="block text-sm font-medium mb-2">RING SIZE:</label>
            <div className="flex flex-wrap gap-2">
              {["16", "17", "18", "19", "20", "21", "22"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? "border-white bg-white text-black" : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - 15 DT
          </Button>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="font-medium mb-4">Product Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
