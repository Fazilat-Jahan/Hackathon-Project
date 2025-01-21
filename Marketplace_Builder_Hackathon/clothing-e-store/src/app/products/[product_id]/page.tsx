'use client'

import { useState, useEffect } from "react"
import { useCart } from "../../Contexts/CartContext"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useWishlist } from "../../Contexts/WishlistContext"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export default function ProductDetail({ params }: { params: { product_id: string } }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    // Ensure the code runs on the client side
    if (typeof window !== 'undefined') {
      console.log("Params received:", params) // Debug params

      if (!params?.product_id) return

      const fetchProduct = async () => {
        try {
          const productData = await client.fetch(
            `*[_type == "products" && _id == $_id][0]`, // Updated query to get product by _id
            { _id: params.product_id } // Passing params.product_id to the query
          )
          console.log("Fetched product data:", productData) // Debug fetched data
          setProduct(productData)
        } catch (error) {
          console.error("Error fetching product data:", error) // Debug errors
        }
      }

      fetchProduct()
    }
  }, [params?.product_id]) // Adding params.product_id as dependency

  if (!product) return <div>Loading...</div>

  return (
    <div className="px-6 md:py-16 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative h-80 w-full flex-col items-center justify-center text-center">
            <h3 className="text-lg text-gray-600 mb-4 font-bold">Category: {product?.category} </h3>
            <Image
              src={product?.image ? urlFor(product.image).url() : "/placeholder.svg"}
              alt={product?.name || "Product Image"}
              className="object-contain h-full w-full"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">{product?.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{product?.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">${product?.price}</span>
              {product?.discountPercent > 0 && (
                <span className="text-sm text-green-600">-{product.discountPercent}%</span>
              )}
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  isInWishlist(product._id)
                    ? removeFromWishlist(product._id)
                    : addToWishlist(product)
                }}
                className="bg-white border border-black text-black p-2 rounded hover:bg-gray-100"
              >
                <HeartIcon
                  className={`h-5 w-5 ${
                    isInWishlist(product._id) ? "text-red-500 fill-red-500" : "text-black"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
