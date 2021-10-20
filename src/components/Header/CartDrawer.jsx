import React, { useState } from "react";
import Cart from "../Store/Cart/Cart";

const CartDrawer = ({
  backDropClickHandler,
  show,
}) => {

  let drawerClasses = "cart-drawer";
  if (show) {
    drawerClasses = "row m-0 cart-drawer open h-100";
  }

  return (
    <>
      <div className={drawerClasses}>
        <div className="col-12 p-0">
          <div className="row m-0 p-4 bg-secondary side-header">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <i onClick={() => backDropClickHandler()} className="far fa-chevron-right mr-5" />
              <h4 className="mb-0">Cart Items</h4>
            </div>
          </div>
          <Cart backDropClickHandler={backDropClickHandler} />
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
