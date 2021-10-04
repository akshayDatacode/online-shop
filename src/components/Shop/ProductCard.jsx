import React from 'react'

const ProductCard = ({
  product, i, handleAddToCart
}) => {
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
          <h6 className="my-3 text-success"><i className="fas fa-money-bill-wave" /> {product.price} $</h6>
          <button onClick={() => handleAddToCart(product)} type="button" className="btn btn-sm btn-primary">
            <span><i className="fas fa-plus" /> Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default ProductCard