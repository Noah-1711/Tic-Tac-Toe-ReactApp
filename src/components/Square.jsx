import React from 'react'
import './Square.css'

export const Square = ({value,onClick}) => {
    const style = value === "X" ? "square x" : "square o";

  return (
    <div   className={style} onClick={ onClick  }>
        <h1>{value}</h1>
    </div>
  )
}
