import React, { FC } from 'react'
import { ICart, TypeSetState } from '../../types/types';
import cartIcon from '../../assets/images/bx-cart-download.svg'

interface IButton {
    isShowCart: boolean;
    setIsShowCart: TypeSetState<boolean>;
    cart: ICart[]
}

export const Button:FC<IButton> = ({isShowCart, setIsShowCart, cart}) => {
  return (
        <button 
            className='bg-transparent border-none relative' 
            onClick={(e) => {
                setIsShowCart(!isShowCart)
                e.stopPropagation()
            }}
        >
                <img src={cartIcon} alt="cart" width='50'/>
                <div 
                    className='text-red-600 absolute bottom-0 right-0 font-bold rounded-full bg-white w-5 h-5 flex items-center justify-center'
                >
                    {cart.length}
                </div>
        </button>
  )
}
