"use client"
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "../Contexts/CartContext"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems, searchProducts } = useCart()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchProducts(searchQuery)
  }

  return (
    <div className="bg-white w-full md:w-full max-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 flex md:w-full w-full h-[34px] md:h-[38px] bg-black items-center z-50">
        <div className="flex w-full md:w-[859px] mx-auto text-white items-center">
          <div className="flex font-light font-satoshi text-xs md:text-sm w-full text-center justify-center">
            Sign up and get 20% off your first order.
            <span className="font-semibold px-2 underline">Sign Up Now</span>
          </div>
          <div className="hidden md:block text-sm font-light font-satoshi">X</div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="fixed top-[34px] md:top-[38px] md:w-[1440px] left-0 w-full bg-white shadow-md z-40">
        <div className="flex items-center justify-between px-4 py-2 w-full md:w-[1240px] mx-auto">
          <div className="md:hidden">
            <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </div>

          <Link href="/">
            <h1 className="font-bold text-[25.2px] md:text-[32px] font-integral">SHOP.CO</h1>
          </Link>

          <ul className="hidden md:flex gap-6 font-medium text-base font-satoshi">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/products">
              <li>Shop</li>
            </Link>
          </ul>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-3 bg-slate-200 w-[500px] h-[48px] py-[7px] pr-3 pl-5 text-gray-500 rounded-full"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search For Products"
              className="bg-transparent w-full focus:outline-none text-xs font-thin font-satoshi"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex items-center gap-3">
            <MagnifyingGlassIcon className="h-6 w-6 md:hidden" />
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href="/wishlist">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <UserCircleIcon className="h-6 w-6" />
          </div>
        </div>

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
      <div className=" py-[72px] md:py-[70px]"></div>
    </div>

   
  )
}

