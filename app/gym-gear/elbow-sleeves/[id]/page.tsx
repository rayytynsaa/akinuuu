"use client"

import { notFound } from "next/navigation"
import { getProducts } from "@/lib/data"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import React from "react"

export const metadata: Metadata = {
  title: "Elbow Sleeves",
  description: "Shop our collection of high-quality elbow sleeves.",
}

export default function ElbowSleevesPage({ params }: { params: { id: string } }) {
  const products = getProducts()
  const product = products.find((product) => product.id === params.id)

  if (!product) {
    // throw new Error(`Product with ID ${params.id} not found`)
    notFound()
  }

  const [selectedSize, setSelectedSize] = React.useState("S")
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

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-[300px] object-cover" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg mt-2">{product.description}</p>
        <div className="mt-4">
          <p className="text-lg font-bold">Price: {product.price} DT</p>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <RadioGroup defaultValue="S" onValueChange={setSelectedSize}>
              {["S", "M", "L", "XL"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 mt-4" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - {product.price} DT
          </Button>
        </div>
      </div>
    </div>
  )
}
