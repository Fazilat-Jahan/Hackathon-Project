import type React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

type PaginationProps = {
  productsPerPage: number
  totalProducts: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex flex-wrap justify-center items-center space-x-1 md:space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border border-black hover:bg-gray-100"
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="hidden md:block">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 rounded ${
                currentPage === number
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="md:hidden">
          <span className="px-3 py-2">
            {currentPage} of {pageNumbers.length}
          </span>
        </li>
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={`p-2 rounded ${
              currentPage === pageNumbers.length
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border border-black hover:bg-gray-100"
            }`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

