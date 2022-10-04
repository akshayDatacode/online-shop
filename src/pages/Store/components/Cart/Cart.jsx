import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import BootstrapTable from 'react-bootstrap-table-next'

import { deleteCartItem, clearCart, setQuantity, addOrder } from '../../actions'
import CompleteOrderModal from './CompleteOrderModal'
import { getColumns, daysCodeList } from './helpers'

const Cart = ({
  backDropClickHandler
}) => {
  const dispatch = useDispatch()

  const cartList = useSelector(({ shop }) => shop.cartList)
  const [total, setTotal] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [tempUserEmail, setTempUserEmail] = useState()
  const [showCross, setShowCross] = useState(false)

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
      <div className="row p-2 m-0">
        <div className="col-12 border p-0">
          <div className="cart-list">
            {cartList && cartList.length ?
              // <div className="table table-responsive">
              //   <BootstrapTable
              //     keyField='id'
              //     bordered={true}
              //     data={cartList}
              //     columns={columns}
              //     search
              //     hover={true}
              //   />
              // </div>
              cartList.map((item, i) => (
                <div className="row mx-0 my-4 pb-2 border-bottom" onMouseLeave={() => setShowCross(false)} onMouseEnter={() => setShowCross(i)} key={i}>
                  <div className="col-4">
                    <img
                      src={item.image}
                      className="rounded-circle"
                      height="50"
                      width="50"
                      alt="loading..."
                    />
                  </div>
                  <div className="col-8">
                    <div className="d-flex justify-content-between">
                      <h6>{item.title}</h6>
                      {
                        showCross === i &&
                        <i
                          onClick={() => handleRemoveFromCart(item)}
                          className="fal fa-times text-danger"
                        />
                      }
                    </div>
                    <span className="text-success">₹{item.price}</span>
                    <div className="counter-toggle">
                      {item.quantity > 1 && (
                        <span
                          className="px-1 text-white bg-danger rounded cursor-pointer"
                          onClick={() => handleSetQuantity(item.quantity - 1, item._id)}
                        >
                          -
                        </span>
                      )}
                      <span className="px-2">{item.quantity}</span>
                      <span
                        className="px-1 text-white bg-primary rounded cursor-pointer"
                        onClick={() => handleSetQuantity(item.quantity + 1, item._id)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              ))
              :
              <div className="d-flex align-items-center my-5">
                {
                  !tempUserEmail &&
                  <h6 className="text-center">Cart Empty Please,
                    <span className="mx-2" onClick={() => backDropClickHandler()}><Link to="/">Add Item into Cart</Link></span>
                  </h6>
                }
              </div>
            }
          </div>
          {
            cartList && cartList.length ?
              <>
                <div className="row mx-0 py-2 px-4 bg-dark align-items-center">
                  <div className="col-8">
                    <h6 className="mb-0 text-white">Sub Total</h6>
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="mb-0 text-success text-nowrap">{total} $</h6>
                  </div>
                </div>
                <div className="row m-0 p-md-3 mt-3" >
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