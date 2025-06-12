"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/lib/cart-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function CheckoutPage() {
  const router = useRouter()
  const { state, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    clearCart()
    router.push("/order-confirmation")
  }

  return (
    <div className="pt-32 pb-16 container max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-[1fr,380px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>Enter your shipping details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cin">CIN</Label>
                <Input id="cin" required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Select your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d17" id="d17" />
                  <Label htmlFor="d17">D17</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" ? (
                <div className="mt-4 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </div>
              ) : paymentMethod === "d17" ? (
                <div className="mt-4 grid gap-2">
                  <Label htmlFor="d17-account">D17 Account Number</Label>
                  <Input id="d17-account" required />
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-400">You will pay in cash when your order is delivered.</div>
              )}
            </CardContent>
          </Card>
        </form>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                      {item.size && ` • Size: ${item.size}`}
                    </p>
                  </div>
                  <p className="font-medium">{(item.price * item.quantity).toFixed(2)} DT</p>
                </div>
              ))}
              <div className="border-t border-gray-800 pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{state.total.toFixed(2)} DT</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" size="lg">
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
