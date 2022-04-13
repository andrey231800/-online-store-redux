import React, { FC } from 'react'
import { ICart } from '../../types/types'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../../store/actions/actions'

interface ICartItem {
    item: ICart
}

export const CartItem:FC<ICartItem> = ({item}) => {

    const dispatch = useDispatch();

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='flex items-center mb-4' key={`cart item ${item._id}`}>
            <img src={item.imagePath} alt={item.name} 
                width='55' 
                height='55' 
                className='mr-3'
            />
            <div>
                <div>{item.name}</div>
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
