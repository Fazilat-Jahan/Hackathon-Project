// /src/app/products/[product_id]/page.tsx
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Type definition for Product
type Product = {
  _id: string
  name: string
  price: number
  description: string
  image: {
    asset: {
      url: string
    }
  }
  category: string
  discountPercent: number
  new: boolean
  colors: string[]
  sizes: string[]
}

// Server Component fetching data
const ProductPage = async ({ params }: { params: { product_id: string } }) => {
  // Fetch data directly in the component
  const query = `*[_type == "products" && _id == $product_id][0]`
  const product: Product = await client.fetch(query, { product_id: params.product_id })

  return (
    <div>
      <Header />
      <div className="product-detail  py-[72px] md:py-[130px] items-center justify-center flex flex-col md:w-3/4 w-full">
      <h1 className="text-xl font-bold">{product.name}</h1>
        <div className="product-detail-image">
          <Image
            src={urlFor(product.image).url() || '/placeholder.svg'}
            alt={product.name}
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          />
        </div>
        <div className="product-detail-info">
          
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Discount: {product.discountPercent}%</p>
          <p>New Arrival: {product.new ? 'Yes' : 'No'}</p>

          <div>
            <p>Colors:</p>
            <ul>
              {product.colors.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Sizes:</p>
            <ul>
              {product.sizes.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
