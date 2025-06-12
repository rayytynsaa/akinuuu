"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  bereserk: {
    name: "Bereserk Bag",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rldggGpUoDQJHu95qe7IwdUM5Lgqui.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RrB0IZSn3Cfo0Nk9Wniw3DJKHD3oee.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4TvDtan2TMfAOq7urB1P9dvPBxevN1.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bAxsngFrNuRo0m1tGKJN0MonxjEGH4.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5DXu98azFlt7MWH6qYHe7NRSnvez2u.png",
    ],
    price: 75,
    description:
      "Premium marble pattern gym bag featuring unique design elements and high-quality construction. Perfect for serious athletes and gym enthusiasts.",
    features: [
      "High Quality Nylon Shoulder Strap",
      "Lightweight And Durable Polyester",
      "Solid Clasps And Fixtures",
      "High Quality Double Zippers",
      "Comfortable Carrying Handle",
    ],
  },
  vegeta: {
    name: "Vegeta Bag",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OakvHpJ97F6J5WzyClwrKWJvlSnwzV.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ovfrOKqkTHsBSWEQuCEZdoyoPENLQR.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pqxSWouJsvfZz7HY6iNgFaSX4qSszj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sTY4wZEA3Gtnv1yoCVB2aowbVBRntm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5DXu98azFlt7MWH6qYHe7NRSnvez2u.png",
    ],
    price: 75,
    description:
      "Dragon Ball inspired gym bag featuring premium materials and iconic design elements. Perfect for fans and serious athletes alike.",
    features: [
      "Premium Quality Construction",
      "Adjustable Shoulder Strap",
      "Multiple Compartments",
      "Water-Resistant Material",
      "Reinforced Stitching",
    ],
  },
  zoro: {
    name: "Zoro Bag",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W469RHJRxQsaacOQy40rCJ6mwTlQJm.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Wgw140xQ5MDfi5TSH1Sn32sGMqeaX.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vd4snufFxsg7iiVgZyGbR6QS5jDraf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2btLHNtYVYjYBSe1HYErr8b7eJoRcj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CJdAkL8T4Rzgtrn4xMQGcp7ML8I5XL.png",
    ],
    price: 75,
    description:
      "Premium gym bag featuring the iconic Zoro design. Made with high-quality materials and expert craftsmanship, this bag combines style with functionality. Perfect for both gym enthusiasts and One Piece fans.",
    features: [
      "High Quality Nylon Shoulder Strap",
      "Lightweight And Durable Polyester",
      "Solid Clasps And Fixtures",
      "High Quality Double Zippers",
      "Comfortable Carrying Handle",
    ],
  },
  baki: {
    name: "Baki Hanma",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQyy07VaEkP7aEeLDO8y9VJGMxQ5xD.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uk79zj40IyHEeDwcur7gi3UARXgwZx.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ZxGWUojlXhihZkBTM9n893taIVhHg.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VXj4nBE7CyG4Q33hcuzNJmhdFtrKN0.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWfgYJtpgO20GpDpxks2NslKnX6PTR.png",
    ],
    price: 75,
    description:
      "Inspired by the legendary fighter Baki Hanma, this premium gym bag showcases a striking monochromatic design featuring the iconic character. Crafted with superior materials and attention to detail, this bag combines aggressive styling with unmatched functionality.",
    features: [
      "Premium Quality Construction",
      "High-Capacity Main Compartment",
      "Reinforced Carrying Handles",
      "Adjustable Shoulder Strap",
      "Water-Resistant Material",
    ],
  },
  "goth-bish": {
    name: "Goth Bish Deathcore",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zy1Pe73WpTBOd1TXx2xEu0tDyX97bA.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z8WyP2GffoJUx12g1VE2JX4QZb1AYE.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9zbYQcrKm8SjV9btD22B49HFJin0wO.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWduGRVtgySOogadgrjra9r6C9v1z7.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ret4Kg6Ljwx5krIKens7lWwTlPjO4n.png",
    ],
    price: 75,
    description:
      "A masterpiece of gothic aesthetics meets functional design. This premium gym bag features an exclusive deathcore-inspired logo on durable black fabric. Each detail has been carefully crafted to deliver both striking visual impact and superior performance.",
    features: [
      "Exclusive Gothic Design",
      "Heavy-Duty Construction",
      "Premium Metal Hardware",
      "Spacious Interior",
      "Ergonomic Shoulder Strap",
    ],
  },
  "red-flame": {
    name: "Red Flame",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qCdHBRhF2QuYUKjTOvvCh6hE3yz7WM.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWw8Soq3XbtxGQ9E4q8JmTuTIHL5JY.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XTduXOY7TeNPDtJmvjrQ70cchqEnx9.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mj2leoTxCOJPtzlwnF37DXAxgfn69K.png",
    ],
    price: 75,
    description:
      "Ignite your workout with this bold red flame design gym bag. Featuring an aggressive tribal pattern in striking red on black, this bag combines eye-catching aesthetics with professional-grade durability and functionality.",
    features: [
      "Bold Red Flame Design",
      "Premium Polyester Construction",
      "Reinforced Stress Points",
      "Multiple Storage Compartments",
      "Padded Shoulder Strap",
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const product = products[params.id as keyof typeof products]
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!product) {
    return <div>Product not found</div>
  }

  const allImages = [product.mainImage, ...(product.images || [])]

  const handleAddToCart = () => {
    addToCart({
      id: params.id,
      name: product.name,
      price: product.price,
      image: product.mainImage,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
            <img
              src={allImages[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg bg-gray-900 ${
                  selectedImage === index ? "ring-2 ring-red-500" : ""
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-lg sm:text-xl text-gray-400">{product.price} DT</p>
          <p className="text-gray-300 text-sm sm:text-base">{product.description}</p>

          <Button
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700 py-3 sm:py-6 text-base sm:text-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - {product.price} DT
          </Button>

          <div className="border-t border-gray-800 pt-4 sm:pt-6">
            <h3 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">Product Features</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
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
