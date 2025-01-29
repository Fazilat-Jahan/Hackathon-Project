"use client"
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "../Contexts/CartContext"
import { useWishlist } from "../Contexts/WishlistContext"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems, searchProducts } = useCart()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchProducts(searchQuery)
  }
  const { wishlistCount } = useWishlist()

  return (
    <div className="bg-white w-full">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        <div className="flex items-center justify-between px-8 py-2 w-full mx-auto">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Bars3Icon className="h-5 w-5 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </div>

          {/* Logo */}
          <Link href="/">
            <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-integral">SHOP.CO</h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 font-medium text-sm sm:text-base md:text-sm font-satoshi">
            <Link href="/">
              <li className="hover:text-gray-600">Home</li>
            </Link>
            <Link href="/products">
              <li className="hover:text-gray-600">Shop</li>
            </Link>
          </ul>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 bg-slate-200 w-[200px] sm:w-[250px] md:w-[300px] h-[30px] sm:h-[35px] px-3 rounded-full"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-xs sm:text-sm font-thin font-satoshi"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Icons (Cart, Wishlist, etc.) */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Icon */}
            <MagnifyingGlassIcon className="h-5 w-5 md:hidden" />

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>


            {/* Wishlist */}
            <Link href="/wishlist" className="relative">
              <div className="relative">
                <HeartIcon className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-white shadow-md p-4 md:hidden">
            <ul className="flex flex-col gap-4 font-medium text-base font-satoshi">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/products">
                <li>Shop</li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}
