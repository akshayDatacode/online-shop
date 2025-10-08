import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ total, onComplete }) => (
  <>
    <div className="row mx-0 py-2 px-4 bg-dark align-items-center">
      <div className="col-8">
        <h6 className="mb-0 text-white">Sub Total</h6>
      </div>
      <div className="col-4 text-center">
        <h6 className="mb-0 text-success text-nowrap">
          {total} <i className="fal fa-rupee-sign" />
        </h6>
      </div>
    </div>
    <div className="row mx-0 p-md-3 mt-3">
      <div className="col-12 text-center">
        <button 
          onClick={onComplete} 
          className="btn btn-success"
        >
          Complete Order
        </button>
      </div>
    </div>
  </>
);

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default CartTotal;