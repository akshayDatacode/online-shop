import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getProducts } from '../../apiServices'
import ProductCard from './ProductCard'

import { setProductToCartList } from '../actionCreators'

import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const Shop = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getProducts().then((res) => {
      if (res) {
        setProducts(res.data.products)
      }
    })
  }, [])

  const handleAddToCart = (item, quantity) => {
    item['quantity'] = quantity
    dispatch(setProductToCartList(item))
    toast.success('Item successfully added into cart', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const filteredList = products.filter(item => item.title.toUpperCase().includes(search.toUpperCase()) || item.description.toUpperCase().includes(search.toUpperCase()))

  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-left">
          <div className="row px-3 my-4">
            <div className="col-12 text-center d-flex justify-content-center">
              <div className="form-group d-flex align-items-center mx-md-5 mx-2 px-md-4 px-1">
                <h1><i className="far fa-search search-icon mx-3" /></h1>
                <input
                  type="text"
                  className="form-control"
                  value={search}
                  placeholder="search product"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row m-0 p-md-5 p-0">
            {
              products && products.length ? filteredList.map((item, i) => (
                <ProductCard key={i} product={item} i={i} handleAddToCart={handleAddToCart} />
              ))
                :
                <h6>No Items in Store please <Link to="/add">Add Product</Link></h6>
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default Shop