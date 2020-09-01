import React, { useContext, useEffect, useCallback } from 'react'
import { AppContext } from './../context'
import { Types } from './../reducers'
import axios from 'axios'
import Table from './Table/Table'

const Users: React.FC = () => {
  const { state, dispatch } = useContext(AppContext)

  const fetchUsers = useCallback(() => {
    axios.get('http://localhost:5500/users').then((response) => {
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

  return (
    <div className="container">
      <Table users={state.users} />
    </div>
  )
}

export default Users
