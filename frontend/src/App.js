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
  //GET CARTiTEMS FROM REDUX STORE
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  //GET USER INFOS FROM REDUX STORE
  //const userSignin = useSelector((state) => state.userSignIn);
  //DESTRUCTURE
  //const { userInfos } = userSignin;
 
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
          <Link className="brand" to="/">
            amazon
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart
            {
              cartItems.length > 0 &&
              <span className='badge' > {cartItems.length} </span>
            }
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <main>
        <Route path='/cart/:id' component={CartScreen}></Route>
        <Route path='/products/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>


      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
