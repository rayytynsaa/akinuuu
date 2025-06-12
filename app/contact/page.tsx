"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="pt-32 pb-16 container max-w-2xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-8">Contact</h1>
      <p className="text-gray-400 mb-12">
        Contact us using the form below or email us at{" "}
        <a href="mailto:akinuhelp@gmail.com" className="text-white hover:underline">
          akinuhelp@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-900"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gray-900"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-gray-900"
          />
        </div>
        <div>
          <Textarea
            placeholder="Comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="bg-gray-900 min-h-[150px]"
          />
        </div>
        <Button type="submit" size="lg">
          Send
        </Button>
      </form>
    </div>
  )
}
