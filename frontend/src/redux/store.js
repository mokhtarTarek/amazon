import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from'redux-thunk'
import Cookie from 'js-cookie'
import { cartReducer } from "./reducers/cartReducers";
import { productListReducer,productDetailReducer,
productSaveReducer, productDeleteReducer } from "./reducers/productsReducers";
import { userSigninReducers } from "./reducers/userReducers";
import { userRegisterReducers } from "./reducers/userReducers";

// IMPORT CART ITEMS AND USERINFOS FROM COOKIES
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfos = Cookie.getJSON("userInfos") || null;

const initialState = {cart:{cartItems},userSignIn:{userInfos}};

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
    userSignIn:userSigninReducers,
    userRegister:userRegisterReducers,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store; 