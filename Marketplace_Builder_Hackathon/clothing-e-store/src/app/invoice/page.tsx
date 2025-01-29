"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvoicePage() {
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const router = useRouter();

  // Fetch the data from localStorage or other sources on mount
  useEffect(() => {
    const storedData = localStorage.getItem("checkoutData");
    if (storedData) {
      setInvoiceData(JSON.parse(storedData));
    } else {
      router.push("/"); // Redirect to home if no invoice data
    }
  }, [router]);

  if (!invoiceData) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  const { items, totalPrice, address, paymentMethod } = invoiceData;

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-2xl font-bold mb-4">Invoice</h1>
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="space-y-4">
          {items.map((item: any) => (
            <div key={item._id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between">
            <span>Shipping Address:</span>
            <span>{address}</span>
          </div>
          <div className="flex justify-between">
            <span>Payment Method:</span>
            <span>{paymentMethod === "bank" ? "Bank Transfer" : "Cash on Delivery"}</span>
          </div>
        </div>
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => (window.location.href = "/products")}
        className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Continue Shopping
      </button>
    </div>
  );
}
