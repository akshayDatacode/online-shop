import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'

import { getOrder } from '../../actions/apiServices'

const ProductPage = ({
  match: {
    params: { id },
  },
}) => {
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    getOrder(id).then((res) => {
      if (res.success) {
        setProductDetails(res.data)
      }
    })
  }, [])

  return (
    <>
      <h1>ProductPage</h1>
      {
        productDetails ?
          <h1 className="text-center">Loading...</h1>
          :
          <div className="row mx-0">
            <div className="col-md-6 col-12 ">

            </div>
            <div className="col-md-6 col-12 ">

            </div>
          </div>
      }
    </>
  )
}

export default ProductPage