// import { client } from '@/sanity/lib/client'
// import ProductCard from '@/app/components/ProductCard'
// import SearchBar from '@/app/components/SearchBar'

// type Product = {
//   _id: string
//   name: string
//   price: number
//   discountPercent: number
//   image: {
//     asset: {
//       url: string
//     }
//   }
//   category: string
// }

// export default async function Home() {
//   const products: Product[] = await client.fetch(`*[_type == "products"][0...8]`)

//   return (
//     <main>
//       <h1 className="text-3xl font-bold mb-4">Welcome to our store</h1>
//       <SearchBar />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </main>
//   )
// }



'use client';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon, } from '@heroicons/react/24/outline';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
// import Header from './components/Header'
// import Footer from './components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full h-max">

      {/* <Header/> */}

      {/* Main Content */}
      <main>
        <HeroSection/>
        <Categories/>
        {/* <Footer/> */}
      </main>
      
    </div>
  );
}