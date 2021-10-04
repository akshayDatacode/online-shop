import React, { useState } from 'react'

const ProductCard = ({
  product, i, handleAddToCart
}) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <div key={i} className="col-md-3 col-12 p-3">
        <div className="border shadow rounded-lg p-3">
          <img
            src={product.image}
            alt="loading.."
            className="image img-fluid"
          />
          <h5>{product.title}</h5>
          <small>{product.description}</small>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="my-3 text-success"><i className="fas fa-money-bill-wave" /> {product.price} $</h6>
            <div className="">
              {quantity > 1 && <span className="px-1 text-white bg-danger rounded cursor-pointer" onClick={() => setQuantity(quantity - 1)}>-</span>}<span className="px-2">{quantity}</span><span className="px-1 text-white bg-primary rounded cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</span>
            </div>
          </div>

          <button onClick={() => handleAddToCart(product, quantity)} type="button" className="btn btn-sm btn-primary">
            <span><i className="fas fa-plus" /> Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default ProductCard