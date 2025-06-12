"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { state, removeFromCart, updateQuantity } = useCart()
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const router = useRouter()

  const toggleItemSelection = (itemId: string) => {
    setSelectedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const selectedTotal = state.items
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item to checkout.")
      return
    }
    router.push("/checkout")
  }

  if (state.items.length === 0) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Your Cart is Empty</h1>
        <p className="mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {state.items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-gray-900 p-6 rounded-lg items-center">
              <div className="flex items-center h-full">
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={() => toggleItemSelection(item.id)}
                  className="h-5 w-5"
                />
              </div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-gray-400">{item.price} DT</p>
                {item.size && <p className="text-gray-400">Size: {item.size}</p>}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-gray-700"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-gray-700"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {state.items
              .filter((item) => selectedItems.includes(item.id))
              .map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} DT</span>
                </div>
              ))}
          </div>
          <div className="border-t border-gray-700 pt-4 mb-6">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{selectedTotal.toFixed(2)} DT</span>
            </div>
          </div>
          <Button className="w-full" size="lg" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
