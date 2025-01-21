import HeroSection from './components/HeroSection';
import Categories from './components/Categories';

export default function Home() {


  return (
    <div className="left-0 right-0">

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