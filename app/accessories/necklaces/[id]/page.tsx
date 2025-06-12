"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  "onepiece-wheel": {
    name: "One Piece Wheel Necklace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P22bo10Yvb7fQfKi4WTw3h3FViRRYw.png",
    price: 15,
    description: "Straw Hat Pirates wheel pendant",
    details:
      "Premium bronze-finished pendant featuring the iconic Straw Hat Pirates emblem in a ship's wheel design. Perfect for One Piece fans and collectors. Includes a durable leather cord.",
    features: [
      "Premium bronze finish",
      "Detailed wheel design",
      "Adjustable leather cord",
      "Straw Hat Pirates emblem",
      "Durable construction",
    ],
  },
  "ace-wanted": {
    name: "Portgas D. Ace Wanted Poster",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E7GKbCkxeHx8pjBrSkjAvHbS2URG3w.png",
    price: 15,
    description: "Double-sided wanted poster dog tag",
    details:
      "High-quality stainless steel dog tag featuring Portgas D. Ace's wanted poster design on both sides. Shows both manga and anime style artwork. Includes premium steel chain.",
    features: [
      "Double-sided design",
      "Stainless steel construction",
      "High-quality printing",
      "Durable chain included",
      "Water-resistant finish",
    ],
  },
  "berserk-brand": {
    name: "Brand of Sacrifice",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H8dWMNbwpz8HmJkbUARrL7hjqZ6jxm.png",
    price: 15,
    description: "Berserk Brand of Sacrifice pendant",
    details:
      "Iconic Brand of Sacrifice pendant from Berserk. Features red enamel detail and premium metal construction. A must-have for Berserk fans.",
    features: [
      "Red enamel detail",
      "Premium metal alloy",
      "Detailed engraving",
      "Adjustable chain",
      "Collector's quality",
    ],
  },
  "aot-sword": {
    name: "Attack on Titan Sword",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gvE6FP0cPVet4DCw5VDlUj96ARGUCd.png",
    price: 15,
    description: "Survey Corps blade pendant",
    details:
      "Miniature replica of the Survey Corps' iconic blade. Crafted with attention to detail in durable metal. Perfect for Attack on Titan fans.",
    features: [
      "Detailed sword design",
      "Premium metal construction",
      "Authentic replica",
      "Durable chain",
      "Collector's item",
    ],
  },
  "ak47-pendant": {
    name: "AK-47 Pendant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RTXqrqau7Qyw1eyI71IX1KApVrFfJs.png",
    price: 15,
    description: "Detailed AK-47 design pendant",
    details:
      "Highly detailed AK-47 pendant in black metal finish. Features precise detailing and premium construction. Includes high-quality chain.",
    features: ["Black metal finish", "Precise detailing", "Durable construction", "Premium chain", "Unique design"],
  },
  "ace-spades": {
    name: "Ace of Spades",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DhTXpUVMrzSJbdIa2568o5KkiNnKCn.png",
    price: 15,
    description: "Classic playing card pendant",
    details:
      "Classic Ace of Spades design in polished stainless steel. Features high-quality finish and detailed engraving. Perfect for card enthusiasts.",
    features: [
      "Polished steel finish",
      "Detailed card design",
      "Premium chain",
      "Durable construction",
      "Classic style",
    ],
  },
  "viking-axe": {
    name: "Viking Axe Pendant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BKRMwKItMjCArXLwvEDFpEQKu1YhZW.png",
    price: 15,
    description: "Nordic style axe pendant",
    details:
      "Intricately designed Viking axe pendant featuring traditional Nordic patterns. Crafted in premium metal with detailed engravings.",
    features: [
      "Nordic design patterns",
      "Premium metal construction",
      "Detailed engravings",
      "Adjustable chain",
      "Authentic style",
    ],
  },
  "onepiece-anchor": {
    name: "One Piece Anchor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P22bo10Yvb7fQfKi4WTw3h3FViRRYw.png",
    price: 15,
    description: "Straw Hat Pirates anchor pendant",
    details:
      "Premium anchor pendant featuring One Piece design elements. Perfect for fans of the series. Includes durable chain.",
    features: ["Detailed anchor design", "Premium finish", "One Piece styling", "Durable chain", "Collector's quality"],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
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
