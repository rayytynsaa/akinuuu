"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("M")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart } = useCart()

  // Add the new product images
  const productImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pta0pOmmD4pIrafZYwfTFBCB74xQqD.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-znPZ65AFPNdbevy0lTqJ1Ln7F8O2Ra.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IEcgYKauL3aeYrVd5wd0TcKqFKTF6z.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IBKYbtrwjwJEwEeKmgTOfE2LXgwafL.png",
  ]

  // Product data
  const product = {
    id: params.id,
    name: "Arachnid Mesh Shorts",
    price: 45,
    description:
      "Dominate your training with our signature spider web pattern mesh shorts. Crafted for the fearless athlete who embraces the grind.",
    features: [
      "Premium breathable mesh material",
      "Signature spider web design",
      "Elastic waistband with drawstring",
      "Side pockets",
      "Competition approved",
    ],
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImages[0],
      quantity: 1,
      size: selectedSize,
    })
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1))
  }

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <img
            src={productImages[currentImageIndex] || "/placeholder.svg"}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/20 hover:bg-black/40 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/20 hover:bg-black/40 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl mt-2">{product.price} DT</p>
          <p className="mt-6 text-gray-400">{product.description}</p>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">SIZE:</h3>
            <RadioGroup defaultValue="M" className="flex gap-4" onValueChange={setSelectedSize}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="S" id="S" />
                <Label htmlFor="S">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="M" />
                <Label htmlFor="M">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" id="L" />
                <Label htmlFor="L">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XL" id="XL" />
                <Label htmlFor="XL">XL</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XXL" id="XXL" />
                <Label htmlFor="XXL">XXL</Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full mt-8 py-6 text-lg" onClick={handleAddToCart}>
            ADD TO CART - {product.price} DT
          </Button>

          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Product Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
