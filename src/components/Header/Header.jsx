import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router";

import { countTotalCartItems } from '../../utility'

const Header = ({ drawerClickHandler }) => {
  const location = useLocation().pathname;
  const urlList = [
    "/cart",
    '/add'
  ];

  const cartCount = useSelector(({ shop }) => shop.cartList)
  const [header, setHeader] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 10) {
      return setHeader("");
    } else if (window.scrollY > 10) {
      return setHeader("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      {/* className="row m-0 bg-dark p-3 align-items-center " */}
      <div
        className={`row mx-0 w-100 fixed-top py-2 desktop-header ${
          urlList.includes(location)
            ? "header-white"
            : "main-header"
          } ${header} d-flex align-items-center`}
      >
        <div className="col-md-6 col-12 px-md-5 px-0 text-left d-flex align-items-center justify-content-between">
          <Link to='/'>
            {header === "sticky" ||
              urlList.includes(location) ? (
                <img
                  alt="avtar"
                  src={require("../../assets/images/logo.svg").default}
                  className="img-fluid"
                  width="220"
                />
              ) : (
                <img
                  alt="avtar"
                  src={require("../../assets/images/logo-white.svg").default}
                  className="img-fluid"
                  width="220"
                />
              )}
          </Link>
        </div>
        <div className="col-md-6 col-12 px-md-2 px-0 text-right d-flex justify-content-end">
          {/* <Link to="/cart"> */}
          <h3 onClick={() => drawerClickHandler()} className="mx-md-5 mx-2 text-warning">{countTotalCartItems(cartCount)} <i className="fas fa-shopping-cart px-2" />Cart</h3>
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
      </div>
    </>
  )
}
export default Header