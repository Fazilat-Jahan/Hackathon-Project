import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
    return (
        <div>
            <div className='md:w-[1440px] w-full h-auto my-20 py-20 m-auto'>

                {/* New Arrivals Cards */}
                <div id='newArrivals' className='mt-10 justify-center items-center'>
                    <h1 className=' text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>New Arrivals</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-10 px-2 items-center justify-between md:mx-4 mx-auto '>
                        {/* card1 */}
                        <div className='p-0.5'>
                            <div className='bg-gray-100 place-items-center'>
                                <Image src={"/tshirt.png"} alt='Card1' width={295} height={298} className='md:w-[295px] md:h-[298px] w-[198px] h-[200px] items-center justify-center'/>
                            </div>

                            <div className='justify-start mt-4'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>T-SHIRT WITH TAPE DETAILS</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 4.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$120 </h3>
                            </div>
                        </div>

                        {/* card 2 */}

                        <div className='p-0.5'>
                            <div className='bg-gray-100 place-items-center '>
                                <Image src={"/jeans.png"} alt='Card1' width={295} height={298} className='md:w-[295px] md:h-[298px] w-[198px] h-[200px] items-center justify-center'/>
                            </div>

                            <div className='justify-start mt-4'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>SKINNY FIT JEANS</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 3.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$240<span className=' text-gray-600 px-2 line-through'>$260</span> </h3>
                            </div>
                        </div>

                        {/* card 3 */}

                        <div className='p-0.5' >
                            <div className='bg-gray-100 place-items-center'>
                                <Image src={"/tshirt.png"} alt='Card1' width={295} height={298} className='md:w-[295px] md:h-[298px] w-[198px] h-[200px] items-center justify-center'/>
                            </div>

                            <div className=' justify-start mt-4'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>SLEEVE STRIPED T-SHIRT</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 4.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$180  </h3>
                            </div>
                        </div>

                        {/* card 4 */}

                        <div className='p-0.5'>
                            <div className='bg-gray-100 '>
                                <Image src={"/oshirt.png"} alt='Card1' width={295} height={298} className='md:w-[295px] md:h-[298px] w-[198px] h-[200px] items-center justify-center'/>
                            </div>

                            <div className='justify-start mt-4'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>SLEEVE STRIPED T-SHIRT</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 4.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$130 <span className=' text-gray-600 px-2 line-through'>$160</span> </h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-8 items-center justify-center'>
                        <button className='text-center text-[16px] font-satoshi font-medium border border-gray-200 rounded-full text-black w-[218px] h-[52px]'>
                            View All
                        </button>
                    </div>

                </div>

                {/* Top Selling */}
                <div id='topSelling' className='mt-10 justify-center items-center'>
                    <h1 className=' text-center md:text-5xl text-[32px] font-integral font-bold text-black mb-10'>Top selling</h1>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 md:space-x-4 gap-10 px-2 items-center justify-between md:mx-4 mx-auto '>
                        {/* card1 */}
                        <div>
                            <div className='bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px]'>
                                <Image src={"/gshirt.png"} alt='Card1' width={285} height={298} />
                            </div>

                            <div className='w-[225px] h-[227px] justify-start space-y-2'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>VERTICAL STRIPED SHIRT</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 5.0/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$212 <span className=' text-gray-600 px-2 line-through'>$232</span> </h3>
                            </div>
                        </div>

                        {/* card 2 */}

                        <div>
                            <div className='bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px]'>
                                <Image src={"/orangeshirt.png"} alt='Card1' width={285} height={298} />
                            </div>

                            <div className='w-[225px] h-[227px] justify-start space-y-2'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>COURAGE GRAPHIC T-SHIRT</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 3.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$145 </h3>
                            </div>
                        </div>

                        {/* card 3 */}

                        <div>
                            <div className='bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px]'>
                                <Image src={"/short.png"} alt='Card1' width={285} height={298} />
                            </div>

                            <div className='w-[225px] h-[227px] justify-start space-y-2'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>LOOSE FIT BERMUDA SHORTS</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 4.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$80  </h3>
                            </div>
                        </div>

                        {/* card 4 */}

                        <div>
                            <div className='bg-gray-100 md:w-[295px] md:h-[298px] w-[198px] h-[200px]'>
                                <Image src={"/fjeans.png"} alt='Card1' width={285} height={298} />
                            </div>

                            <div className='w-[225px] h-[227px] justify-start space-y-2'>
                                <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>FADED SKINNY JEANS</h1>

                                <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star text-yellow-400'></i>
                                    <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> 4.5/5 </span> </h2>
                                <h3 className='text-black text-base font-medium font-satoshi'>$210 </h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-center items-center justify-center text-[16px] font-satoshi font-medium text-black w-[218px] h-[52px]'>
                            View All
                        </button>
                    </div>

                </div>

                {/* browse styles */}
                <div id='brandStyles' className='mt-10 md:rounded-xl rounded-xl justify-center items-center bg-gray-200 md:w-[1239px] w-full md:h-[866px] h-[1100px] mx-auto'>
                    <h1 className='text-center md:text-5xl text-[32px] font-integral font-bold text-black my-20'>Browse By Dress styles</h1>

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
                        <Image src={"/c1.png"} alt='rating' width={400} height={240} className='hidden md:block' />
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Categories
