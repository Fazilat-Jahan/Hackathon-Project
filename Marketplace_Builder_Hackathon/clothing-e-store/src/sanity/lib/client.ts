import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "fg287be1",
  dataset: "production",
  apiVersion:"2025-01-13",
  useCdn: false, 
  token: "skAOlKaC0Ime4NW0raJLH9upZ0YyOjFSbfbgBAxPbRqGyZY87VlYoRgLe6H0Rhuo3sL8AdlpUUpAHCPPDoPOE6Zs6M03O5znXXUhrZQv5CkCOjYD3DxZjp5u28ZBxKL1DQjeN8BUFxngYeLLOjZ8WbAwxaTr5bXy4RZO7Gm30hqGrjkj5DDr",
})


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

