import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from'redux-thunk'
import { cartReducer } from "./reducers/cartReducers";
import { productListReducer,productDetailReducer } from "./reducers/productsReducers";
const initialState = {};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store; 