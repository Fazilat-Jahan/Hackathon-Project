import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "fg287be1",
  dataset: "production",
  apiVersion:"2025-01-13",
  useCdn: true, 
  token: "skAOlKaC0Ime4NW0raJLH9upZ0YyOjFSbfbgBAxPbRqGyZY87VlYoRgLe6H0Rhuo3sL8AdlpUUpAHCPPDoPOE6Zs6M03O5znXXUhrZQv5CkCOjYD3DxZjp5u28ZBxKL1DQjeN8BUFxngYeLLOjZ8WbAwxaTr5bXy4RZO7Gm30hqGrjkj5DDr",
})