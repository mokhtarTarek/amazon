import React from "react";

import { BrowserRouter, Link, Route } from "react-router-dom";

//import "./App.css";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

//import SigninScreen from "./components/SigninScreen";
//import RegisterScreen from "./components/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import { signOut } from "./redux/actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAdressScreen from "./screens/ShippingAdressScreen";

//import ShippingScreen from "./components/ShippingScreen";
//import PaymentScreen from "./components/PayementScreen";
//import PlaceOrder from "./components/PlaceOrder";


function App() {
  
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfos } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler=()=>{
    dispatch(signOut())
 }
 
  // const openMenu = () => {
  //   document.querySelector(".sidebar").classNameList.add("open");
  // };
  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classNameList.remove("open");
  // };

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
          {
           
            userInfos? 
             <div className ='dropdown' >
               
            <Link to="#"> {userInfos.name}
             <i className='fa fa-caret-down'></i>{' '} 
             </Link>
              
              <ul className='dropdown-content'>
               
                <Link to='#signout' 
                onClick={signoutHandler}>Sign Out</Link>
              </ul>

            </div>

            :<Link to="/signin"> Sign In </Link>
            
          }
          
        </div>
      </header>

      <main>
        <Route path='/cart/:id?' component={CartScreen}exact></Route>
        <Route path='/products/:id' component={ProductScreen} exact ></Route>
        <Route path='/signin' component={SigninScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/shipping' component={ShippingAdressScreen}></Route>

        <Route path='/' component={HomeScreen}exact></Route>


      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
