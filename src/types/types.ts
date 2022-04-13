import { Dispatch, SetStateAction } from "react";

export interface IProduct {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
}

export interface ICart extends IProduct {
    count: number;
}

export interface ICartItem {
    cart: ICart
}

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    CART_INC_ITEM = 'CART_INC_ITEM',
    CART_DEC_ITEM = 'CART_DEC_ITEM'
}

interface ICartAddItemPayload {
    product: IProduct;
    count: number
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM;
    payload: ICartAddItemPayload
}

interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM;
    payload: string
}

export type TypeActionCart = ICartAddItem | ICartRemoveItem;
export type TypeSetState<T> = Dispatch<SetStateAction<T>>

