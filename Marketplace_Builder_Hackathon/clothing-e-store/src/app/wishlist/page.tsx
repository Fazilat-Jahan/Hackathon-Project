"use client";

import React from "react";
import { useWishlist } from "../Contexts/WishlistContext";
import { useCart } from "../Contexts/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="px-6 py-16 md:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Your Wishlist
      </h1>
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item:any) => (
            <div
              key={item._id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <Image
                src={
                  item.image
                    ? urlFor(item.image).url()
                    : "/placeholder.svg" // Fallback image
                }
                alt={item.name || "Product Image"}
                width={100}
                height={100}
                className="rounded w-full h-auto object-cover"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                {item.name}
              </h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base md:text-lg">
                ${item.price.toFixed(2)}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
                  onClick={() => removeFromWishlist(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
