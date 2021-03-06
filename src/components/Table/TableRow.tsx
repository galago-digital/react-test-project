import React from 'react'
import { UserType } from './../../types'
import './TableRow.scss'

type Props = {
  user: UserType
}

const TableRow: React.FC<Props> = ({ user }: Props) => {
  return (
    <tr>
      <td>{user.name} </td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.distance} км</td>
      <td>{user.payment} р</td>
      <td>{user.date}</td>
    </tr>
  )
}

export default TableRow
