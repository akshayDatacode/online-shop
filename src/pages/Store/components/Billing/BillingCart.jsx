import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

import { deleteCartItem, clearCart, setQuantity } from '../../actions';
import CompleteOrderModal from './CompleteOrderModal';
import { addOrder } from '../../../actions/apiServices';
import { getColumns } from './helpers';

const EmptyCart = () => (
  <h6 className="text-center">
    Cart Empty Please,
    <span className="mx-2">
      <Link to="/">Add Item into Cart</Link>
    </span>
  </h6>
);

const OrderConfirmation = () => (
  <div className="row">
    <div className="col-12 text-center">
      <h3>Thanks for Shopping with us!</h3>
      <small>Your invoice will be sent to your email</small>
      <p><Link to="/">Order Again</Link></p>
    </div>
  </div>
);

const CartTotal = ({ total }) => (
  <div className="row py-2 px-4 bg-dark align-items-center">
    <div className="col-8">
      <h6 className="text-white">Total</h6>
    </div>
    <div className="col-4 text-center">
      <h6 className="text-success">
        {total} <i className="fal fa-rupee-sign" />
      </h6>
    </div>
  </div>
);

const BillingCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(({ shop }) => shop.cartList);
  
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [tempUserEmail, setTempUserEmail] = useState('');

  useEffect(() => {
    if (cartList) {
      const newTotal = cartList.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0);
      setTotal(newTotal);
    }
  }, [cartList]);

  const handleRemoveFromCart = useCallback((item) => {
    dispatch(deleteCartItem(item));
    toast.error('Item removed from cart', {
      position: toast.POSITION.TOP_CENTER
    });
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setOpenModal(prev => !prev);
  }, []);

  const handleConfirmOrder = useCallback(async (email) => {
    setTempUserEmail(email);
    const orderData = { email, cartList, total };
    
    try {
      const response = await addOrder(orderData);
      if (response) {
        dispatch(clearCart());
        toggleModal();
      }
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  }, [cartList, total, dispatch, toggleModal]);

  const handleSetQuantity = useCallback((qty, id) => {
    dispatch(setQuantity({ qty, id }));
  }, [dispatch]);

  const columns = getColumns(handleRemoveFromCart, handleSetQuantity);
  const hasItems = cartList && cartList.length > 0;

  return (
    <div className="row p-2 m-0">
      <div className="col-12 border p-md-4 p-2">
        <h3 className="text-center">
          {tempUserEmail ? "Order Confirmed" : "Cart Items"}
        </h3>

        {hasItems ? (
          <>
            <div className="table table-responsive">
              <BootstrapTable
                keyField="id"
                bordered
                data={cartList}
                columns={columns}
                search
                hover
              />
            </div>
            <CartTotal total={total} />
            <div className="row m-0 p-md-3 my-3">
              <div className="col-12 text-center">
                <button 
                  onClick={toggleModal} 
                  className="btn btn-success"
                >
                  Complete Order
                </button>
              </div>
            </div>
          </>
        ) : (
          !tempUserEmail && <EmptyCart />
        )}

        {tempUserEmail && <OrderConfirmation />}
      </div>

      <CompleteOrderModal
        open={openModal}
        total={total}
        toggle={toggleModal}
        onSubmit={handleConfirmOrder}
      />
    </div>
  );
};

CartTotal.propTypes = {
  total: PropTypes.number.isRequired
};

export default BillingCart;