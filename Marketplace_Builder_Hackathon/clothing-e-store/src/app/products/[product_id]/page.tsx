// /src/app/products/[product_id]/page.tsx
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

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
      <Header /><h1 className='pt-[90px] md:pt-[130px] mx-4'> 
        
      <Link href="/"><span>Home</span></Link> 
      &nbsp; &gt;&gt; &nbsp;<Link href="/products"><span>All Products</span></Link> 
     &nbsp; &gt;&gt; &nbsp;{product.name}</h1>

      <div className="product-detail items-center justify-center flex flex-col md:flex-row md:w-full md:my-4">
      <div className='flex flex-col md:w-1/2 items-center '>
      <h1 className="md:text-2xl  text-base font-bold p-2">{product.name}</h1>
        <div className="product-detail-image">
          <Image
            src={urlFor(product.image).url() || '/placeholder.svg'}
            alt={product.name}
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          />
        </div>
        </div>

        <div className='flex flex-col md:w-1/2 items-center border border-black rounded-md px-4'>
        <div className="product-detail-info text-base text-justify">
          
          <p>{product.description}</p> <br />
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
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
