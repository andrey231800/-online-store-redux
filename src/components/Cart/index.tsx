import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {Link} from 'react-router-dom'
import { CartTotalItem } from './CartTotalItem'
import { Button } from './Button'
import './Cart.scss'

export const Cart = () => {
  const cart = useTypedSelector(state => state.cart)
  return (
    <div className=''>
          <Button>
             <Link to="/">Back</Link>
           </Button>
           <h1 className='cart-title'>Корзина</h1>
          <div className='cart-list'>
            {cart.map(item => <CartTotalItem key={item._id} item={item}/>)} 
          </div>
    </div>
  )
}
