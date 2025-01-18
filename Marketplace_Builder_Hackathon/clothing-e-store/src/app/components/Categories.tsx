import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const Categories = async () => {
    // Fetch products from Sanity
    const products = await client.fetch(`*[_type == "product"]{
        _id,
        name,
        price,
        discountPercent,
        image
    }`);
    
    // Get new arrivals and top selling products
    const newArrivals = products.slice(0, 4);
    const topSelling = products.slice(4, 8);

    return (
        <div>
            <div className='md:w-[1440px] w-screen my-20 py-20'>

                {/* New Arrivals Cards */}
                <div id='newArrivals' className='mt-14 justify-center items-center'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>New Arrivals</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-2 px-2 items-center justify-between md:mx-4 mx-auto'>
                        {newArrivals.map((product:any) => (
                            <div key={product._id} className='p-0.5'>
                                <div className='bg-gray-100 place-items-center'>
                                    <Image 
                                        src={urlFor(product.image).url() || "/placeholder.svg"}
                                        alt={product.name} 
                                        width={295} 
                                        height={298} 
                                        className='md:w-[295px] md:h-[298px] w-[198px] h-[200px] items-center justify-center'
                                    />
                                </div>

                                <div className='justify-start mt-4'>
                                    <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>{product.name}</h1>

                                    <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i>
                                        <span className='px-2'> 4.5/5 </span>
                                    </h2>
                                    <h3 className='text-black text-base font-medium font-satoshi'>
                                        ${product.price}
                                        {product.discountPercent > 0 && (
                                            <span className='text-gray-600 px-2 line-through'>
                                                ${(product.price / (1 - product.discountPercent / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex mt-8 items-center justify-center'>
                        <button className='text-center text-[16px] font-satoshi font-medium border border-gray-200 rounded-full text-black w-[218px] h-[52px]'>
                            View All
                        </button>
                    </div>
                </div>

                {/* Top Selling */}
                <div id='topSelling' className='mt-10 justify-center items-center'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>Top selling</h1>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-2 px-2 items-center justify-between md:mx-4 mx-auto'>
                        {topSelling.map((product:any) => (
                            <div key={product._id} className='p-0.5'>
                                <div className='bg-gray-100 place-items-center'>
                                    <Image 
                                        src={urlFor(product.image).url() || "/placeholder.svg"}
                                        alt={product.name} 
                                        width={285} 
                                        height={298} 
                                        className='md:w-[295px] md:h-[298px] w-[198px] h-[200px]'
                                    />
                                </div>

                                <div className='justify-start mt-4'>
                                    <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>{product.name}</h1>

                                    <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i>
                                        <span className='px-2'> 4.5/5 </span>
                                    </h2>
                                    <h3 className='text-black text-base font-medium font-satoshi'>
                                        ${product.price}
                                        {product.discountPercent > 0 && (
                                            <span className='text-gray-600 px-2 line-through'>
                                                ${(product.price / (1 - product.discountPercent / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-center items-center justify-center text-[16px] font-satoshi font-medium border border-gray-200 rounded-full text-black w-[218px] h-[52px]'>
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;

