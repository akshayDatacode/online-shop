import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getProducts } from '../../apiServices'
import ProductCard from './ProductCard'

import { setProductToCartList } from '../actionCreators'

import { toast } from 'react-toastify'


const Shop = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((res) => {
      if (res) {
        setProducts(res.data.products)
      }
    })
  }, [])

  const handleAddToCart = (item) => {
    dispatch(setProductToCartList(item))
    toast.success('Item successfully added into cart')
  }

  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-left">
          <div className="row m-0 p-5">
            {
              products && products.length && products.map((item, i) => (
                <ProductCard key={i} product={item} i={i} handleAddToCart={handleAddToCart} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default Shop