import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { handleTextVisibility } from '../../../../utility'
import { useEffect } from 'react'

const ProductCard = ({
  product, i, handleAddToCart
}) => {
  const cartList = useSelector(({ shop }) => shop.cartList)

  const [quantity, setQuantity] = useState(1)

  const added = cartList.findIndex((item) => item._id === product._id) !== -1

  useEffect(() => {
    if (added) {
      setQuantity(1)
    }
  }, [added])

  return (
    <>
      <div key={i} className="col-md-3 col-12 px-2 mb-3 product-card">
        <div className="border shadow rounded-lg p-3 card h-100 ">
          <div className="card-image mb-3">
            <img
              src={product.image}
              alt="loading.."
              className="mx-auto my-auto image img-fluid"
              sizes="(min-width: 1122px) 296px,(min-width: 866px) 218px,(max-width: 610px) 202px,202px"
            />
          </div>
          <div className="card-body p-0">
            <h5>{product.title}</h5>
            <small>{handleTextVisibility(product.description, 50)}</small>
          </div>
          <div className="footer card-footer p-0 border-none border-top-0">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="my-3 text-success"><i className="fas fa-money-bill-wave" /> {product.price} $</h6>
              {
                !added ?
                  <div className="">
                    {quantity > 1 && <span className="px-1 text-white bg-danger rounded cursor-pointer" onClick={() => setQuantity(quantity - 1)}>-</span>}<span className="px-2">{quantity}</span><span className="px-1 text-white bg-primary rounded cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</span>
                  </div> :
                  <span className="text-primary">check cart</span>
              }
            </div>
            {
              added ?
                <button type="button" disabled className="btn btn-sm btn-primary">
                  <span><i className="fas fa-check" /> Added to Cart </span>
                </button>
                :
                <button onClick={() => handleAddToCart(product, quantity)} type="button" className="btn btn-sm btn-primary">
                  <span><i className="fas fa-plus" /> Add to Cart </span>
                </button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductCard