
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import CustomerReviews from "../components/Reviews"

const Categories = async () => {
    // Fetch products from Sanity
    const products = await client.fetch(`*[_type == "products"]`)

    // Get new arrivals and top selling products
    const newArrivals = products.slice(0, 4);
    const topSelling = products.slice(4, 8);

    return (
        <div>
            <div className='w-full overflow-hidden py-80 md:py-2'>

                {/* New Arrivals Cards */}
                <div id='newArrivals' className=' justify-center items-center'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>New Arrivals</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-2 px-2 items-center justify-between md:mx-4 mx-auto'>
                        {newArrivals.map((product: any) => (
                            <div key={product._id} className='p-0.5'>
                                <div className='bg-gray-100 place-items-center'>
                                    <Image
                                        src={urlFor(product.image).width(300).url() || "/placeholder.svg"}
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
                    <div className='flex mt-14 items-center justify-center'>
                        <Link href="/products">
                            <button className='text-center text-[16px] font-satoshi font-medium border border-gray-200 rounded-md text-black w-[218px] h-[52px] bg-gray-300'>
                                View All
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Top Selling */}
                <div id='topSelling' className='mt-10 justify-center items-center'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>Top selling</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-2 px-2 items-center justify-between md:mx-4 mx-auto'>
                        {topSelling.map((product: any) => (
                            <div key={product._id} className='p-0.5'>
                                <div className='bg-gray-100 place-items-center'>
                                    <Image
                                        src={urlFor(product.image).width(300).url() || "/placeholder.svg"}
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
                    <div className='flex mt-14 justify-center'>
                        <Link href="/products">
                            <button className='text-center text-[16px] font-satoshi font-medium border border-gray-200 rounded-md text-black w-[218px] h-[52px] bg-gray-300'>
                                View All
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Browse styles */}
                <div
                    id="brandStyles"
                    className="mt-10 md:rounded-xl rounded-xl bg-gray-200 w-full h-fit mx-auto p-6"
                >
                    <h1 className="text-center md:text-5xl text-3xl font-integral font-bold text-black mt-6">
                        Browse By Dress Styles
                    </h1>
                    <Link href="/products">
                    {/* First Row */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-6">
                        {/* 1st card */}
                        <div className="w-full sm:w-[407px] sm:h-[289px]">
                          
                                <Image src="/casual.png" alt="Casual" width={407} height={289} className="w-full h-auto object-cover rounded-lg" />
                            
                        </div>

                        {/* 2nd card */}
                        <div className="w-full sm:w-[684px] sm:h-[289px]">
                            <Image src="/formal.png" alt="Formal" width={684} height={289} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-5">
                        {/* 3rd card */}
                        <div className="w-full sm:w-[684px] sm:h-[289px]">
                            <Image src="/party.png" alt="Party" width={684} height={289} className="w-full h-auto object-cover rounded-lg" />
                        </div>

                        {/* 4th card */}
                        <div className="w-full sm:w-[407px] sm:h-[289px]">
                            <Image src="/gym.png" alt="Gym" width={407} height={289} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>
                    </Link>
                </div>


                {/* Customers Rating */}
                <CustomerReviews/>



            </div>
        </div>
    )
}

export default Categories;

