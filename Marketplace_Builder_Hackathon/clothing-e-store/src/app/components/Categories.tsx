
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Categories = async () => {
    // Fetch products from Sanity
    const products = await client.fetch(`*[_type == "products"]`)
    
    // Get new arrivals and top selling products
    const newArrivals = products.slice(0, 4);
    const topSelling = products.slice(4, 8);

    return (
        <div>
            <div className='w-full overflow-hidden'>

                {/* New Arrivals Cards */}
                <div id='newArrivals' className=' justify-center items-center'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>New Arrivals</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-2 px-2 items-center justify-between md:mx-4 mx-auto'>
                        {newArrivals.map((product:any) => (
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
                        {topSelling.map((product:any) => (
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

                  {/* browse styles */}
                  <div id='brandStyles' className='mt-10 md:rounded-xl rounded-xl justify-center items-center bg-gray-200  w-full h-fit mx-auto'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black mt-18'>Browse By Dress styles</h1>

                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center place-items-center'>
                        {/* 1st card */}
                        <div className='md:w-[407px] md:h-[289px] w-[310px] h-[190px]  '>
                            <Link href="/browseStyles">
                            <Image src={"/casual.png"} alt='Casual' width={407} height={289} /></Link>
                        </div>

                        {/* 2nd card */}
                        <div className='md:w-[684px] md:h-[289px] w-[310px] h-[190px] md:mr-12 '>
                            <Image src={"/formal.png"} alt='Card1' width={684} height={289} />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center place-items-center'>

                        {/* 3rd card */}
                        <div className='md:w-[684px] md:h-[289px] w-[310px] h-[190px]'>
                            <Image src={"/party.png"} alt='Card1' width={684} height={289} />
                        </div>

                        {/* 4th card */}
                        <div className='md:w-[407px] md:h-[289px] w-[310px] h-[190px] '>
                            <Image src={"/gym.png"} alt='Card1' width={407} height={289} />
                        </div>

                    </div>
                </div>

                {/* Customers Rating */}

                <div className='mt-10 justify-center items-center'>

                    <div className='flex  items-center justify-around md:mx-auto'>
                        <h1 className=' text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>Our Happy Customers</h1>
                        <div className='flex  items-center justify-between  gap-2'>
                            <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-left  "></i></div>
                            <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-right  "></i></div>
                        </div>
                    </div>
                    <div className='md:flex md:justify-between justify-center items-center mx-auto'>
                        <Image src={"/c1.png"} alt='rating' width={400} height={240} />
                        <Image src={"/c2.png"} alt='rating' width={400} height={240} className='hidden md:block' />
                        <Image src={"/c3.png"} alt='rating' width={400} height={240} className='hidden md:block' />
                        {/* <Image src={"/c1.png"} alt='rating' width={400} height={240} className='hidden md:block' /> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Categories;

