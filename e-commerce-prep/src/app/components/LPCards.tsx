import React from 'react';
import Image from 'next/image';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
const LPCards = () => {
    return (
        <div>
            <div className='w-[1308px] h-[493] space-y-10 ml-[135px]'>

                <div className='flex w-[1170px] h-[103px] space-x-[470px]  items-center justify-start'>

                    <div className='space-y-6'>
                        <div className='flex gap-4'>
                            <div className='bg-[#DB4444] h-10 w-5 rounded-md'></div>
                            <h1 className='font-semibold text-[#DB4444] text-base'>Today's</h1>
                        </div>
                        <div className='flex gap-[87px] items-end justify-center'>
                            <h1 className='font-semibold  text-4xl '>Flash Sales</h1>

                            <Image src={"/time.png"} alt='clock' width={302} height={50} />
                        </div>
                    </div>

                    <div className='flex w-[100px] h-46px] items-center justify-between  gap-2'>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-left  "></i></div>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-right  "></i></div>
                    </div>
                </div>

                {/* cards   1*/}
                <div className='w-[1308px] h-[350px] flex justify-end items-end gap-[30px] '>
                    <div className='w-[270px] h-[350px] space-y-4'>
                        <div className='bg-gray-100 w-[270px] h-[250px]'>
                            <div className='justify-between flex'>
                                <h1 className='bg-[#DB4444] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>-40%</h1>
                                <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                    <HeartIcon className='h-6 w-6 ' />
                                    <EyeIcon className='h-6 w-6  ' /></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={"/Frame 611.png"} alt='Card1' width={210} height={190} /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-[Ag-Title]'>HAVIT HV-G92 Gamepad</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$120 <span className=' text-gray-600 px-2 line-through'>$160</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i> <span className='px-2'> (88)</span> </h3>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className='w-[270px] h-[350px] space-y-4'>
                        <div className='bg-gray-100 w-[270px] h-[250px]'>
                            <div className='justify-between flex'>
                                <h1 className='bg-[#DB4444] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>-35%</h1>
                                <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                    <HeartIcon className='h-6 w-6 ' />
                                    <EyeIcon className='h-6 w-6  ' /></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={"/Frame 612.png"} alt='Card1' width={210} height={190} /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-[Ag-Title]'>AK-900 Wired Keyboard</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$960 <span className=' text-gray-600 px-2 line-through'>$1160</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-gray-300'></i> <span className='px-2'> (75)</span> </h3>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='w-[270px] h-[350px] space-y-4'>
                        <div className='bg-gray-100 w-[270px] h-[250px]'>
                            <div className='justify-between flex'>
                                <h1 className='bg-[#DB4444] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>-30%</h1>
                                <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                    <HeartIcon className='h-6 w-6 ' />
                                    <EyeIcon className='h-6 w-6  ' /></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={"/Frame 613.png"} alt='Card1' width={210} height={190} /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-[Ag-Title]'>IPS LCD Gaming Monitor</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$370 <span className=' text-gray-600 px-2 line-through'>$400</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i> <span className='px-2'> (99)</span> </h3>
                        </div>
                    </div>

                    {/* card4 */}
                    <div className='w-[270px] h-[350px] space-y-4'>
                        <div className='bg-gray-100 w-[270px] h-[250px]'>
                            <div className='justify-between flex'>
                                <h1 className='bg-[#DB4444] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>-25%</h1>
                                <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                    <HeartIcon className='h-6 w-6 ' />
                                    <EyeIcon className='h-6 w-6  ' /></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={"/Frame 614.png"} alt='Card1' width={210} height={190} /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-[Ag-Title]'>S-Series Comfort Chair </h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$375 <span className=' text-gray-600 px-2 line-through'>$400</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i> <span className='px-2'> (99)</span> </h3>
                        </div>
                    </div>

                    {/* card5 */}
                    <div className='w-[135px] h-[350px] justify-end space-y-4 '>
                        <div className='bg-gray-100 w-[135px] h-[250px] last:mr-0'>
                            <div className='justify-between flex'>
                                <h1 className='bg-[#DB4444] rounded-md font-semibold text-white text-center text-base w-[56px] h-[26px] mx-3 mt-1'>-25%</h1>

                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={"/Frame 614 (1).png"} alt='Card1' width={75} height={140} /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-[Ag-Title]'>S-Series Comfort Chair </h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$375 <span className=' text-gray-600 px-2 line-through'>$400</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star  bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i></h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" place-items-center my-16">
    <div className='w-[234px] h-[56px] px-12 py-4 bg-[#DB4444] items-center justify-center text-center'>
        <button className='text-white text-base font-medium font-[Ag-Title]'>View All Products</button>
    </div>
</div>

        </div>
    )
}

export default LPCards
