import { z } from 'zod'
import { ModelSchemaBase } from './base'

export const AlertSchema = z.object({
  ...ModelSchemaBase,
  title: z.string(),
  description: z.string(),
  alert_type: z
    .enum(['weather', 'flood', 'service', 'road', 'shelter', 'medical'])
    .nullish(),
})

export const AlertListSchema = z.array(AlertSchema)

export type IAlert = z.infer<typeof AlertSchema>
