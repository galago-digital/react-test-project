import React, { createContext, useReducer, Dispatch } from 'react'
import { userReducer, UserActions } from './reducers'

import { UserType } from './types'

type InitialStateType = {
  users: UserType[]
}

const initialState: InitialStateType = {
  users: [],
}

const AppContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<UserActions>
}>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (
  { users }: InitialStateType,
  action: UserActions,
) => ({
  users: userReducer(users, action),
})

type Props = {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
