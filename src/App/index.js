import React, { useEffect, useState } from "react";
import Header from "./Header";
import CartDrawer from "./Header/CartDrawer";
import BackDrop from "./Header/BackDrop";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { setLoginUser } from "../pages/User/actions";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch()
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token')
    try {
      let user = jwtDecode(token)
      if (user?.email) {
        dispatch(setLoginUser(token))
      }
    } catch (err) {
      toast.error('Token Invalid', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }, [])

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
