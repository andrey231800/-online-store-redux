import { actionTypes, IProduct } from "../../types/types";

export const addToCart = (product:IProduct, count:number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {product, count}
})

export const removeFromCart = (productId:string) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId
})

export const incCart = (count:number) => ({
    type: actionTypes.CART_INC_ITEM,
    payload: count
})

export const decCart = (count:number) => ({
    type: actionTypes.CART_DEC_ITEM,
    payload: count 
})


