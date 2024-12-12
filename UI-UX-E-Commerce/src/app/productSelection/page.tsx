import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductSection = () => {
  return (
    <div>
            <Header/>
            <div className=" py-[72px] md:py-[150px]">
            <nav className="text-sm text-gray-500 mb-2 px-6">
          <a href="/" className="hover:underline">Home</a> &gt;{" "}
          <a href="/" className="hover:underline">Shop</a> &gt;{" "}
          <a href="/" className="hover:underline">Men</a> &gt;{" "}
          <span className="text-gray-700">T-Shirts</span>
        </nav>

        {/* Product Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-1/2">
            {/* Thumbnails */}
            <div className="flex flex-row gap-4 md:flex-col">
              <Image
                src="/PS1.png"
                alt="Thumbnail 1"
                width={80}
                height={100}
                className="cursor-pointer rounded-lg border border-gray-200 hover:border-black"
              />
              <Image
                src="/PS2.png"
                alt="Thumbnail 2"
                width={80}
                height={100}
                className="cursor-pointer rounded-lg border border-gray-200 hover:border-black"
              />
              <Image
                src="/PS3.png"
                alt="Thumbnail 3"
                width={80}
                height={100}
                className="cursor-pointer rounded-lg border border-gray-200 hover:border-black"
              />
            </div>

            {/* Main Image */}
            <div className="mb-4 md:mb-0">
              <Image
                src="/PS4.png"
                alt="Main T-shirt"
                width={350}
                height={420}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Section: Product Info */}
          <div className="w-full md:w-1/2">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
              <span className="ml-2 text-gray-500">(4.5)</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-semibold text-green-600">$260</span>{" "}
              <span className="line-through text-gray-500">$300</span>{" "}
              <span className="text-red-600 font-bold">-20%</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              The graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Select Color */}
            <div className="mb-4">
              <span className="block font-medium mb-2">Select Color:</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-brown-700 border-2 border-gray-200"></button>
                <button className="w-8 h-8 rounded-full bg-green-800 border-2 border-gray-200"></button>
                <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-200"></button>
              </div>
            </div>

            {/* Select Size */}
            <div className="mb-6">
              <span className="block font-medium mb-2">Choose Size:</span>
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Small</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Medium</button>
                <button className="px-4 py-2 border rounded-lg bg-gray-200 font-semibold">Large</button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                <span className="px-4 py-1">1</span>
                <button className="px-3 py-1 hover:bg-gray-100">+</button>
              </div>
              <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSection;
