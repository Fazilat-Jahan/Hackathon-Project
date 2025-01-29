
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const HeroSection = async () => {
  // Fetch landing images from Sanity
  const landingImages = await client.fetch(`*[_type == "landingImage"]{
    _id,
    title,
    image,
    isDesktop
  }`);

  // Separate desktop and mobile images
  const desktopImage = landingImages.find((img: any) => img.isDesktop);
  const mobileImage = landingImages.find((img: any) => !img.isDesktop);

  const brandlogos = [
    { src: '/versac.png', alt: 'Versace' },
    { src: '/zara.png', alt: 'Zara' },
    { src: '/gucci.png', alt: 'Gucci' },
    { src: '/prada.png', alt: 'Prada' },
    { src: '/calvin.png', alt: 'Calvin Klein' },
  ];

  return (
    <div className='py-6 overflow-hidden '>
      <section className='md:relative md:w-full w-full md:h-[663px] h-[853px] '>
        <div className='md:absolute inset-0 flex flex-col justify-start md:px-24 px-4 md:py-14 pt-12 z-10'>
          <h1 className='font-integral md:text-5xl text-4xl font-bold leading-none'>
            FIND CLOTHES<br />
            THAT MATCHES<br />
            YOUR STYLE
          </h1>
          <h2 className='hidden md:block font-satoshi font-medium md:text-[14px] text-sm mt-4'>
            Browse through our diverse range of meticulously crafted garments, designed<br />
            to bring out your individuality and cater to your sense of style.
          </h2>
          <h2 className='md:hidden block font-satoshi font-medium md:text-[16px] text-sm mt-4  text-justify'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </h2>

          <Link href={"/products"}>
            <div className="flex justify-center md:justify-start w-full">
              <button className="md:mt-6 md:px-10 rounded-full bg-black text-center py-2 font-satoshi text-white flex justify-center items-center text-[16px] mt-4 w-full md:w-auto px-4">
                Shop Now
              </button>
            </div>

          </Link>


          {/* stats */}
          <div className='mt-6  flex flex-col items-center justify-center md:justify-start md:items-start font-satoshi text-black'>
            <div className='flex space-x-8'>
              <div className='flex flex-col items-center'>
                <span className='text-2xl font-bold'>200+</span>
                <p className='text-xs font-medium'>International Brands</p>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-2xl font-bold'>2000+</span>
                <p className='text-xs font-medium'>High-Quality Products</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center p-2 md:p-4'>
              <span className='text-2xl font-bold'>30000+</span>
              <p className='text-xs font-medium'>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className='justify-center items-center '>
          {desktopImage && (
            <Image
              src={urlFor(desktopImage.image).url() || "/placeholder.svg"}
              alt={desktopImage.title || 'Winter Collection'}
              width={1400}
              height={500}
              className="z-0 hidden md:block"
              priority
            />
          )}

          {mobileImage && (
            <Image
              src={urlFor(mobileImage.image).width(390).url() || "/placeholder.svg"}
              alt={mobileImage.title || 'Winter Collection'}
              width={390}
              height={448}
              className="z-0 md:hidden sm:block w-full"
              priority
            />
          )}
        </div>


        {/* Footer */}
        <div className="bg-black md:h-[122px] h-[146px] md:w-full w-[400px] text-white flex items-center justify-center">
          <div className="flex flex-wrap justify-center items-center md:px-12 w-full">
            {brandlogos.map((logo, index) => (
              <div className="w-1/3 md:w-1/5 p-4" key={index}>
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default HeroSection;

