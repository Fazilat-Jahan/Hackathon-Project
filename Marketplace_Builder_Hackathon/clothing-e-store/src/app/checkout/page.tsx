"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../Contexts/CartContext";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/StripePayment"),
  { ssr: false }
);

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "cod",
  });

  // If the cart is empty, redirect to the cart page
  // if (items.length === 0) {
  //   router.push("/cart");
  //   console.log("Redirecting to cart...");
  //   return null;
    
  // } 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show toast based on the selected payment method
    if (formData.paymentMethod === "bank") {
      toast.success("Payment done on Bank Transfer!");
      toast.success("Order placed successfully!");
    } else {
      toast.success("Order placed successfully!");
    }

      // Store the invoice data in localStorage
  localStorage.setItem("checkoutData", JSON.stringify({
    items, 
    totalPrice, 
    address: formData.address, 
    paymentMethod: formData.paymentMethod
  }));
  
    // Redirect to the invoice page with order details
    router.push("/invoice");
    console.log("Redirecting to invoice...");


    // Clear the cart after placing the order
    clearCart();

    
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                  className="mr-2"
                />
                Bank Transfer
              </label>
              {formData.paymentMethod === "bank" && (
                <DynamicComponentWithNoSSR />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            {formData.paymentMethod === "bank" ? "Pay Now" : "Place Order"}
          </button>
        </form>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item._id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
