import React, { useMemo } from 'react'
import './Pagination.scss'

type Props = {
  current: number
  max: number
  onChange?: (index: number) => void
}

const Pagination: React.FC<Props> = ({
  current,
  max,
  onChange = () => {},
}: Props) => {
  const disableFirst: boolean = useMemo(() => current === 1, [
    current,
  ])

  const disableLast: boolean = useMemo(() => current === max, [
    current,
    max,
  ])

  return (
    <div className="pagination">
      {disableFirst}
      <button disabled={disableFirst} onClick={() => onChange(1)}>
        1
      </button>
      <button
        disabled={disableFirst}
        onClick={() => onChange(current - 1)}
      >
        назад
      </button>
      <div>{current}</div>
      <button
        disabled={disableLast}
        onClick={() => onChange(current + 1)}
      >
        вперед
      </button>
      <button disabled={disableLast} onClick={() => onChange(max)}>
        {max}
      </button>
    </div>
  )
}

export default Pagination
