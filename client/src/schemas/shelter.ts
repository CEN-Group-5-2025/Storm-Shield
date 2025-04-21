import { z } from 'zod'
import { ModelSchemaBase } from './base'

export const ShelterSchema = z.object({
  ...ModelSchemaBase,
  shelter_name: z.string(),
  shelter_addy: z.string(),
  shelter_city: z.string(),
  capacity: z.number().int(),
  occupancy: z.number().int(),
  lat: z.number(),
  long: z.number(),
  amenities: z.string(),
})

export const ShelterListSchema = z.array(ShelterSchema)

export type IShelter = z.infer<typeof ShelterSchema>
