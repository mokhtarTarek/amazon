import React from 'react'

import { BrowserRouter, Link, Route } from "react-router-dom";

import "./App.css";
import ProductScreen from './components/ProductScreen';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to = "/">amazona</Link>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Sopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      {/* the parent compo*/}
      {/*in this main tag the chiled components will be rendred relative to routes path */}
      <main className="main">
        <div className="content">
          <Route path="/products/:id" component = {ProductScreen} />
          {/* :id? the id is optional */}
          <Route path='/cart/:id?' component = {CartScreen}/>
          <Route path="/" exact={true} component = {HomeScreen} />
        </div>
      </main>

      <footer className="footer">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
