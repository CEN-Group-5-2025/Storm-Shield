import { z } from 'zod'
import { ModelSchemaBase } from './base'

export const ShelterSchema = z.object({
  ...ModelSchemaBase,
  name: z.string(),
  addy: z.string(),
  city: z.string(),
  capacity: z.number().int(),
  occupancy: z.number().int(),
  lat: z.number(),
  long: z.number(),
  amenities: z.array(z.string()),
})

export const ShelterListSchema = z.array(ShelterSchema)

export type IShelter = z.infer<typeof ShelterSchema>
