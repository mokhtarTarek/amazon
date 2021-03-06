//reducer func take 2 params :
// 1 the initial state
import {PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,
     PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS,
     PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SECCESS,
     PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SECCESS}from "../constants/productsConstants"

// 2 action type
function productListReducer(state={loading:true,products:[]},action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST :
            return {loading : true};
        case PRODUCT_LIST_SECCESS :
            return {loading : false, products : action.payload};
        case PRODUCT_LIST_FAIL :
            return {loading: false, error: action.payload}
        default :
        return state;
    }
} 
function productDetailReducer(state={product:{}},action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST :
            return {loading : true};
        case PRODUCT_DETAILS_SUCCESS :
            return {loading : false, product : action.payload};
        case PRODUCT_DETAILS_FAIL :
            return {loading: false, error: action.payload}
        default :
        return state;
    }
} 
function productSaveReducer(state={product:{}},action){
    switch(action.type){
        case PRODUCT_SAVE_REQUEST :
            return {loading : true};
        case PRODUCT_SAVE_SUCCESS :
            return {loading : false,success:true, product : action.payload};
        case PRODUCT_SAVE_FAIL :
            return {loading: false, error: action.payload}
        default :
        return state;
    }
} 
function productDeleteReducer(state={product:{}},action){
    switch(action.type){
        case PRODUCT_DELETE_REQUEST :
            return {loading : true};
        case PRODUCT_DELETE_SECCESS :
            return {loading : false,success:true, product : action.payload};
        case PRODUCT_DELETE_FAIL :
            return {loading: false, error: action.payload}
        default :
        return state;
    }
} 
export {productListReducer,productDetailReducer,productSaveReducer,productDeleteReducer}