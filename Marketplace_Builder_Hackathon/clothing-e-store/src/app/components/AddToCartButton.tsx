"use client";

import { useCart } from "../Contexts/CartContext";

interface CartButtonProps {
  product: any;
  selectedSize: string | null;
  selectedColor: string | null;
}

export default function CartButton({ product, selectedSize, selectedColor }: CartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to cart!");
      return;
    }
    addToCart({ ...product, selectedSize, selectedColor });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 bg-black text-white px-8 py-3 rounded hover:bg-gray-800"
    >
      Add to Cart
    </button>
  );
}
