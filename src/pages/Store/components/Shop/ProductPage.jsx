import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getProduct } from '../../actions/apiServices'

const ProductPage = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch()
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    dispatch(getProduct(id)).then((res) => {
      if (res.success) {
        debugger
        setProductDetails(res.data.product)
      }
    })
  }, [])

  return (
    <>
      <h1>ProductPage</h1>
      <div className="row mx-0">
        <div className="col-6">
          <img
            src={productDetails.image ? productDetails.image : process.env.REACT_APP_DEFAULT_IMAGE}
            alt="loading.."
            className="mx-auto my-auto image img-fluid"
            sizes="(min-width: 1122px) 296px,(min-width: 866px) 218px,(max-width: 610px) 202px,202px"
          />
        </div>
        <div className="col-6">
          <h1>{productDetails.title}</h1>
          <p>{productDetails.description}</p>
          <h6>{productDetails.price}</h6>
        </div>
      </div>
    </>
  )
}

export default ProductPage