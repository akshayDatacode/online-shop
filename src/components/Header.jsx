import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { countTotalCartItems } from '../utility'

const Header = () => {
  const cartCount = useSelector(({ shop }) => shop.cartList)

  return (
    <>
      <div className="row m-0 bg-dark p-3 align-items-center">
        <div className="col-md-6 col-12 px-md-2 px-0 text-left d-flex justify-content-between">
          <Link to='/'><h1 className="text-white">Online Shop</h1></Link>
        </div>
        <div className="col-md-6 col-12 px-md-2 px-0 text-right d-flex justify-content-end">
          <Link to="/cart">
            <h3 className="mx-md-5 mx-2 text-warning">{countTotalCartItems(cartCount)} <i className="fas fa-shopping-cart px-2" />Cart</h3>
          </Link>
          <Link to="/orders">
            <h3 className="mx-md-5 mx-2">Orders</h3>
          </Link>
          <Link to="/add">
            <button className="btn btn-success">
              <span>Add Product</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Header