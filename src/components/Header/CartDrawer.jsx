import React, { useState } from "react";

const CartDrawer = ({
  backDropClickHandler,
  show,
}) => {

  let drawerClasses = "cart-drawer";
  if (show) {
    drawerClasses = "row m-0 cart-drawer open";
  }

  return (
    <>
      <div className={drawerClasses}>
        <div className="col-12 p-0">
          <div className="row m-0 mt-md-0 mt-4 side-header">
            <div className="col-12">
              <h1>Cart Items</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
