"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const PAYMENT_METHODS = [
  { id: "edinar", name: "E-DINAR", icon: "/payment-icons/edinar.svg" },
  { id: "mastercard", name: "Mastercard", icon: "/payment-icons/mastercard.svg" },
  { id: "visa", name: "Visa", icon: "/payment-icons/visa.svg" },
  { id: "usdt", name: "USDT", icon: "/payment-icons/usdt.svg" },
  { id: "d17", name: "D17", icon: "/payment-icons/d17.svg" },
]

export default function ShoppingCartButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"cart" | "payment">("cart")
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  const handleCheckout = () => {
    setStep("payment")
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>{step === "cart" ? "Shopping Cart" : "Payment"}</SheetTitle>
        </SheetHeader>

        {step === "cart" ? (
          <div className="mt-8 space-y-4">
            <div className="text-center text-gray-400">Your cart is empty</div>
            <Button className="w-full" size="lg" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <span className="font-medium">Select Payment Method</span>
                <div className="flex items-center gap-2">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-2 rounded-lg transition-all ${paymentMethod === method.id ? "bg-gray-800" : ""}`}
                    >
                      <img src={method.icon || "/placeholder.svg"} alt={method.name} className="h-8 w-auto" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {paymentMethod && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="bg-gray-900 border-gray-800 focus:border-gray-700"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="bg-gray-900 border-gray-800 focus:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="bg-gray-900 border-gray-800 focus:border-gray-700" />
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Complete Payment
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <div className="flex justify-center gap-4">
            {PAYMENT_METHODS.map((method) => (
              <img
                key={method.id}
                src={method.icon || "/placeholder.svg"}
                alt={method.name}
                className="h-6 w-auto opacity-50"
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
