"use client"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface ShoppingCartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function ShoppingCartDrawer({ open, onClose }: ShoppingCartDrawerProps) {
  const router = useRouter()
  const { state, removeFromCart, updateQuantity } = useCart()

  const handleCheckout = () => {
    onClose()
    router.push("/checkout")
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="text-center text-gray-400 flex-1">Your cart is empty</div>
          ) : (
            <>
              <div className="flex-1 overflow-auto">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 border-b border-gray-800">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.price} DT</p>
                      {item.size && <p className="text-sm text-gray-400">Size: {item.size}</p>}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-4 mt-auto">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{state.total.toFixed(2)} DT</span>
                </div>
                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
