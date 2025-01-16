import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  const query = await client.fetch(
    `*[_type == "product"][0..4]{
        _id,
      name,
      price,
      discountPercentage,
      tags,
      "image-url": image.asset->url
    }`
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {query.map((product: any, index: number) => (
        <div key={index}>
          <p>{product.name}</p>
          <p>{product.description}</p>

          {
            product.image && (
              <Image
                width={300} height={300}
                src={urlFor(product.image).width(300).url()}
                alt={product.image.alt || 'Store Image'}
              />
            )

          }



        </div>

      )
      )
      }
    </main>
  );
}
