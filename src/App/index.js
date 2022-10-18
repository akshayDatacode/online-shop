import React, { useEffect, useState } from "react";
import Header from "./Header";
import CartDrawer from "./Header/CartDrawer";
import BackDrop from "./Header/BackDrop";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { setLoginUser, setLogoutUser } from "../pages/User/actions";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch()
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token')
    debugger
    if (token !== 'null' && token !== null) {
      try {
        let user = jwtDecode(token)
        if (user.exp * 1000 < Date.now()) {
          dispatch(setLogoutUser());
          toast.error('Token Expired', {
            position: toast.POSITION.TOP_CENTER
          })
        } else if (user?.email) {
          dispatch(setLoginUser(token))
        } else {
          toast.error('Token Invalid', {
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (err) {
        toast.error('Token Invalid', {
          position: toast.POSITION.TOP_CENTER
        })
      }
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
