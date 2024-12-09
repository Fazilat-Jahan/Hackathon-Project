import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div>
            <section className=' md:relative md:w-[1440px] w-full md:h-[663px] h-[853px] pb-10'>

                <div className='md:absolute inset-0 flex flex-col justify-start md:px-24 px-4 md:py-24 pt-12  z-10'>
                    <h1 className='font-integral md:text-[64px] text-4xl font-bold leading-none'>FIND CLOTHES<br />
                        THAT MATCHES<br />
                        YOUR STYLE</h1>
                    <h2 className='hidden md:block font-satoshi font-medium md:text-[16px] text-sm mt-4'>Browse through our diverse range of meticulously crafted garments, designed<br />to bring out your individuality and cater to your sense of style.</h2>
                    <h2 className='md:hidden block font-satoshi font-medium md:text-[16px] text-sm mt-4 text-start'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h2>
                    <button className='md:w-[210px] w-[358px] h-[52px] md:mt-6 rounded-full bg-black text-center py-3 font-satoshi text-white justify-center items-center text-[16px] mt-4'>Shop Now</button>

{/* stats */}
                    <div className='mt-6 md:hidden flex flex-col items-center justify-center font-satoshi text-black'>
                        <div className='flex space-x-8'>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-bold'>200+</span>
                                <p className='text-xs font-medium'>International Brands</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-bold'>2000+</span>
                                <p className='text-xs font-medium'>High-Quality Products</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center p-2'>
                            <span className='text-2xl font-bold'>30000+</span>
                            <p className='text-xs font-medium'>Happy Customers</p>
                        </div>

                    </div>


                </div>
<div className='justify-center md:w-[1440px] w-full'>
                <Image src={"/Landing Image.png"} alt='Winter Collection' objectFit="cover"
                    className="z-0 hidden md:block" width={1440} height={663} />

                <Image src={"/LI Mob.png"} alt='Winter Collection' objectFit="cover"
                    className="z-0 md:hidden sm:block" width={390} height={448} />
                    </div>
                {/* footer */}
                <div className='bg-black md:h-[122px] md:w-[1440px] w-full h-[46px]  text-white items-center justify-between flex'>
                    Gucci
                    Kelvin
                </div>


            </section>
        </div>
    )
}

export default HeroSection
