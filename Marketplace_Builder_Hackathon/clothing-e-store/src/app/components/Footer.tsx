import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='w-full md:w-full md:h-[589px] mx-auto flex flex-col items-center px-4'>

                <Image src={"/footerframe.png"} alt='Footer' width={1240} height={180} className='m-5 hidden md:block' />
                <Image src={"/mfooter.png"} alt='Footer' width={358} height={293} className='m-5 md:hidden block' />


                <div className='flex flex-wrap md:flex-nowrap space-x-0 md:space-x-[120px] text-black h-auto md:h-[289px] w-full md:w-[1440px] justify-start'>

                    <div className='w-full md:w-[248px] mb-8 md:mb-0 text-left md:pl-8'>
                        <h1 className='font-bold text-[28.85px] md:text-[33.45px] font-integral'>SHOP.CO</h1>
                        <h2 className='pt-[15px] font-light text-[14px] font-satoshi'>
                            We have clothes that suit your style and which you are proud to wear. From women to men.
                        </h2>

                        <div className='flex justify-start space-x-4 pt-4 text-gray-600'>
                            <FaTwitter size={24} />
                            <FaGithub size={24} />
                            <FaInstagram size={24} />
                            <FaFacebook size={24} />
                        </div>
                    </div>


                    <div className='w-1/2 md:w-[104px] mb-8 md:mb-0 text-left'>
                        <h1 className='font-bold text-[18px] font-satoshi'>Company</h1>
                        <ul className='space-y-[15px] font-light text-[16px] font-satoshi leading-[19px]'>
                            <li>About</li>
                            <li>Feature</li>
                            <li>Work</li>
                            <li>Career</li>
                        </ul>
                    </div>


                    <div className='w-1/2 md:w-[136px] mb-8 md:mb-0 text-left'>
                        <h1 className='font-bold text-[18px] font-satoshi'>Help</h1>
                        <ul className='space-y-[15px] font-light text-[16px] font-satoshi leading-[19px]'>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>


                    <div className='w-1/2 md:w-[149px] mb-8 md:mb-0 text-left'>
                        <h1 className='font-bold text-[18px] font-satoshi'>FAQ</h1>
                        <ul className='space-y-[15px] font-light text-[16px] font-satoshi leading-[19px]'>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>


                    <div className='w-1/2 md:w-[149px] mb-8 md:mb-0 text-left'>
                        <h1 className='font-bold text-[18px] font-satoshi'>Resources</h1>
                        <ul className='space-y-[15px] font-light text-[16px] font-satoshi leading-[19px]'>
                            <li>Free eBook</li>
                            <li>Development Tutorials</li>
                            <li>How to Blog</li>
                            <li>YouTube Playlist</li>
                        </ul>
                    </div>
                </div>


                <div className="w-full border border-gray-300 my-4"></div>


                <div className='flex flex-wrap md:flex-nowrap items-center justify-between w-full md:w-[1240px]'>
                    <div className='font-medium text-[16px] font-satoshi leading-5 text-gray-400 text-left'>
                        Shop.co © 2000-2023, All Rights Reserved
                    </div>
                    <div className='w-full md:w-[281px] h-[30px] flex justify-center md:justify-end mt-4 md:mt-0'>
                        <Image
                            src={"/card footer.png"}
                            alt='Payment Cards'
                            width={281}
                            height={30}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
