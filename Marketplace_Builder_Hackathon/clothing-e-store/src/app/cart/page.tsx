"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../Contexts/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { FaTrashAlt } from "react-icons/fa";  // Trash icon
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";  // Minus and Plus icons

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/products">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:py-24 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">YOUR CART</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          {items.map((item:any) => (
            <div
              key={item._id}
              className="flex items-center gap-4 border-b py-4"
            >
              {/* Product Image */}
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={item.image ? urlFor(item.image).url() : "/placeholder.svg"}
                  alt={item.name || "Product Image"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                <p className="font-semibold text-lg mt-1">${item.price}</p>
              </div>

              {/* Quantity and Remove */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  className="px-3 py-1 border rounded text-lg"
                >
                  <AiOutlineMinus />
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="px-3 py-1 border rounded text-lg"
                >
                  <AiOutlinePlus />
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-xl ml-2"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-${(totalPrice * 0.2).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Delivery Fee</span>
              <span>$15</span>
            </div>
            <div className="flex justify-between font-bold text-lg sm:text-xl">
              <span>Total</span>
              <span>
                ${ (totalPrice - totalPrice * 0.2 + 15).toFixed(2) }
              </span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-grow border px-4 py-2 rounded-l"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r">
              Apply
            </button>
          </div>
          <Link href="/checkout">
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
              Go to Checkout →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
