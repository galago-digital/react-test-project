import React, { useMemo, useState } from 'react'
import { UserType, HeaderType } from './../../types'
import TableHeader, { ActiveTabType } from './TableHeader'
import TableRow from './TableRow'
import './Table.scss'
import { sortByKey } from './helpers.js'

type Props = {
  users: UserType[]
  rowsCount?: number
}

const Table: React.FC<Props> = ({ users, rowsCount = 5 }: Props) => {
  const headers: HeaderType[] = [
    {
      key: 'name',
      title: 'Имя',
    },
    {
      key: 'phone',
      title: 'телефон',
    },
    {
      key: 'email',
      title: 'e - mail',
    },
    {
      key: 'distance',
      title: 'дистанция',
    },
    {
      key: 'payment',
      title: 'взнос',
    },
    {
      key: 'date',
      title: 'дата рождения',
    },
  ]
  const [sortBy, setSortBy] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<boolean>(false)

  function headerClick(activeTab: ActiveTabType): void {
    setSortBy(
      activeTab.index === -1 ? '' : headers[activeTab.index].key,
    )

    setSortDirection(activeTab.direction)
  }

  const sortedUsers = useMemo(() => {
    if (sortBy === '') return users
    let sorted = [...users]

    sorted = sortByKey(sorted, sortBy)

    if (sortDirection) {
      return sorted.reverse()
    }

    return sorted
  }, [sortBy, sortDirection, users])

  return (
    <>
      <table className="users-table">
        <TableHeader
          headers={headers.map((header) => header.title)}
          onClick={headerClick}
        />
        <tbody>
          {sortedUsers.map((user) => {
            return <TableRow user={user} key={user.id} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
