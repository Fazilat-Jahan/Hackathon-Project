import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     
  apiVersion: "2023-01-01",
  useCdn: false, 
  token: process.env.SANITY_API_TOKEN,               
});

export async function getProducts() {
  return client.fetch(`*[_type == "products"]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    category,
    discountPercent,
    "isNew": new,
    colors,
    sizes
  }`)
}

export async function getProduct(id: string) {
  return client.fetch(
    `*[_type == "products" && _id == $id][0]{
      _id,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      category,
      discountPercent,
      "isNew": new,
      colors,
      sizes
    }`,
    { id },
  )
}

