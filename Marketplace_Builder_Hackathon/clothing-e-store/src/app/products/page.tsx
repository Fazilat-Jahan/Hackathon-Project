"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useCart } from "../Contexts/CartContext"
import { useWishlist } from "../Contexts/WishlistContext"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import * as Slider from "@radix-ui/react-slider" // Import Radix Slider components

export default function ProductCard() {
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [priceRange, setPriceRange] = useState([0, 500]) // Set initial price range
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(`*[_type == "products"]`)
      setProducts(productsData)
      setFilteredProducts(productsData)

      // Extract categories
      const categoriesData = [
        ...new Set(productsData.map((product: any) => product.category)),
      ]
      setCategories(categoriesData as string[]);
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [selectedCategory, priceRange])

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const isCategoryMatch =
        selectedCategory === "" || product.category === selectedCategory
      const isPriceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1]
      return isCategoryMatch && isPriceMatch
    })
    setFilteredProducts(filtered)
  }

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
    <div className="md:py-20 py-10">

      <div className="flex justify-between md:px-4 px-2 mb-4">
        <div>
          <label htmlFor="category" className="mr-2">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="mr-2">Price:</label>
          <div className="w-full">
          <Slider.Root
            className="relative flex items-center select-none w-full h-8 min-w-[200px]"
            value={priceRange}
            onValueChange={(newRange) => setPriceRange(newRange as [number, number])}
            min={0}
            max={500}
            step={1}
          >
              <Slider.Track className="bg-gray-300 relative flex-grow rounded-full h-1 w-full">
                <Slider.Range className="absolute bg-black h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-4 h-4 bg-black rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200" />
              <Slider.Thumb className="block w-4 h-4 bg-black rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200" />
            </Slider.Root>
            <div className="flex justify-between mt-1 text-sm text-black">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
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
                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                  <i className='fas fa-star text-yellow-400'></i>
                  <i className='fas fa-star text-yellow-400'></i>
                  <i className='fas fa-star text-yellow-400'></i>
                  <i className='fas fa-star text-yellow-400'></i>
                  <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i>
                  <span className='px-2'> 4.5/5 </span>
                </h2>
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
