import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, showCross, onMouseEnter, onMouseLeave, onRemove, onUpdateQuantity }) => (
  <div 
    className="row mx-0 my-4 pb-2 border-bottom" 
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
  >
    <div className="col-4">
      <img
        src={item.image}
        className="rounded-circle"
        height="50"
        width="50"
        loading='lazy'
        alt={item.title}
      />
    </div>
    <div className="col-8">
      <div className="d-flex justify-content-between">
        <h6>{item.title}</h6>
        {showCross && (
          <i
            onClick={() => onRemove(item)}
            className="fal fa-times text-danger"
            role="button"
            aria-label="Remove item"
          />
        )}
      </div>
      <span className="text-success">₹{item.price}</span>
      <div className="counter-toggle">
        {item.quantity > 1 && (
          <button
            className="px-1 text-white bg-danger rounded cursor-pointer"
            onClick={() => onUpdateQuantity(item.quantity - 1, item._id)}
            aria-label="Decrease quantity"
          >
            -
          </button>
        )}
        <span className="px-2">{item.quantity}</span>
        <button
          className="px-1 text-white bg-primary rounded cursor-pointer"
          onClick={() => onUpdateQuantity(item.quantity + 1, item._id)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  showCross: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
};

export default CartItem;