import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router";

import { countTotalCartItems } from '../../utility'

const Header = ({ drawerClickHandler }) => {
  const location = useLocation();
  const cartCount = useSelector(({ shop }) => shop.cartList)

  const hideHeaderRoutes = [
    '/login',
    '/signup',
  ]
  return (
    <>
      <div
        className={`row mx-0 w-100 fixed-top py-2 desktop-header 
           header-white
            d-flex align-items-center`}
      >
        <div className="col-md-6 col-12 px-md-5 px-0 text-left d-flex align-items-center justify-content-between">
          <Link to='/'>
            <img
              alt="avtar"
              src={require("../../assets/images/logo.svg").default}
              className="img-fluid"
              width="220"
            />
          </Link>
        </div>
        {
          !hideHeaderRoutes.includes(location.pathname) &&
          <div className="col-md-6 col-12 px-md-2 px-0 text-right d-flex justify-content-end">
            {/* <Link to="/cart"> */}
            <h3 onClick={() => drawerClickHandler()} className="mx-md-5 mx-2 text-primary">{countTotalCartItems(cartCount)} <i className="fas fa-shopping-cart px-2" /></h3>
            {/* </Link> */}
            <Link to="/orders">
              <h3 className="mx-md-5 mx-2">Orders</h3>
            </Link>
            <Link to="/add">
              <button className="btn btn-success">
                <span>Add Product</span>
              </button>
            </Link>
          </div>
        }
      </div>
    </>
  )
}
export default Header