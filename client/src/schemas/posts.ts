import { z } from 'zod'
import { ModelSchemaBase } from './base'

export const PostCreateSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const PostSchema = z.object({
  ...ModelSchemaBase,
  author: z.string(),
  title: z.string(),
  content: z.string(),
  votes: z.number(),
  userVote: z.enum(['up', 'down']).nullish(),
  avatar: z.string(),
})

export const PostListSchema = z.array(PostSchema)

export type IPost = z.infer<typeof PostSchema>
export type IPostCreate = z.infer<typeof PostCreateSchema>
