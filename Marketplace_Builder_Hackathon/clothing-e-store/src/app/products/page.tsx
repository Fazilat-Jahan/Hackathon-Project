 "use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useCart } from "../Contexts/CartContext"
import { useWishlist } from "../Contexts/WishlistContext"
import { client } from "@/sanity/lib/client" 
import { urlFor } from "@/sanity/lib/image"
export default function ProductCard() {
  const [products, setProducts] = useState<any[]>([])
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const fetchProducts = async () => {
      // GROQ query to fetch all products from Sanity
      const productsData = await client.fetch(`*[_type == "products"]`)
      setProducts(productsData)
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const handleToggleWishlist = (product: any) => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
         <Link href={`/products/${product._id}`}>
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10">
              {product.category || "Unknown Category"}
            </span>

            <div className="relative h-64 w-full">
              <Image 
                src={urlFor(product.image).url() || "/placeholder.svg"} 
                alt={product.name} 
                layout="fill" 
                className="object-fill" 
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.discountPercent > 0 && <span className="text-sm text-green-600">-{product.discountPercent}%</span>}
              </div>
            </div>
          </Link>
          <div className="p-4 pt-0 flex gap-2">
            <button onClick={() => handleAddToCart(product)} className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
            <button
              onClick={() => handleToggleWishlist(product)}
              className="bg-white border border-black text-black p-2 rounded hover:bg-gray-100"
            >
              <HeartIcon className={`h-5 w-5 ${isInWishlist(product._id) ? "text-red-500 fill-red-500" : "text-black"}`} />
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
