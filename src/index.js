import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { setupAxiosInterceptors } from "./core/axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./core/store";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/style.scss";
import "./assets/scss/cart-drawer.scss";
import './assets/scss/user.scss';
import './assets/scss/product-page.scss'

import 'react-rangeslider/lib/index.css'
import "react-widgets/styles.css";


setupAxiosInterceptors();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
