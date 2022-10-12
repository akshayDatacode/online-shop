import React, { useState } from "react";
import Header from "./Header";
import CartDrawer from "./Header/CartDrawer";
import BackDrop from "./Header/BackDrop";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setCartDrawerOpen((prevState) => {
      return !prevState.cartDrawerOpen;
    });
  };

  const backDropClickHandler = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  let backDrop;

  if (cartDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <>
      <ToastContainer />
      {/* <Header drawerClickHandler={drawerToggleClickHandler} />
      <CartDrawer
        show={cartDrawerOpen}
        backDropClickHandler={backDropClickHandler}
      /> */}
      {backDrop}
      <AppRoutes />
    </>
  );
};

export default App;
