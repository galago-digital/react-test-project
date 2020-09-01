import { UserType, ActionMap } from './types'

export enum Types {
  Add = 'ADD_USER',
  Set = 'SET_USER',
}

type UserPayload = {
  [Types.Add]: UserType
  [Types.Set]: UserType[]
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<
  UserPayload
>]

export const userReducer = (
  state: UserType[],
  action: UserActions,
): UserType[] => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        },
      ]
    case Types.Set:
      return action.payload
    default:
      return state
  }
}
