import { type SchemaTypeDefinition } from 'sanity'
import products from './product'
import heroSection from './heroSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection ,products],
}