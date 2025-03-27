import { z } from 'zod'
import { ModelSchemaBase } from './base'

export const UserTokenSchema: z.ZodSchema<{ token: string }> = z.object({
  token: z.string(),
})

export const UserDetailsSchema: z.ZodSchema<IUser> = z.object({
  ...ModelSchemaBase,
  email: z.string(),
  first_name: z
    .string()
    .nullish()
    .transform((val) => val ?? undefined) as any,
  last_name: z
    .string()
    .nullish()
    .transform((val) => val ?? undefined) as any,
})
