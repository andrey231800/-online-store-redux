import React, { FC } from 'react'
import { ICart } from '../../types/types'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../../store/actions/actions'
import { Quantity } from '../Quantity'

interface ICartItem {
    item: ICart
}

export const CartTotalItem:FC<ICartItem> = ({item}) => {

    const dispatch = useDispatch();

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='cart-list-item' key={`cart item ${item._id}`}>
            <div className='cart-list-item-image'>
                <img src={item.imagePath} alt={item.name}  
                />
                <div className='cart-list-item-image-name'>{item.name}</div>
            </div>
            <div className='cart-list-item-descr'>
                <div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
                <button 
                    onClick={() => removeHandler(item._id)}
                    className='text-red-600 bg-transparent border-0'
                >
                    удалить
                </button>
            </div>
        </div>
    )
}