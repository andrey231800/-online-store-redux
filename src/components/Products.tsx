import React, { FC } from 'react'
import { IProduct } from '../types/types'
import { ProductItem } from './ProductItem'

export const products:IProduct[] = [{
        _id: 'fsaf',
        imagePath: 'https://lh5.googleusercontent.com/_92SgONh8jfMITZIVXHcCjBgfK_5i1uZkSvOLn380rhlBCYSGvmps7iNLZ9-yZAZdX8UlfEpsP5xJKKDfB8WMqfp2mhpWEvAICT9a6L-ZqapWDJmsKXHEaotCmLbGapyy-GXeB44',
        name: 'Lenovo IP Gaming 3 15ACH6',
        price: 1100
    },
    {
        _id: '34f',
        imagePath: 'https://content2.onliner.by/catalog/device/main/b61b66ba423590d9e103161fc7c47e98.jpeg',
        name: 'Acer Aspire 3',
        price: 600
    },
    {
        _id: 'fsevraf',
        imagePath: 'https://shop.by/images/honor_magicbook_x15_bbr_wai9_53011ugc_001_1.jpg',
        name: 'Honor MagicBook X15',
        price: 1000
    }
]

export const Products:FC = () => {
  return (
    <div className='mt-4'>
        {products.map(product => (
            <ProductItem product={product} key={product._id}/>
        ))}
    </div>
  )
}
