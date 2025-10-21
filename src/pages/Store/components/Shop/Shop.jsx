import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { getProducts } from '../../actions/apiServices'
import ProductCard from './ProductCard'

import { setProductToCartList } from '../../actions/actionCreators'
import Filter from './Filter'

const Shop = () => {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [filterQuery, setFilterQuery] = useState({
    search: '',
    priceRageStart: 0,
    priceRageEnd: 20,
    categoriesList: [],
  })

  useEffect(() => {
    getProducts(filterQuery).then((res) => {
      if (res) {
        setProducts(res.data.products)
      }
    })
  }, [])

  const handleAddToCart = (item, quantity) => {
    item['quantity'] = quantity
    item['key'] = item._id
    dispatch(setProductToCartList(item))
    toast.success('Item successfully added into cart', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilterQuery({ ...filterQuery, [name]: value })
    getProducts({ ...filterQuery, [name]: value }).then((res) => {
      if (res) {
        setProducts(res.data.products)
      }
    })
  }

  return (
    <>
      <img
        src={require(`../../../../assets/images/hero.png`).default}
        alt="Loading..."
        className="img-fluid"
        loading='lazy'
      />
      <div className="row m-0">
        <div className="col-12 text-left">
          <div className="row mx-0 px-md-5 px-3 my-5">
            <div className="col-12 col-md-11 px-0  text-center d-flex justify-content-center">
              <div className="d-flex mx-md-5 mx-2 px-0 fontSearch">
                <input
                  type="text"
                  className="search"
                  name='search'
                  value={filterQuery.search}
                  placeholder="Search Your Product"
                  onChange={(e) => handleFilterChange(e)}
                />
                <i className="fad fa-search search-icon" />
              </div>
            </div>
            <div className='col-12 col-md-1 text-center d-flex align-items-center'>
              {/* <i className="fal fa-filter filter-icon" /> */}
            </div>
          </div>
          <div className="row mx-0 p-md-4 p-0">
            <div className="col-12 col-md-2 px-0 border">
              <Filter setFilterQuery={setFilterQuery} filterQuery={filterQuery} handleFilterChange={handleFilterChange} />
            </div>
            <div className="col-12 col-md-10">
              <div className="row mx-0 card-group">
                {
                  products && products.length ? products.map((item, i) => (
                    <ProductCard key={i} product={item} i={i} handleAddToCart={handleAddToCart} />
                  ))
                    :
                    <h6>No Items in store please <Link to="/add">Add Product</Link></h6>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Shop