import React from 'react'

const ProductCard = ({
  product, i, handleAddToCart
}) => {
  return (
    <>
      <div key={i} className="col-3 p-3">
        <div className="border shadow rounded-lg p-3">
          <img
            src={require(`../../assets/uploadPlus.png`).default}
          />
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <h6><i className="fas fa-money-bill-wave" /> {product.price}</h6>
          <button onClick={() => handleAddToCart(product)} type="button" className="btn btn-sm btn-primary">
            <span><i className="fas fa-plus" /> Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default ProductCard