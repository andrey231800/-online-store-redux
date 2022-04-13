import React, { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import logoImage from '../assets/images/httpie.svg'

import { useTypedSelector } from '../hooks/useTypedSelector'

import { CartItem } from './Header/CartItem'
import { Total } from './Header/Total'
import { Button } from './Header/Button'

export const Header:FC = () => {
    const body = document.querySelector('body');

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    const [isShowCart, setIsShowCart] = useState(false)

    body?.addEventListener('click', () => {
        setIsShowCart(false)
    }) 

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    return (

    <div className='flex items-center justify-between py-3 px-6 relative w-full' style={{
        boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)',
        background: 'linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,226,0,1) 100%)'
    }}>
            <a href="/"><img src={logoImage} alt="logo" width='180'/></a>
            <Button isShowCart={isShowCart} setIsShowCart={setIsShowCart} cart={cart}/>
             <div className={cn('absolute top-6 p-5 rounded-md right-0 shadow-md z-10 bg-white', {
                hidden: !isShowCart
            })}
                style={{
                    top: 93
                }}
                onClick={
                    (e) => e.stopPropagation()
                }
            >
                    {cart.map(item => <CartItem item={item} key={item._id}/>)}
                    <Total total={total}/>
            </div>

    </div>
  )
}
