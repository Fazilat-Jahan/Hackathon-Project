import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CartPage() {
    return (
        <div>
            <Header/>
            <div className="min-h-screen bg-white  py-[100px] md:py-[130px]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Breadcrumb */}
                    <nav className="md:text-[16px] text-sm font-satoshi text-gray-500 mb-4 border-t pt-2">
                        <a href="/" className="hover:underline">Home</a> / <span className=" text-black">Cart</span>
                    </nav>

                    {/* Page Title */}
                    <h1 className="md:text-[40px] text-[32px] font-bold font-integral mb-6">YOUR CART</h1>

                    <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                        {/* Left Section: Cart Items */}
                        <div className="flex-1 md:w-[715px] w-4/5 h-4/5 md:h-[508px] bg-white md:p-6 p-[14px] rounded-3xl shadow border border-gray-300">
                            {/* Item 1 */}
                            <div className="flex items-center justify-between border-b pb-4 mb-4">
                                <div className="flex items-start gap-4">
                                    <Image width={124} height={124}
                                        src="/casual1.png"
                                        alt="Gradient Graphic T-shirt"
                                        className="object-cover rounded md:w-[124px] md:h-[124px] w-[90px] h-[90px]"
                                    />
                                    <div className='font-satoshi flex-1'>
                                        <h3 className="font-bold md:text-xl text-base my-1">Gradient Graphic T-shirt</h3>
                                        <p className="md:text-sm text-xs text-gray-500">Size: Large</p>
                                        <p className="md:text-sm text-xs text-gray-500">Color: White</p>
                                        <p className="font-bold md:text-2xl text-xl md:mt-3">$145</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between md:h-[124px] h-[57px]">
                                    <button
                                        className="text-red-500 hover:text-red-700 ml-auto"
                                        aria-label="Delete item">
                                        <AiFillDelete size={24} className='w-5 h-5 md:h-6 md:w-6' />
                                    </button>
                                    <div className="flex font-satoshi font-medium text-black md:w-[126px] w-[105px] h-[32px] md:h-[44px] justify-between items-center border rounded-full text-sm bg-gray-200 px-5 py-3 ">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>

                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-center justify-between border-b pb-4 mb-4">
                                <div className="flex items-start gap-4">
                                    <Image width={124} height={124}
                                        src="/shirt.png"
                                        alt="Checkered Shirt"
                                        className="object-cover rounded md:w-[124px] md:h-[124px] w-[90px] h-[90px]" />
                                  <div className='font-satoshi flex-1'>
                                        <h3 className="font-bold md:text-xl text-base my-1">Checkered Shirt</h3>
                                        <p className="md:text-sm text-xs text-gray-500">Size: Medium</p>
                                        <p className="md:text-sm text-xs text-gray-500">Color: Red</p>
                                        <p className="font-bold md:text-2xl text-xl md:mt-3">$180</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between md:h-[124px] h-[57px]">
                                    <button
                                        className="text-red-500 hover:text-red-700 ml-auto"
                                        aria-label="Delete item">
                                        <AiFillDelete size={24} className='w-5 h-5 md:h-6 md:w-6' />
                                    </button>
                                    <div className="flex font-satoshi font-medium text-black md:w-[126px] w-[105px] h-[32px] md:h-[44px] justify-between items-center border rounded-full text-sm bg-gray-200 px-5 py-3 ">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>

                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-4">
                                    <Image width={124} height={124}
                                        src="/jeans.png"
                                        alt="Skinny Fit Jeans"
                                        className="object-cover rounded md:w-[124px] md:h-[124px] w-[90px] h-[90px]"
                                    />
                                   <div className='font-satoshi flex-1'>
                                        <h3 className="font-bold md:text-xl text-base my-1">Skinny Fit Jeans</h3>
                                        <p className="md:text-sm text-xs text-gray-500">Size: Large</p>
                                        <p className="md:text-sm text-xs text-gray-500">Color: Blue</p>
                                        <p className="font-bold md:text-2xl text-xl md:mt-3">$240</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between md:h-[124px] h-[57px]">
                                    <button
                                        className="text-red-500 hover:text-red-700 ml-auto"
                                        aria-label="Delete item">
                                        <AiFillDelete size={24} className='w-5 h-5 md:h-6 md:w-6' />
                                    </button>
                                    <div className="flex font-satoshi font-medium text-black md:w-[126px] w-[105px] h-[32px] md:h-[44px] justify-between items-center border rounded-full text-sm bg-gray-200 px-5 py-3 ">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Section: Order Summary */}
                        <div className=" md:w-[358px] md:h-[390px] w-4/5 h-4/5 bg-white md:p-6 p-5 rounded-3xl shadow border md:space-y-6 space-y-4 items-center justify-center border-gray-300">
                            <h3 className="md:text-2xl text-xl font-satoshi font-bold mb-4">Order Summary</h3>
                            <div className='md:space-y-6 space-y-4'>
                                <div className="flex justify-between md:text-xl text-base font-medium font-satoshi">
                                    <span>Subtotal</span>
                                    <span className='font-bold'>$565</span>
                                </div>
                                <div className="flex justify-between md:text-xl text-base font-medium font-satoshi">
                                    <span>Discount (-20%)</span>
                                    <span className="text-red-500 font-bold">-$113</span>
                                </div>
                                <div className="flex justify-between md:text-xl text-base font-medium font-satoshi border-b pb-4 mb-4">
                                    <span>Delivery Fee</span>
                                    <span className='font-bold'>$15</span>
                                </div>
                                <div className="flex justify-between md:text-xl text-base font-medium font-satoshi">
                                    <span>Total</span>
                                    <span className='font-bold md:text-2xl text-xl'>$467</span>
                                </div>
                            </div>
                            <div className='md:space-y-6 space-y-4'>
                                <div className="flex space-x-3 items-center mb-4 font-satoshi md:text-base text-sm font-medium">
                                    <input
                                        type="text"
                                        placeholder="Add promo code"
                                        className="border rounded-full px-3 py-2 flex-1 bg-gray-200"
                                    />
                                    <button className="bg-black text-white px-4 py-2 rounded-full">
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className=' md:space-y-6 space-y-4'>
                                <button className="bg-black text-white md:text-base text-sm font-medium w-full py-3 rounded-full flex gap-3 items-center justify-center font-satoshi">
                                    Go to Checkout <i className="  fas fa-arrow-right  "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
