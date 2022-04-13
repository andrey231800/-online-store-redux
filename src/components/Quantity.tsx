import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { decCart, incCart } from '../store/actions/actions';
import { TypeSetState } from '../types/types';

interface IQuantity {
    count: number;
    setCount: TypeSetState<number>
}

export const Quantity:FC<IQuantity> = ({count, setCount}) => {

    return (
        <div className='flex items-center my-2'>
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <div className='pr-4 pl-4'>{count}</div>
            <button 
                onClick={() => count < 10 && setCount(count + 1)}
            >
                +
            </button>
        </div>
    )
}
