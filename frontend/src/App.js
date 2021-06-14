import React from "react";

import { BrowserRouter, Link, Route } from "react-router-dom";

//import "./App.css";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

import SigninScreen from "./components/SigninScreen";
import RegisterScreen from "./components/RegisterScreen";
import { useSelector } from "react-redux";

import ShippingScreen from "./components/ShippingScreen";
import PaymentScreen from "./components/PayementScreen";
import PlaceOrder from "./components/PlaceOrder";


function App() {
  //GET USER INFOS FROM REDUX STORE
  const userSignin = useSelector((state) => state.userSignIn);
  //DESTRUCTURE
  const { userInfos } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classNameList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classNameList.remove("open");
  };

  return (<BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <main>
        <Route path = '/cart/:id' component={CartScreen}></Route>
        <Route path = '/products/:id'  component={ProductScreen}></Route>
        <Route path = '/'  component={HomeScreen} exact></Route>

        
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
