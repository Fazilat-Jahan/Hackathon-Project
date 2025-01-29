"use client"

import { createContext, useContext, useState } from "react"
import type { Product } from "../types/Product"
import { toast } from "react-hot-toast"

interface WishlistContextType {
  items: Product[]
  wishlistCount: number
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
}


const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export default function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  const addToWishlist = (product: Product) => {
    setItems((currentItems) => {
      if (currentItems.some((item) => item._id === product._id)) {
        return currentItems
      }
      toast.success("Added to wishlist")
      return [...currentItems, product]
    })
  }

  const removeFromWishlist = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item._id !== productId))
    toast.success("Removed from wishlist")
  }

  const isInWishlist = (productId: string) => {
    return items.some((item) => item._id === productId)
  }
  const wishlistCount = items.length

  return (
    <WishlistContext.Provider
    value={{
      items,
      wishlistCount,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
    }}
  >
  
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

