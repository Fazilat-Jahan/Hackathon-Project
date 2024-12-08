'use client';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon, } from '@heroicons/react/24/outline';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Footer from './components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full md:w-[1440px] h-max">
      {/* Header */}
      <header className="fixed top-0 left-0 flex md:w-[1440px] w-full h-[34px] md:h-[38px] bg-black items-center z-50">
        <div className="flex w-full md:w-[859px] mx-auto text-white items-center">
          <div className="flex font-light font-satoshi text-xs md:text-sm w-full text-center justify-center">
            Sign up and get 20% off your first order.
            <span className="font-semibold px-2 underline">Sign Up Now</span>
          </div>
          <div className="hidden md:block text-sm font-light font-satoshi">X</div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="fixed top-[34px] md:top-[38px] left-0 w-full bg-white shadow-md z-40">
        <div className="flex items-center justify-between px-4 py-2 w-full md:w-[1240px] mx-auto">

          <div className="md:hidden">
            <Bars3Icon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>


          <h1 className="font-bold text-[25.2px] md:text-[32px] font-integral">
            SHOP.CO
          </h1>


          <ul className="hidden md:flex gap-6 font-medium text-base font-satoshi">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrival</li>
            <li>Brands</li>
          </ul>


          <div className="hidden md:flex items-center gap-3 bg-slate-200 w-[577px] h-[48px] py-[7px] pr-3 pl-5 text-gray-500 rounded-full">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <h1 className="text-xs font-thin font-satoshi">Search For Products</h1>
          </div>


          <div className="flex items-center gap-3">
            <MagnifyingGlassIcon className="h-6 w-6 md:hidden" />
            <ShoppingCartIcon className="h-6 w-6" />
            <UserCircleIcon className="h-6 w-6" />
          </div>
        </div>


        {menuOpen && (
          <div className="bg-white shadow-md p-4 md:hidden">
            <ul className="flex flex-col gap-4 font-medium text-base font-satoshi">
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrival</li>
              <li>Brands</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className=" py-[72px] md:py-[76px]">
        <HeroSection/>
        <Categories/>
        <Footer/>
      </main>
      

    </div>
  );
}


// my code which i write for desktop 
{/* <nav className="fixed flex w-[1240px] h-[41px] mx-[135px] my-[88px] gap-[40px] bg-white items-center justify-center">
            <h1 className="font-bold text-[32px] font-integral">SHOP.CO</h1>
            <ul className="flex gap-6 font-medium text-base font-satoshi">
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrival</li>
              <li>Brands</li></ul>
         
            <div className="flex items-center justify-start gap-3 bg-slate-200 w-[577px] h-[48px] py-[7px] pr-3 pl-5 text-gray-500 rounded-full ">
            <MagnifyingGlassIcon className="h-6 w-6 m-1" />
              <h1 className="text-xs font-thin font-satoshi">Search For Products </h1>
              </div>

            <div className="flex w-[62px] h-6 gap-3.5 items-center justify-center">
              <UserCircleIcon className="w-6 h-6" />
              <ShoppingCartIcon className="w-6 h-6" />
            </div>
        </nav> */}