"use client"

import { useState, useEffect } from "react"

type FiltersProps = {
  categories: string[]
  onFilterChange: (category: string, priceRange: [number, number]) => void
}

export default function Filters({ categories, onFilterChange }: FiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  useEffect(() => {
    onFilterChange(selectedCategory, priceRange)
  }, [selectedCategory, priceRange, onFilterChange])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
           className="w-full p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black  hover:bg-black hover:text-white"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 ">
        <label htmlFor="priceRange" className="block mb-2 text-sm font-medium">
          Price Range
        </label>
        <input
          type="range"
          id="priceRange"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
          className="w-full bg-black appearance-none h-2 rounded-full cursor-pointer"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}
