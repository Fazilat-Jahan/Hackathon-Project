import React from 'react';
import Image from 'next/image';

const NewArrivals = () => {
    return (
        <div className='w-[1170px]  mt-[140px]'>
            <div className='flex w-[1170px] h-[103px] space-x-[470px] items-center justify-between'>
                <div className='space-y-6'>
                    <div className='flex gap-4'>
                        <div className='bg-[#DB4444] h-10 w-5 rounded-md'></div>
                        <h1 className='font-semibold text-[#DB4444] text-base'>Featured</h1>
                    </div>
                    <div className='flex gap-[87px] items-end justify-end'>
                        <h1 className='font-semibold text-4xl'>New Arrival</h1>
                    </div>
                </div>
            </div>

            <div className='flex gap-[30px] mt-[60px]'>
                <div className='relative w-[570px] h-[600px] bg-black'>
                    <Image 
                        src="/ps5.png" 
                        alt="PS5" 
                        width={570} 
                        height={600} 
                        className='object-cover w-full h-full'
                    />
                    <div className='absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent'>
                        <h2 className='text-2xl font-semibold mb-4 text-white'>PlayStation 5</h2>
                        <p className='mb-6 text-white'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='text-base underline text-white'>Shop Now</button>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='relative w-[570px] h-[284px] bg-black'>
                        <Image 
                            src="/women.png" 
                            alt="Women's Collections" 
                            width={570} 
                            height={284} 
                            className='object-cover w-full h-full'
                        />
                        <div className='absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent'>
                            <h2 className='text-2xl font-semibold mb-4 text-white'>Women's Collections</h2>
                            <p className='mb-6 text-white'>Featured woman collections that give you another vibe.</p>
                            <button className='text-base underline text-white'>Shop Now</button>
                        </div>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='relative w-[270px] h-[284px] bg-black'>
                            <Image 
                                src="/speakers.png" 
                                alt="Speakers" 
                                width={270} 
                                height={284} 
                                className='object-cover w-full h-full'
                            />
                            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent'>
                                <h2 className='text-xl font-semibold mb-2 text-white'>Speakers</h2>
                                <p className='mb-4 text-white'>Amazon wireless speakers</p>
                                <button className='text-sm underline text-white'>Shop Now</button>
                            </div>
                        </div>
                        <div className='relative w-[270px] h-[284px] bg-black'>
                            <Image 
                                src="/perfume.png" 
                                alt="Perfume" 
                                width={270} 
                                height={284} 
                                className='object-cover w-full h-full'
                            />
                            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent'>
                                <h2 className='text-xl font-semibold mb-2 text-white'>Perfume</h2>
                                <p className='mb-4 text-white'>GUCCI INTENSE OUD EDP</p>
                                <button className='text-sm underline text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;

