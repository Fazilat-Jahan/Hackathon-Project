import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import HeroSection from "./components/HeroSection";
import LPCards from "./components/LPCards";
import Categories from "./components/Categories";

export default function Home() {
  return (

    <div className="bg-white w-[1440px] max-h-max">
      <div>
        <header className="fixed flex w-[1440px] h-[48px] bg-black items-center justify-end">
          <div className="flex w-[859px] h-[24px] gap-[231px] text-white">
            <div className=" font-light font-[Ag-Title] text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className=" font-semibold font-[poppins] px-2 underline">ShopNow</span></div>
            <div className="w-[78px] font-light font-[Ag-Title] text-sm">English</div>
          </div>
        </header>

        <nav className="fixed flex w-[1170px] h-[38px] mx-[135px] my-[88px] gap-[148px] bg-white items-center">
          <div className="flex w-[675px] h-6 gap-[190px] items-center text-black">
            <h1 className="font-bold text-2xl">Exclusive</h1>
            <ul className="flex gap-12 font-medium text-base">
              <li>HOME</li>
              <li>CONTACT</li>
              <li>ABOUT</li>
              <li>SIGN UP</li></ul>
          </div>

          <div className="flex items-center w-[347px] h-[38px] gap-6">

            <div className="flex items-center justify-around gap-3 bg-slate-200 w-[243px] h-[38px] py-[7px] pr-3 pl-5">
              <h1 className="text-xs font-thin">What Are You Looking For? </h1>
              <MagnifyingGlassIcon className="h-6 w-6 m-1" /></div>

            <div className="flex w-20 h-8 gap-4 items-center justify-center">
              <HeartIcon className="w-8 h-8" />
              <ShoppingCartIcon className="w-8 h-8" />
            </div>

          </div>
        </nav>
      </div>

      <HeroSection />
      <LPCards/>
      <Categories/>

    </div>);
}
