import React from 'react'

type TProps = {
  onClick: () => void
  children: any
}

const Button = ({ onClick, children }: TProps) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
