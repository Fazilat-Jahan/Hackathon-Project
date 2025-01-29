import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/products?search=${searchTerm}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar

