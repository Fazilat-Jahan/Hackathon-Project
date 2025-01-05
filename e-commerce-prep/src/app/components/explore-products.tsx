import React from 'react';
import Image from 'next/image';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const ExploreProducts = () => {
    return (
        <div>
            <div className='w-[1308px]'>
                <div className='flex w-[1170px] h-[103px] space-x-[470px] items-center justify-start'>
                    <div className='space-y-6'>
                        <div className='flex gap-4'>
                            <div className='bg-[#DB4444] h-10 w-5 rounded-md'></div>
                            <h1 className='font-semibold text-[#DB4444] text-base'>Our Products</h1>
                        </div>
                        <div className='flex gap-[87px] items-end justify-center'>
                            <h1 className='font-semibold text-4xl'>Explore Our Products</h1>
                        </div>
                    </div>

                    <div className='flex w-[100px] h-46px] items-center justify-between gap-2'>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'>
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-[30px] mt-10'>
                    {[
                        {
                            image: "/dog-food.png",
                            title: "Breed Dry Dog Food",
                            price: "100",
                            rating: 5,
                            reviews: "35"
                        },
                        {
                            image: "/camera.png",
                            title: "CANON EOS DSLR Camera",
                            price: "360",
                            rating: 4,
                            reviews: "95"
                        },
                        {
                            image: "/laptop.png",
                            title: "ASUS FHD Gaming Laptop",
                            price: "700",
                            rating: 5,
                            reviews: "325"
                        },
                        {
                            image: "/skincare.png",
                            title: "Curology Product Set",
                            price: "500",
                            rating: 4,
                            reviews: "145"
                        },
                        {
                            new: true,
                            image: "/car.png",
                            title: "Kids Electric Car",
                            price: "960",
                            rating: 5,
                            reviews: "65"
                        },
                        {
                            image: "/shoes.png",
                            title: "Jr. Zoom Soccer Cleats",
                            price: "1160",
                            rating: 5,
                            reviews: "35"
                        },
                        {
                            new: true,
                            image: "/controller.png",
                            title: "GP11 Shooter USB Gamepad",
                            price: "660",
                            rating: 4,
                            reviews: "55"
                        },
                        {
                            image: "/jacket.png",
                            title: "Quilted Satin Jacket",
                            price: "660",
                            rating: 4,
                            reviews: "55"
                        }
                    ].map((item, index) => (
                        <div key={index} className='w-[270px] space-y-4'>
                            <div className='bg-gray-100 w-[270px] h-[250px] relative group'>
                                <div className='justify-between flex'>
                                    {item.new && (
                                        <h1 className='bg-[#00FF66] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>NEW</h1>
                                    )}
                                    <div className='absolute right-2 top-2 space-y-2'>
                                        <HeartIcon className='h-6 w-6' />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center h-full'>
                                    <Image src={item.image} alt='Product' width={210} height={190} />
                                </div>
                                <div className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                    Add to Cart
                                </div>
                            </div>

                            <div className='w-[201px] h-[84px] justify-start space-y-2'>
                                <h1 className='text-black text-base font-medium font-[Ag-Title]'>{item.title}</h1>
                                <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>${item.price}</h2>
                                <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`fas fa-star ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                    ))}
                                    <span className='px-2'>({item.reviews})</span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-16">
                <div className='w-[234px] h-[56px] px-12 py-4 bg-[#DB4444] items-center justify-center text-center'>
                    <button className='text-white text-base font-medium font-[Ag-Title]'>View All Products</button>
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;

