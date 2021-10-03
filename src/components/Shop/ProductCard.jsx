import React from 'react'

const ProductCard = ({
  product, i
}) => {
  return (
    <>
      <div key={i} className="col-3 p-3 border card-schadow rounded-lg">
        <img
          src={require(`../../assets/editIcon.png`).default}
        />
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <h6>{product.price}</h6>
        <button type="button">
          Add to Cart
        </button>
      </div>
    </>
  )
}
export default ProductCard