import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteCartItem } from '../actionCreators'
import { toast } from 'react-toastify'

const Cart = () => {
  const dispatch = useDispatch()

  const cartList = useSelector(({ shop }) => shop.cartList)
  const [total, setTotal] = useState(0)


  useEffect(() => {
    let t = 0
    if (cartList) {
      cartList.map((item) => {
        t = t + item.price
      })
    }
    setTotal(t)
  }, [cartList])

  const handleRemoveFromCart = (item) => {
    dispatch(deleteCartItem(item))
    toast.error('Item removed from cart')
  }

  return (
    <>
      <div className="row p-md-5 p-2 m-0 d-flex justify-content-center">
        <div className="col-md-6 col-12 border p-md-4 p-2">
          <h1 className="text-center">Cart Items</h1>
          {cartList && cartList.length ? cartList.map((item, i) => (
            <div className="row m-0 p-2" key={i}>
              <div className="col-2 d-flex align-items-center">
                <img
                  src={item.image}
                  alt="loading.."
                  className="image img-fluid"
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <h6 className="mb-0">{item.title}</h6>
              </div>
              <div className="col-3 text-center d-flex align-items-center">
                <h6 className="text-primary mb-0">{item.price} $</h6>
              </div>
              <div className="col-1 d-flex align-items-center">
                <i onClick={() => handleRemoveFromCart(item)} className="fal fa-times text-danger" />
              </div>
            </div>
          ))
            :
            <h6 className="text-center">Cart Empty</h6>
          }
          {
            cartList && cartList.length ?
              <div className="row p-4 bg-dark align-items-center">
                <div className="col-8">
                  <h3 className="text-white">Total</h3>
                </div>
                <div className="col-4 text-center">
                  <h6 className="text-success">{total} $</h6>
                </div>
              </div>
              :
              ""
          }
        </div>
      </div>

    </>
  )
}

export default Cart