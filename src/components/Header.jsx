import React from 'react'

const Header = () => {
  return (
    <>
      <div className="row m-0 bg-dark p-3">
        <div className="col-12 text-left d-flex justify-content-between">
          <h1 className="text-white">Online Shop</h1>
          <button className="btn btn-success">
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Header