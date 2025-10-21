import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";

import { countTotalCartItems } from '../../utility'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../pages/User/actions';

const Header = ({ drawerClickHandler }) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const cartCount = useSelector(({ shop }) => shop.cartList)
  const { currentUser } = useSelector(({ user }) => user) || {}

  const hideHeaderRoutes = [
    '/login',
    '/signup',
  ]
  const logout = () => {
    dispatch(setLogoutUser())
    history.push('/')
  }

  return (
    <>
      <div
        className={`row mx-0 w-100 fixed-top 
           header-white`}
      >
        <div className="col-md-6 col-12 px-md-5 px-0 text-left d-flex align-items-center justify-content-between">
          <Link to='/'>
            {/* <img
              alt="avtar"
              src={require("../../assets/images/logo.svg").default}
              className="img-fluid"
              width="220"
            /> */}
            <h1>Online Shop</h1>
          </Link>
        </div>
        <div className="col-md-6 col-12 px-md-2 px-0 text-right d-flex align-items-center justify-content-end">
          {
            (currentUser?.email) ?
              <>
                {/* <Link to="/cart"> */}
                <h3 onClick={() => drawerClickHandler()} className="mx-md-5 mx-2 mb-0 text-primary">{countTotalCartItems(cartCount)} <i className="fas fa-shopping-cart" /></h3>
                {/* </Link> */}

                <UncontrolledDropdown setActiveFromChild>
                  <DropdownToggle
                    caret
                    // className="nav-link"
                    tag="span"
                  >
                    <span>{currentUser?.email}</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link to="/add">
                      <DropdownItem
                        tag="span"
                      >
                        Add Product
                      </DropdownItem>
                    </Link>
                    <Link to="/orders">
                      <DropdownItem
                        tag="span"
                      >
                        <span>Orders</span>
                      </DropdownItem>
                    </Link>
                    <DropdownItem
                      tag="span"
                      onClick={() => logout()}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
              :
              <>
                <Link to="/signup">
                  <button className="btn btn-primary">
                    <span>Sign UP</span>
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-primary mx-2">
                    <span>Login</span>
                  </button>
                </Link>
              </>
          }
        </div>
      </div>
    </>
  )
}
export default Header