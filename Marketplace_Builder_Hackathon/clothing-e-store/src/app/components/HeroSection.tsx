import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client'; // Adjust the path if necessary
import imageUrlBuilder from '@sanity/image-url';

// Function to build image URLs
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const HeroSection = () => {
  const [desktopImage, setDesktopImage] = useState<string | null>(null);
  const [mobileImage, setMobileImage] = useState<string | null>(null);

  // Fetch images from Sanity
  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "heroSection"]{ "desktopImage": landing Image for Desktop.asset->url, "mobileImage": landingImageForSmallDevice.asset->url }`;
      const data = await client.fetch(query);

      if (data && data.length > 0) {
        setDesktopImage(data[0].desktopImage);
        setMobileImage(data[0].mobileImage);
      }
    };

    fetchImages();
  }, []);

    const brandlogos = [
        { src: '/versac.png', alt: 'Versace' },
        { src: '/zara.png', alt: 'Zara' },
        { src: '/gucci.png', alt: 'Gucci' },
        { src: '/prada.png', alt: 'Prada' },
        { src: '/calvin.png', alt: 'Calvin Klein' },
    ];
    return (
        <div>
            <section className=' md:relative md:w-full w-full md:h-[663px] h-[853px] pb-10'>

                <div className='md:absolute inset-0 flex flex-col justify-start md:px-24 px-4 md:py-24 pt-12  z-10'>
                    <h1 className='font-integral md:text-[64px] text-4xl font-bold leading-none'>FIND CLOTHES<br />
                        THAT MATCHES<br />
                        YOUR STYLE</h1>
                    <h2 className='hidden md:block font-satoshi font-medium md:text-[16px] text-sm mt-4'>Browse through our diverse range of meticulously crafted garments, designed<br />to bring out your individuality and cater to your sense of style.</h2>
                    <h2 className='md:hidden block font-satoshi font-medium md:text-[16px] text-sm mt-4 text-start'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h2>
                    
                    <Link href={"/browseStyles"}> <button className='md:w-[210px] w-[358px] h-[52px] md:mt-6 rounded-full bg-black text-center py-3 font-satoshi text-white justify-center items-center text-[16px] mt-4'>Shop Now</button> </Link>

                    {/* stats */}
                    <div className='mt-6 md:hidden flex flex-col items-center justify-center font-satoshi text-black'>
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

                        <div className='flex flex-col items-center p-2'>
                            <span className='text-2xl font-bold'>30000+</span>
                            <p className='text-xs font-medium'>Happy Customers</p>
                        </div>

                    </div>


                </div>
                <div className='justify-center md:w-full items-center w-[400px]'>
                {desktopImage && (
            <Image
              src={desktopImage}
              alt='Winter Collection'
              objectFit="cover"
              className="z-0 hidden md:block"
              width={1000}
              height={663}
            />
          )}

{mobileImage && (
            <Image
              src={mobileImage}
              alt='Winter Collection'
              objectFit="cover"
              className="z-0 md:hidden sm:block w-full"
              width={390}
              height={448}
            />
          )}
                </div>

                {/* footer */}
                <div className='bg-black md:h-[122px] md:w-full w-[400px] h-[146px] text-white items-center justify-center flex'>
                <div className="flex flex-wrap justify-center items-center md:px-12 w-full">
        {brandlogos.map((logo, index) => (
          <div className="w-1/3 md:w-1/5 p-4" key={index}>
            <Image
              src={logo.src}
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
    )
}

export default HeroSection
