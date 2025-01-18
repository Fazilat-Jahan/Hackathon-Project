'use client';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon, } from '@heroicons/react/24/outline';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Header from './components/Header'
import Footer from './components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full h-max">

      <Header/>

      {/* Main Content */}
      <main className=" py-[72px] md:py-[76px]">
        <HeroSection/>
        <Categories/>
        <Footer/>
      </main>
      
    </div>
  );
}