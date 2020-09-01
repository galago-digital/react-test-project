export type UserType = {
  id?: number | undefined
  name: string
  distance: number | undefined
  email: string
  payment: number | undefined
  phone: string
  date: string
}

export type HeaderType = { key: string; title: string }

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
