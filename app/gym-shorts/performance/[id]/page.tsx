"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const products = {
  "spider-web": {
    name: "Spider Web Performance Shorts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pta0pOmmD4pIrafZYwfTFBCB74xQqD.png",
    price: 45,
    description:
      "Dominate your training with our signature spider web pattern performance shorts. Engineered for maximum performance and style.",
    features: [
      "Premium performance fabric",
      "Signature spider web design",
      "4-way stretch material",
      "Moisture-wicking technology",
      "Competition approved",
    ],
  },
  carnage: {
    name: "Carnage Performance Shorts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IchlkSE31SHJ3jUmlut47pwNt7z4s6.png",
    price: 45,
    description:
      "Unleash your inner beast with our Carnage performance shorts. Featuring an aggressive teeth design that demands attention.",
    features: [
      "High-performance fabric",
      "Bold Carnage teeth design",
      "Quick-dry technology",
      "Enhanced durability",
      "Perfect for intense training",
    ],
  },
  skull: {
    name: "Skull Performance Shorts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bEJ7Z1nAyK3YF09vDgt36NmAlAHLKu.png",
    price: 45,
    description:
      "Make a statement with our Skull performance shorts. The intricate design represents the warrior spirit within.",
    features: [
      "Premium athletic material",
      "Unique skull design",
      "Breathable construction",
      "Superior comfort",
      "Built for performance",
    ],
  },
  reaper: {
    name: "Reaper Performance Shorts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cm3wnABs0XCWLCG9JjqnMaXw4HdN5l.png",
    price: 45,
    description:
      "Embrace your dark side with our Angel of Death performance shorts. A powerful design that commands respect.",
    features: [
      "Advanced performance fabric",
      "Striking angel wing design",
      "Maximum mobility",
      "Sweat-wicking technology",
      "Professional grade quality",
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("M")
  const product = products[params.id as keyof typeof products]

  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart({
      id: params.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (!product) {
    return <div>Product not found</div>
  }

  const sizes = ["S", "M", "L", "XL", "XXL"]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-400">{product.price} DT</p>
          <p className="text-gray-300">{product.description}</p>

          <div>
            <label className="block text-sm font-medium mb-2">SIZE:</label>
            <RadioGroup defaultValue="M" onValueChange={setSelectedSize}>
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - {product.price} DT
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
