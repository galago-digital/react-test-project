export type UserType = {
  id: number
  name: string
  distance?: number
  email?: string
  payment?: number
  phone?: string
  date?: Date
}

export type HeaderType = {
  key: string
  title: string
}

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
