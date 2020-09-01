import React, { useState } from 'react'
import './TableHeader.scss'
import Arrow from './Arrow'

type Props = {
  headers: string[]
  onClick?: (index: ActiveTabType) => void
}
export type ActiveTabType = {
  index: number
  direction: boolean
}

const TableHeader: React.FC<Props> = ({
  headers,
  onClick,
}: Props) => {
  const [activeTab, setActiveTab] = useState({
    index: -1,
    direction: false,
  })

  function clickHandler(index: number) {
    let activeIndex: number
    let currentDirection: boolean

    if (activeTab.index !== index) {
      activeIndex = index
      currentDirection = false
    } else {
      if (!activeTab.direction) {
        activeIndex = index
        currentDirection = true
      } else {
        activeIndex = -1
        currentDirection = false
      }
    }

    onClick &&
      onClick({ index: activeIndex, direction: currentDirection })

    setActiveTab({ index: activeIndex, direction: currentDirection })
  }

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          return (
            <th key={index} onClick={() => clickHandler(index)}>
              {header}
              <Arrow
                direction={
                  activeTab.index === index && activeTab.direction
                }
                active={activeTab.index === index}
              />
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHeader
