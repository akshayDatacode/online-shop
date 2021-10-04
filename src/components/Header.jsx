import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
      <div className="row m-0 bg-dark p-3">
        <div className="col-12 text-left d-flex justify-content-between">
          <Link to='/'><h1 className="text-white">Online Shop</h1></Link>
          <div className="">
            <Link to="/cart">
              <span className="mx-5"><i className="fas fa-shopping-cart" />Cart</span>
            </Link>
            <Link to="/add">
              <button className="btn btn-success">
                <span>Add Product</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header