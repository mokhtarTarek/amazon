import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from'redux-thunk'
import Cookie from 'js-cookie'
import { cartReducer } from "./reducers/cartReducers";
import { productListReducer,productDetailReducer } from "./reducers/productsReducers";

// IMPORT CART ITEMS FROM COOKIES
const cartItems = Cookie.getJSON("cartItems") || []
const initialState = {cart:{cartItems}};

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store; 