import React from 'react';
import Image from 'next/image';
const HeroSection = () => {
    return (
        <div>
        <div className="w-screen h-[150px]  border-b  border-gray-400 "></div>
        
    
            <div className=' flex w-[1300px] '>
                <div className='mt-[30px] ml-[135px] mb-[182px] ' >
                    <ul className='w-[217px] h-[344px] space-y-4 text-base font-normal'>
                        <li>Woman's Fashion</li>
                        <li>Men's fashion</li>
                        <li>Electronics</li>
                        <li>Home & LifeStyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby's & Toys</li>
                        <li>Grocerys & Pets</li>
                        <li>Health & Beauty</li>
                    </ul>
                </div>
                <div className="h-[370px] flex border-r border-gray-400"></div>
                 <div className='ml-[50px] mb-[182px] mt-[30px]'>
                    <Image src={"/Frame 560.png"} alt='Landing Image' width={892} height={344} className='w-[1200px] h-[344px]' /></div>
            </div> 
        </div>
    )
}

export default HeroSection
