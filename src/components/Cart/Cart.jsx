import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import BootstrapTable from 'react-bootstrap-table-next'

import { deleteCartItem, clearCart, setQuantity } from '../actionCreators'
import CompleteOrderModal from './CompleteOrderModal'
import { addOrder } from '../../apiServices'
import { getColumns, daysCodeList } from './helpers'

const Cart = () => {
  const dispatch = useDispatch()

  const cartList = useSelector(({ shop }) => shop.cartList)
  const [total, setTotal] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [tempUserEmail, setTempUserEmail] = useState()

  useEffect(() => {
    let t = 0
    if (cartList) {
      cartList.map((item) => {
        t = t + (item.price * item.quantity)
      })
    }
    setTotal(t)
  }, [cartList])

  const handleRemoveFromCart = (item) => {
    dispatch(deleteCartItem(item))
    toast.error('Item removed from cart', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmOrder = (email) => {
    setTempUserEmail(email)
    // setUserAction(action)

    const data = {
      email,
      cartList,
      total,
    }
    addOrder(data).then((res) => {
      if (res) {
        dispatch(clearCart())
        setOpenModal(!openModal)
      }
    })
  }

  const handleSetQuantity = (qty, id) => {
    return dispatch(setQuantity({ qty, id }))
  }

  let columns = getColumns(handleRemoveFromCart, handleSetQuantity)

  return (
    <>
      <div className="row mt-5 p-md-5 p-2 m-0 d-flex justify-content-center">
        <div className="col-md-6 col-12 border p-md-4 p-2">
          <h3 className="text-center">{tempUserEmail ? "Order Confirmed" : "Cart Items"}</h3>
          {cartList && cartList.length ?
            <div className="table table-responsive">
              <BootstrapTable
                keyField='id'
                bordered={true}
                data={cartList}
                columns={columns}
                search
                hover={true}
              />
            </div>
            :
            <>
              {
                !tempUserEmail &&
                <h6 className="text-center">Cart Empty Please,
                <span className="mx-2"><Link to="/">Add Item into Cart</Link></span>
                </h6>
              }
            </>
          }
          {
            cartList && cartList.length ?
              <>
                <div className="row py-2 px-4 bg-dark align-items-center">
                  <div className="col-8">
                    <h6 className="text-white">Total</h6>
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="text-success">{total} $</h6>
                  </div>
                </div>
                <div className="row m-0 p-md-3 my-3" >
                  <div className="col-12 text-center">
                    <button onClick={() => toggleModal()} className="btn btn-success">Complete Order</button>
                  </div>
                </div>
              </>
              :
              ""
          }
          {
            tempUserEmail &&
            <div className="row">
              <div className="col-12 text-center">
                <h3>Thanks for Shopping with us!</h3>
                <small>Your invoice will send to your email</small>
                <p><Link to="/">Order Again</Link></p>
              </div>
            </div>
          }
        </div>
        <CompleteOrderModal
          open={openModal}
          total={total}
          toggle={toggleModal}
          onSubmit={handleConfirmOrder}
        />
      </div>
    </>
  )
}

export default Cart