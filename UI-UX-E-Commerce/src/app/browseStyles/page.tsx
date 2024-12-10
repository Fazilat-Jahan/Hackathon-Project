'use client'
import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider"; // Radix Slider Component
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
const ProductPage = () => {
    // State for price range
    const [priceRange, setPriceRange] = useState([0, 500]);

    // Handler for slider change
    const handleSliderChange = (value: number[]) => {
        setPriceRange(value);
    };

    return (

        <div>
            <Header/>
            <div className=" py-[72px] md:py-[150px]">
                
            <nav className="text-sm text-gray-500 mb-2 px-6">
                <a href="/" className="hover:underline">Home</a> &gt;{" "}
                <span className="text-gray-700">Casual</span>
                
            </nav>
            
           

            

            <div className="flex flex-col md:flex-row p-6 gap-8">

                {/* Left Section: Sidebar */}
                <div className="w-full md:w-[295px] bg-gray-50 px-6 rounded-lg space-y-6">
                    {/* Filter Header */}
                    <div className="flex justify-between items-center m-2">
                        <h2 className="font-bold text-xl font-satoshi">Filters</h2>
                        <i className="fas fa-sliders-h text-gray-500 text-lg"></i>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-bold font-satoshi text-xl text-black my-5">Categories</h3>
                        <ul className="space-y-1 font-satoshi text-base font-medium"> 
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">T-Shirts</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Jeans</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Shirts</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Shorts</a>&gt;{" "}</li>
                        </ul>

                        <div className="border-b border-gray-300 w-[247px] mt-5"></div>
                    </div>


                    {/* Price Range */}
                    <div>
                        <h3 className="font-bold font-satoshi text-xl text-black my-5">Price</h3>
                        <Slider.Root
                            className="relative flex items-center select-none touch-none w-full h-5"
                            defaultValue={[0, 500]}
                            max={500}
                            step={1}
                            value={priceRange}
                            onValueChange={handleSliderChange}
                        >
                            <Slider.Track className="bg-gray-300 relative flex-grow rounded-full h-[6px]">
                                <Slider.Range className="absolute bg-black rounded-full h-full" />
                            </Slider.Track>
                            <Slider.Thumb className="block w-5 h-5 bg-black rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200" />
                            <Slider.Thumb className="block w-5 h-5 bg-black rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200" />
                        </Slider.Root>
                        <div className="flex justify-between mt-2 text-sm text-black">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>

                        <div className="border-b border-gray-300 w-[247px] mt-5"></div>
                    </div>

                    {/* Colors */}
                    <div>
                        <h3 className="font-bold font-satoshi text-xl text-black my-5">Colors </h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="w-[37px] h-[37px] bg-green-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-red-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-yellow-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-orange-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-blue-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-blue-900 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-purple-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-pink-500 rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-white rounded-full"></div>
                            <div className="w-[37px] h-[37px] bg-black rounded-full"></div>
                        </div>

                        <div className="border-b border-gray-300 w-[247px] mt-5"></div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <h3 className="font-bold font-satoshi text-xl text-black my-5">Size</h3>
                        <div className="text-gray-700  font-medium font-satoshi text-sm space-x-2 space-y-2">
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl   hover:bg-black hover:text-white">XX-small</button>
                            <button className="  px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">X-small</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">small</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">Medium</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">Large</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">X-Large</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">XX-Large</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">3X-Large</button>
                            <button className="px-5 py-[10px] bg-gray-200 border rounded-xl hover:bg-black hover:text-white">4X-Large</button>
                        </div>

                        <div className="border-b border-gray-300 w-[247px] mt-5"></div>
                    </div>

                    {/* Dress Style */}
                    <div>
                        <h3 className="font-bold font-satoshi text-xl text-black my-5">Dress Style </h3>
                        <ul className="space-y-1 font-satoshi text-base font-medium">
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Casual</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Formal</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Party</a>&gt;{" "}</li>
                            <li className="flex  justify-between"><a href="#" className="text-gray-600 hover:text-black">Gym</a>&gt;{" "}</li>
                        </ul>

                        <div className="border-b border-gray-300 w-[247px] mt-5"></div>
                    </div>

                    {/* Apply Filter Button */}
                    <button className="w-full md:w-[247px] md:h-12 py-2 bg-black text-white font-medium text-sm font-satoshi rounded-full">
                        Apply Filter
                    </button>
                </div>

                {/* Right Section: Cards */}
                
               
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* Heading */}

                <div className="col-span-full mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold font-satoshi">Casual</h1>
                        
                    </div>
                    <div className="flex items-center gap-2">
                    <p className="text-gray-500">Showing 1-10 of 100 Products</p>
                        <span className="text-gray-600">Sort by:</span>
                        <button className="border rounded-lg px-3 py-2 bg-white ">
                            Most Popular<i className="fa fa-caret-down px-2"></i>
                        </button>
                    </div>
                </div>
            </div>
                    
                    {/* Card 1 */}
                    <div className="bg-white p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/casual1.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Gradient Graphic T-shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">3.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$145</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/casual2.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Polo with Tipping Details</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">4.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$180 </h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/casual3.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Black Striped T-shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <span className="ml-2 text-gray-600">5.0/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$120 <span className=' text-gray-600 px-2 line-through'>$150</span> </h3>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/fjeans.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Skinny Fit Jeans</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">3.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$240 <span className=' text-gray-600 px-2 line-through'>$260</span> </h3>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/shirt.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Scheckered Shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">4.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$180</h3>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/oshirt.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Sleeve Striped T-Shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">4.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$130 <span className=' text-gray-600 px-2 line-through'>$160</span> </h3>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/gshirt.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Vertical Striped Shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <span className="ml-2 text-gray-600">5.0/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$212 <span className=' text-gray-600 px-2 line-through'>$232</span> </h3>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/orangeshirt.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Courage Graphic T-shirt</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <span className="ml-2 text-gray-600">4.5/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$145 </h3>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className=" p-4 shadow rounded-lg">
                        <div className="bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px] mx-auto rounded-lg">
                            <Image src={"/short.png"} alt="Card1" width={285} height={298} />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-black md:text-xl text-[16px] font-bold font-satoshi">Loose Fit Bermuda Shorts</h1>
                            <h2 className="text-black md:text-sm text-[12px] font-medium flex items-center gap-1 mt-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent"></i><span className="ml-2 text-gray-600">3.0/5</span></h2>
                            <h3 className='text-black text-2xl font-bold font-satoshi'>$80 </h3>
                        </div>
                    </div>
                    
{/* bar */}
                    <div className="col-span-full mt-8">
                <div className="flex justify-between items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black rounded-lg border ">
                    <i className="  fas fa-arrow-left  "></i>
                        Previous
                    </button>

                    <div className="flex items-center gap-1">
                        <button className="md:px-4 px-2 py-2 hover:bg-gray-100 rounded">1</button>
                        <button className="md:px-4 px-2 py-2 hover:bg-gray-100 rounded">2</button>
                        <button className="px-4 py-2 hover:bg-gray-100 rounded hidden md:block">3</button>
                        <span className="px-2">...</span>
                        <button className="px-4 py-2 hover:bg-gray-100 rounded hidden md:block">8</button>
                        <button className="md:px-4 px-2 py-2 hover:bg-gray-100 rounded">9</button>
                        <button className="md:px-4 px-2 py-2 hover:bg-gray-100 rounded">10</button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black rounded-lg border ">
                   Next <i className="  fas fa-arrow-right  "></i> 
                    </button>
                </div>
            </div>






                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductPage;
