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
        setProductDetails(res.data.product)
      }
    })
  }, [])

  return (
    <>
      <div className="row mx-0">
        <div className="col-6 p-5 d-flex align-items-center">
          <img
            src={productDetails.image ? productDetails.image : process.env.REACT_APP_DEFAULT_IMAGE}
            alt="loading.."
            loading='lazy'
            className="mx-auto my-auto image img-fluid product-img"
            sizes="(min-width: 1122px) 296px,(min-width: 866px) 218px,(max-width: 610px) 202px,202px"
          />
        </div>
        <div className="col-6 product-details d-flex align-items-center">
          <div className="">
            <h1>{productDetails.title}</h1>
            <p>{productDetails.description}</p>
            <h6>{productDetails.price}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage