"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const CustomerReviews = () => {
  const reviews = ["/c1.png", "/c2.png", "/c3.png", "/c2.png", "/c1.png", "/c3.png"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      {/* Title + Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-16 mb-6">
        <h1 className="text-center md:text-5xl text-4xl font-integral font-bold text-black mb-4 md:mb-0">
          Our Happy Customers
        </h1>
        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="flex bg-gray-100 rounded-full w-[50px] h-[46px] items-center justify-center text-lg"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Reviews Container */}
      <div className="w-full overflow-hidden">
        <div ref={containerRef} className="flex transition-transform duration-500 ease-in-out">
          {reviews.map((review, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
              <Image
                src={review || "/placeholder.svg"}
                alt={`Customer Review ${index + 1}`}
                width={400}
                height={240}
                className="rounded-lg w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews

