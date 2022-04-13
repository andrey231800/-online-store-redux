import React, { FC, useState } from 'react'
import { IProduct } from '../types/types'
import { Quantity } from './Quantity'
import {useDispatch} from 'react-redux'
import { addToCart } from '../store/actions/actions'

interface IProductItem {
    product: IProduct
}

export const ProductItem:FC<IProductItem> = ({product}) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch()  
    
    const addHandler = () => {
        dispatch(addToCart(product, count))
    }

    return (
        <div className='shadow-sm rounded-md p-5 w-2/4 mx-auto mt-7 bg-white flex justify-center flex-col text-center items-center overflow-hidden'>
            <img src={product.imagePath} className='w-80' alt={product.name}/>
            <div className='text-lg font-bold my-2'>{product.name}</div>
            <div className='text-sm text-gray-600'>${product.price}</div>
            <Quantity count={count} setCount={setCount}/>
            <button 
                disabled={count < 1 && true}
                onClick={addHandler} 
                className="bg-pink-500 font-semibold text-white rounded-sm px-3 py-1 disabled:opacity-75"
            >
                В корзину
            </button>
        </div>
    )
}
