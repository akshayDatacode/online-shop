import React, { useState } from "react";
import Header from "./components/Header/Header";
import CartDrawer from "./components/Header/CartDrawer";
import BackDrop from "./components/Header/BackDrop";
import AppRoutes from "./components/AppRoutes";
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
      <Header drawerClickHandler={drawerToggleClickHandler} />
      <CartDrawer
        show={cartDrawerOpen}
        backDropClickHandler={backDropClickHandler}
      />
      {backDrop}
      <AppRoutes />
    </>
  );
};

export default App;
