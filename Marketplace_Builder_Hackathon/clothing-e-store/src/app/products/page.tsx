// /src/app/products/page.tsx
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer'

// Type definition for Product
type Product = {
  _id: string
  name: string
  price: number
  discountPercent: number
  image: {
    asset: {
      url: string
    }
  }
}

// Server Component fetching data
const ProductsPage = async () => {
  // Fetch data directly in the component
  const query = `*[_type == "products"]`
  const products: Product[] = await client.fetch(query)

  return (
    <div>
        <Header/>
      <h1 className='pt-[90px] md:pt-[130px] mx-4'> 
        <Link href="/"><span>Home</span></Link> &gt;&gt; All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">

        {products.map((product) => (
          <div key={product._id} className="product-item">
            <Link href={`/products/${product._id}`}>
              <Image
                src={urlFor(product.image).url() || '/placeholder.svg'}
                alt={product.name}
                width={285}
                height={298}
                className="w-[300px] h-[320px]"
              />
              <div className='justify-start mt-4'>
                                    <h1 className='text-black md:text-xl text-sm font-bold font-satoshi'>{product.name}</h1>

                                    <h2 className='text-black md:text-sm text-[12px] font-semibold flex font-satoshi gap-1'>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star text-yellow-400'></i>
                                        <i className='fas fa-star bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent'></i>
                                        <span className='px-2'> 4.5/5 </span>
                                    </h2>
                                    <h3 className='text-black text-base font-medium font-satoshi'>
                                        ${product.price}
                                        {product.discountPercent > 0 && (
                                            <span className='text-gray-600 px-2 line-through'>
                                                ${(product.price / (1 - product.discountPercent / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </h3>
                                </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default ProductsPage
