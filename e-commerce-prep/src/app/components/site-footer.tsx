import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SiteFooter = () => {
    return (
        <footer className='bg-black text-white mt-20'>
            <div className='w-[1170px] mx-auto py-20'>
                <div className='grid grid-cols-5 gap-[87px]'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Exclusive</h3>
                        <p>Subscribe</p>
                        <p className='text-base'>Get 10% off your first order</p>
                        <div className='relative'>
                            <input 
                                type='email' 
                                placeholder='Enter your email' 
                                className='w-full bg-black border border-white rounded p-3'
                            />
                            <i className='fas fa-paper-plane absolute right-4 top-1/2 transform -translate-y-1/2'></i>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Support</h3>
                        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Account</h3>
                        <ul className='space-y-4'>
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Quick Link</h3>
                        <ul className='space-y-4'>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Download App</h3>
                        <p className='text-xs text-gray-400'>Save $3 with App New User Only</p>
                        <div className='flex gap-2'>
                            <div className='w-[80px] h-[80px]'>
                                <Image src="/qr.png" alt="QR Code" width={80} height={80} />
                            </div>
                            <div className='space-y-2'>
                                <Image src="/googleplay.png" alt="Play Store" width={110} height={40} />
                                <Image src="/appstore.png" alt="App Store" width={110} height={40} />
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <FaFacebookF size={24} />
                            <FaTwitter size={24} />
                            <FaInstagram size={24} />
                            <FaLinkedinIn size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-800'>
                <div className='w-[1170px] mx-auto py-4 text-center text-gray-400'>
                    <p>&copy; Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;

