export interface Product {
  _id: string
  name: string
  price: number
  description: string
  imageUrl: string
  category: string
  discountPercent: number
  isNew: boolean
  colors: string[]
  sizes: string[]
}

