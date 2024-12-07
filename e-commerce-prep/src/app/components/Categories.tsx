import React from 'react';
import Image from 'next/image';
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad, FaClock } from 'react-icons/fa';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const Categories = () => {
    return (
        <div>
            <div className='w-[1170px] h-[383] space-y-[60px] ml-[135px]'>

                <div className='flex w-[1170px] h-[103px] space-x-[470px]  items-center justify-between'>

                    <div className='space-y-6'>
                        <div className='flex gap-4'>
                            <div className='bg-[#DB4444] h-10 w-5 rounded-md'></div>
                            <h1 className='font-semibold text-[#DB4444] text-base'>Categories</h1>
                        </div>
                        <div className='flex gap-[87px] items-end justify-end'>
                            <h1 className='font-semibold  text-4xl '>Browse By Category</h1>
                        </div>

                    </div>
                    <div className='flex w-[100px] h-46px] items-end justify-between  gap-2'>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-left  "></i></div>
                        <div className='flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg'><i className="  fas fa-arrow-right  "></i></div>
                    </div>
                </div>

                {/* categories */}
                <div className='w-[1308px] h-[350px] flex  gap-[30px] '>

                    {/* 1st category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaMobileAlt size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>Phones</p>
                        </div>
                    </div>

                    {/* 2nd category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaLaptop size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>Computers</p>
                        </div>
                    </div>

                    {/* 3rd category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaCamera size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>SmartWatch</p>
                        </div>
                    </div>

                    {/* 4th category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaHeadphones size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>Camera</p>
                        </div>
                    </div>

                    {/* 5th category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaGamepad size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>HeadPhone</p>
                        </div>
                    </div>

                    {/* 6th category */}
                    <div className='w-[170px] h-[145px] bg-gray-100 flex flex-col items-center justify-center hover:bg-[#DB4444]'>
                        <div className="items-center justify-center  ">
                            <FaClock size={50} />
                            <p className='font-normal text-center text-black text-sm font-[Poppins] mt-4'>Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* border */}
            <div className="w-[1440px] h-[150px] justify-center  border-t   border-gray-400 "></div>



            {/* selling cards */}
            <div className='w-[1170px] h-[518px] space-y-[60px] ml-[135px]'>

                <div className='flex w-[1170px] h-[108px] space-x-[611px]  items-end justify-between'>

                    <div className='space-y-6'>
                        <div className='flex gap-4'>
                            <div className='bg-[#DB4444] h-10 w-5 rounded-md'></div>
                            <h1 className='font-semibold text-[#DB4444] text-base'>This Month</h1>
                        </div>
                        <div className='flex gap-[87px] items-end justify-center'>
                            <h1 className='font-semibold  text-4xl '>Best Selling Products</h1>
                        </div>
                    </div>

                    <div className='w-[159px] h-[56px] px-12 py-4 bg-[#DB4444] items-center justify-center text-center'>
                        <button className='text-white text-base font-medium font-[Poppins]'>View All</button>
                    </div>
                </div>

                {/* cards   */}
                <div className='w-[1308px] h-[350px] flex justify-between items-start gap-[30px] '>

                    {/* 1 */}
                    <div className='w-[270px] h-[350px] space-y-[30px]'>
                        <div className='bg-gray-100 w-[270px] h-[250px] flex justify-center'>
                            <div className='justify-center items-center'>
                                <Image src={"/sweater.png"} alt='Card1' width={190} height={180} /></div>
                            <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                <HeartIcon className='h-6 w-6 ' />
                                <EyeIcon className='h-6 w-6  ' /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-ag'>The north coat</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$260 <span className=' text-gray-600 px-2 line-through'>$360</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i> <span className='px-2'> (65)</span> </h3>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='w-[270px] h-[350px] space-y-[30px]'>
                        <div className='bg-gray-100 w-[270px] h-[250px] flex justify-center'>
                            <div className='justify-center items-center'>
                                <Image src={"/bag.png"} alt='Card1' width={178} height={129} /></div>
                            <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                <HeartIcon className='h-6 w-6 ' />
                                <EyeIcon className='h-6 w-6  ' /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-ag'>Gucci duffle bag</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$960 <span className=' text-gray-600 px-2 line-through'>$1160</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent'></i> <span className='px-2'> (65)</span> </h3>
                        </div>
                    </div>



                    {/* 3 */}
                    <div className='w-[270px] h-[350px] space-y-[30px]'>
                        <div className='bg-gray-100 w-[270px] h-[250px] flex justify-center'>
                            <div className='justify-center items-center'>
                                <Image src={"/cpu cooler.png"} alt='Card1' width={191} height={95} /></div>
                            <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                <HeartIcon className='h-6 w-6 ' />
                                <EyeIcon className='h-6 w-6  ' /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-ag'>RGB liquid CPU Cooler</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$160 <span className=' text-gray-600 px-2 line-through'>$170</span> </h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent'></i> <span className='px-2'> (65)</span> </h3>
                        </div>
                    </div>



                    {/* 4 */}
                    <div className='w-[270px] h-[350px] space-y-[30px]'>
                        <div className='bg-gray-100 w-[270px] h-[250px] flex justify-center'>
                            <div className='justify-center items-center'>
                                <Image src={"/desk.png"} alt='Card1' width={190} height={180} /></div>
                            <div className='justify-end items-end mt-2 space-y-2 h-8 w-8'>
                                <HeartIcon className='h-6 w-6 ' />
                                <EyeIcon className='h-6 w-6  ' /></div>
                        </div>

                        <div className='w-[201px] h-[84px] justify-start space-y-2'>
                            <h1 className='text-black text-base font-medium font-ag'>Small BookSelf</h1>
                            <h2 className='text-[#DB4444] text-base font-medium font-[Ag-Title]'>$360</h2>
                            <h3 className='text-black text-sm font-semibold flex font-[Ag-Title] gap-1'>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i>
                                <i className='fas fa-star text-yellow-400'></i> <span className='px-2'> (65)</span> </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* landing frame */}
            <div className='w-[1170px] h-[500px] ml-[135px] mt-[100px] mb-12'>
                <Image src={"/Frame 600.png"} alt='main frame' width={1170} height={500} />
            </div>

        </div>
    )
}

export default Categories
