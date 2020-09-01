import React, { useContext, useEffect, useCallback } from 'react'
import { AppContext } from './../context'
import { Types } from './../reducers'
import axios from 'axios'
import Table from './Table/Table'
import UserForm from './UserForm'
import { UserType } from '../types'

const Users: React.FC = () => {
  const { state, dispatch } = useContext(AppContext)
  const baseUrl = 'http://localhost:5500'

  const fetchUsers = useCallback(() => {
    axios.get(`${baseUrl}/users`).then((response) => {
      dispatch({
        type: Types.Set,
        payload: response.data,
      })
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  function submitHandler(user: UserType) {
    const d: Date = new Date(user.date)
    const formatedDate = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`

    console.log(formatedDate)

    axios
      .post(`${baseUrl}/users`, {
        ...user,
        date: formatedDate,
      })
      .then((response) => {
        dispatch({
          type: Types.Add,
          payload: response.data,
        })
      })
  }
  return (
    <div className="container">
      {state.users.length === 0 && <h2>Loading...</h2>}
      {state.users.length !== 0 && (
        <>
          <Table users={state.users} />
          <UserForm onSubmit={submitHandler} />
        </>
      )}
    </div>
  )
}

export default Users
