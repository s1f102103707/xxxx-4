/* eslint-disable */
export type User = {
  id: string
  email: string
  name?: string | null | undefined
}

export type NewUser = {
  email: string
  name?: string | null | undefined
}

export type UpdateUser = {
  email?: string | undefined
  name?: string | null | undefined
}
