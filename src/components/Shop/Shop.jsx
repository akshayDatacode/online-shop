import React, { useEffect, useState } from 'react'
import { getProducts } from '../../apiServices'
import ProductCard from './ProductCard'

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((res) => {
      if (res) {
        console.log("data", res.data)
        setProducts(res.data.products)
      }
    })
  }, [])

  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-left">
          <div className="row m-0">
            {
              products && products.length && products.map((item, i) => (
                <ProductCard product={item} i={i} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Shop