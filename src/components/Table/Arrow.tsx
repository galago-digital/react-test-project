import React from 'react'
import './Arrow.scss'

type Props = {
  direction?: boolean
  active?: boolean
}

const Arrow: React.FC<Props> = ({
  direction = false,
  active = false,
}: Props) => {
  return (
    <>
      <svg className="arrow" viewBox="0 0 24 24">
        {direction && (
          <path
            fill={active ? 'yellow' : 'currentColor'}
            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
          />
        )}

        {!direction && (
          <path
            fill={active ? 'yellow' : 'currentColor'}
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        )}
      </svg>
    </>
  )
}

export default Arrow
