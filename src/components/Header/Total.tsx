import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Total = {
    total: number
}

export const Total:FC<Total> = ({total}) => {
  return (
    <div className='text-lg border-solid border-t-2 border-red-100 pt-1 mt-2 '>
            Total: <b>{`$${total.toLocaleString()}`}</b>
            <div className='flex flex-col p-2 text-blue-400 border-solid text-center border-2 hover:border-red-200'>
                <Link to="/cart">Go to cart</Link>
            </div>
    </div>
  )
}
