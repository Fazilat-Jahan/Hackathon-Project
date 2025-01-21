"use client"

import { createContext, useContext, useState } from "react"
import { toast } from "react-hot-toast"
import type { Product } from "../types/Product"

interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  searchProducts: (query: string) => void
  searchResults: Product[]
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [searchResults, setSearchResults] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item._id === product._id)

      if (existingItem) {
        toast.success("Updated quantity in the cart")
        return currentItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      toast.success("Added to cart")
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item._id !== productId))
    toast.success("Removed from cart")
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item._id === productId ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0)
    )
    toast.success("Updated quantity")
  }

  const clearCart = () => {
    setItems([])
    toast.success("Cart cleared")
  }

  const searchProducts = async (query: string) => {
    const response = await fetch(`/api/search?query=${query}`)
    const results = await response.json()
    setSearchResults(results)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        searchProducts,
        searchResults,
      }}
    >
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
