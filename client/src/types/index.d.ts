declare type nodenv = 'dev' | 'production' | 'test' | 'network'
declare type loglevel = 'debug' | 'warn' | 'error'

// Model Base types

declare interface IModel {
  id: number
  created_at: string // Serialized Date
  updated_at: string // Serialized Date
}

declare type ICreate<T> = Partial<Omit<T, 'id' | 'created_at' | 'updated_at'>>
declare type IUpdate<T> = Partial<Omit<T, 'id' | 'created_at' | 'updated_at'>>

declare interface IUser extends IModel {
  email: string
  first_name?: string
  last_name?: string
}
