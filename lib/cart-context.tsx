"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
}

type CartState = {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (item: Omit<CartItem, "quantity"> & { size?: string }) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      if (existingItemIndex > -1) {
        const newItems = [...state.items]
        newItems[existingItemIndex].quantity += 1
        return {
          ...state,
          items: newItems,
          total: state.total + action.payload.price,
        }
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      }
    }
    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find((item) => item.id === action.payload)
      if (!itemToRemove) return state

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - itemToRemove.price * itemToRemove.quantity,
      }
    }
    case "UPDATE_QUANTITY": {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
      if (itemIndex === -1) return state

      const newItems = [...state.items]
      const oldQuantity = newItems[itemIndex].quantity
      newItems[itemIndex].quantity = action.payload.quantity

      return {
        ...state,
        items: newItems,
        total: state.total + newItems[itemIndex].price * (action.payload.quantity - oldQuantity),
      }
    }
    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      const { items, total } = JSON.parse(savedCart)
      dispatch({ type: "CLEAR_CART" })
      items.forEach((item: CartItem) => {
        dispatch({ type: "ADD_ITEM", payload: item })
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  const addToCart = (item: Omit<CartItem, "quantity"> & { size?: string }) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } })
  }

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
