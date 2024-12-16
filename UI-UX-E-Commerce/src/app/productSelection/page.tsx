import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductSection = () => {

  const reviews = [
    {
      id: 1,
      reviewer: "Samantha D.",
      rating: 4.5,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 16, 2023",
    },
    {
      id: 2,
      reviewer: "Alex M",
      rating: 4,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
    },
    {
      id: 3,
      reviewer: "Ethan R.",
      rating: 3.5,
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
    },
    {
      id: 4,
      reviewer: "Olivia P.",
      rating: 4,
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
    },
    {
      id: 5,
      reviewer: "Liam K.",
      rating: 4,
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
    },
    {
      id: 6,
      reviewer: "Ava h.",
      rating: 4.5,
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
    },
  ];


  return (
    <div>
      <Header />
      <div className="py-[82px] md:py-[150px] md:mx-20 mx-2 items-center justify-center">
        <nav className="text-sm text-gray-500 mb-2 px-6">
          <a href="/" className="hover:underline">Home</a> &gt;{" "}
          <a href="/" className="hover:underline">Shop</a> &gt;{" "}
          <a href="/" className="hover:underline">Men</a> &gt;{" "}
          <span className="text-gray-700">T-Shirts</span>
        </nav>

        {/* Product Layout */}
        <div className="flex flex-col md:flex-row gap-8 mx-2">
          {/* Left Section: Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-1/2">
            <div className="flex flex-row gap-4 md:flex-col">
              <Image
                src="/PS4.png"
                alt="Thumbnail 1"
                width={152}
                height={167}
                className="cursor-pointer rounded-2xl border border-gray-200 hover:border-black w-[111px] h-[106px] md:w-[162px] md:h-[167px]"
              />
              <Image
                src="/PS2.png"
                alt="Thumbnail 2"
                width={152}
                height={167}
                className="cursor-pointer rounded-2xl border border-gray-200 hover:border-black w-[111px] h-[106px] md:w-[162px] md:h-[167px]"
              />
              <Image
                src="/PS3.png"
                alt="Thumbnail 3"
                width={152}
                height={167}
                className="cursor-pointer rounded-2xl border border-gray-200 hover:border-black w-[111px] h-[106px] md:w-[162px] md:h-[167px]"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <Image
                src="/PS4.png"
                alt="Main T-shirt"
                width={445}
                height={530}
                className="rounded-2xl w-[358px] h-[290px] md:w-[445px] md:h-[530px] border border-gray-200 hover:border-black "
              />
            </div>
          </div>

          {/* Right Section: Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="md:text-[40px] text-[24px] font-integral font-bold mb-2">ONE LIFE GRAPHIC TSHIRT</h1>
            <div className="flex items-center mb-4">
              <div className=""><i className="fas fa-star w-[22px] h-[22px] text-yellow-400"></i>
                <i className="fas fa-star w-[20px] h-[20px] text-yellow-400"></i>
                <i className="fas fa-star w-[20px] h-[20px] text-yellow-400"></i>
                <i className="fas fa-star w-[20px] h-[20px] text-yellow-400"></i>
                <i className="fas fa-star w-[20px] h-[20px] bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent"></i></div>
              <span className="pl-1 font-satoshi font-medium md:text-base text-sm text-gray-500">(4.5)</span>
            </div>
            <div className="font-satoshi mb-4 justify-between space-x-3">
              <span className="md:text-[32px] text-2xl font-bold">$260</span>{" "}
              <span className="line-through md:text-[32px] text-2xl font-bold text-gray-500">$300</span>{" "}
              <span className="text-red-600 font-medium md:text-base text-sm bg-red-200 rounded-full px-3">-20%</span>
            </div>
            <p className="text-gray-600 mb-4">
              The graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>
            <div className="mb-4">
              <span className="block font-medium text-sm md:text-base mb-2">Select Color:</span>
              <div className="flex gap-2">
                <button className="w-[37px] h-[37px] rounded-full bg-[#4F4631] border-2 border-gray-200"></button>
                <button className="w-[37px] h-[37px] rounded-full bg-[#31344F] border-2 border-gray-200"></button>
                <button className="w-[37px] h-[37px] rounded-full bg-[#314F4A] border-2 border-gray-200"></button>
              </div>
            </div>
            <div className="mb-6">
              <span className="block font-medium font-satoshi text-sm md:text-base mb-2">Choose Size:</span>
              <div className="flex gap-4">
                <button className="font-satoshi font-medium text-sm md:text-base md:px-4 md:py-2 px-2 py-1 border rounded-full bg-gray-200 hover:bg-black">Small</button>
                <button className="font-satoshi font-medium text-sm md:text-base md:px-4 md:py-2 px-2 py-1 border rounded-full bg-gray-200 hover:bg-black">Medium</button>
                <button className="font-satoshi font-medium text-sm md:text-base md:px-4 md:py-2 px-2 py-1 border rounded-full bg-gray-200 hover:bg-black">Large</button>
                <button className="font-satoshi font-medium text-sm md:text-base md:px-4 md:py-2 px-2 py-1 border rounded-full bg-gray-200 hover:bg-black">X-Large</button>
              </div>
            </div>
            <div className="flex justify-around items-center gap-4">
              <div className="flex items-center justify-around  font-satoshi text-sm md:text-base border w-[110px] h-[44px] md:w-[170px] md:h-[52px] md:p-6 p-[16px] bg-gray-100 rounded-full">
                <button className=" hover:bg-gray-100">-</button>
                <span className="">1</span>
                <button className="hover:bg-gray-100">+</button>
              </div>
              <button className="w-[236px] h-[44px] md:w-[400px] md:h-[52px]  bg-black text-white rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex justify-around border-b md:my-12 my-8 font-satoshi font-medium md:text-xl text-base mx-1">
          <button className="md:px-6 py-2 text-gray-600 hover:text-black border-b-2 border-transparent focus:border-black">
            Product Details
          </button>
          <button className="md:px-6 py-2 text-gray-600 hover:text-black border-b-2 border-black  focus:border-black">
            Rating & Reviews
          </button>
          <button className="md:px-6 py-2 text-gray-600 hover:text-black border-b-2 border-transparent focus:border-black">
            FAQs
          </button>
        </div>

        {/* Reviews Header */}
        <div className="flex justify-between items-center mb-6 font-satoshi">
          <h2 className="text-2xl font-bold font-satoshi">All Reviews <span className="text-base font-medium">(451)</span> </h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 md:px-4 md:py-2 px-2 py-1 border rounded-full text-gray-600">
              <i className="fas fa-sliders-h"></i>
            </button>
            <button className="hidden md:block md:px-4 md:py-2 px-2 py-1 border rounded-lg text-base font-medium">
              Latest <i className="fas fa-chevron-down md:pl-2 pl-0.5"></i>
            </button>
            <button className="md:px-4 md:py-2 px-2 py-1 bg-black text-white rounded-full hover:bg-gray-800 text-base font-medium">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mx-28 mx-4 justify-center items-center font-satoshi">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-xl mb-2">{review.reviewer}</h3>
              {/* Star Rating */}
              <div className="mb-2 flex items-center">
                <i className="fas fa-star w-[22px] h-[22px] text-yellow-400"></i>
                <i className="fas fa-star w-[22px] h-[22px] text-yellow-400"></i>
                <i className="fas fa-star w-[22px] h-[22px] text-yellow-400"></i>
                <i className="fas fa-star w-[22px] h-[22px] text-yellow-400"></i>
                <i className="fas fa-star w-[22px] h-[22px] bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent"></i>
                {/* <span className="px-2">{review.rating}/5</span> */}
              </div>
              <p className="text-gray-600 font-medium text-base">{review.text}</p>
              <span className="text-gray-400 font-medium text-base">Posted on {review.date}</span>
            </div>
          ))}
        </div>

        {/* Load More Reviews Button */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-base font-satoshi font-medium rounded-full hover:bg-gray-400 border">
            Load More Reviews
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSection;
