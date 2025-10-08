import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { deleteCartItem, clearCart, setQuantity } from '../../actions';
import { addOrder, completeCartOrder } from '../../actions';
import CompleteOrderModal from './CompleteOrderModal';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({ backDropClickHandler }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(({ shop }) => shop.cartList);
  
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [tempUserEmail, setTempUserEmail] = useState('');
  const [showCross, setShowCross] = useState(false);

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
      const [addResponse, completeResponse] = await Promise.all([
        addOrder(orderData),
        completeCartOrder(orderData)
      ]);

      if (addResponse && completeResponse) {
        dispatch(clearCart());
        toggleModal();
      }
    } catch (error) {
      toast.error('Failed to complete order. Please try again.');
    }
  }, [cartList, total, dispatch, toggleModal]);

  const handleSetQuantity = useCallback((qty, id) => {
    dispatch(setQuantity({ qty, id }));
  }, [dispatch]);

  const renderEmptyCart = () => (
    <div className="d-flex align-items-center my-5">
      {!tempUserEmail && (
        <h6 className="text-center">
          Cart Empty Please,
          <span className="mx-2" onClick={backDropClickHandler}>
            <Link to="/">Add Item into Cart</Link>
          </span>
        </h6>
      )}
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className="row mx-0">
      <div className="col-12 text-center">
        <h3>Thanks for Shopping with us!</h3>
        <small>Your invoice will be sent to your email</small>
        <p><Link to="/">Order Again</Link></p>
      </div>
    </div>
  );

  return (
    <div className="row p-2 mx-0">
      <div className="col-12 border p-0">
        <div className="cart-list">
          {cartList?.length ? (
            cartList.map((item, i) => (
              <CartItem
                key={item._id}
                item={item}
                showCross={showCross === i}
                onMouseLeave={() => setShowCross(false)}
                onMouseEnter={() => setShowCross(i)}
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleSetQuantity}
              />
            ))
          ) : (
            renderEmptyCart()
          )}
        </div>

        {cartList?.length > 0 && (
          <CartTotal 
            total={total} 
            onComplete={toggleModal}
          />
        )}

        {tempUserEmail && renderOrderConfirmation()}
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

Cart.propTypes = {
  backDropClickHandler: PropTypes.func.isRequired
};

export default Cart;