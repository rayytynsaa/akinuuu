"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const products = {
  kanji: {
    name: "Kanji Knee Sleeves",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
    price: 60,
    description: "Premium knee sleeves featuring Japanese characters for strength and power.",
  },
  spider: {
    name: "Spider Web Knee Sleeves",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q3CSoW8o2bGXO3QPZN1uRRsj0WkZu7.png",
    price: 60,
    description: "Unique spider web pattern knee sleeves for a bold look.",
  },
  skull: {
    name: "Skull Knee Sleeves",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vbwkNPwjNac0QqpG1YwErIHngaygif.png",
    price: 60,
    description: "Striking skull design knee sleeves with red accents.",
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
      price: 60,
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
            ADD TO CART - {60} DT
          </Button>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="font-medium mb-4">Product Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>7mm neoprene thickness</li>
              <li>Reinforced stitching</li>
              <li>Competition approved</li>
              <li>Sold as a pair</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
