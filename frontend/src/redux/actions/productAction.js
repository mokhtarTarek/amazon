import axios from 'axios'
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SECCESS } from '../constants/productsConstants'
//action creator : async function 
const listProducts = ()=>async (dispatch)=>{
try {
    dispatch({type:PRODUCT_LIST_REQUEST})
     await axios
    .get('/api/products')
    .then(response=>{
        const products = response.data
        dispatch({type:PRODUCT_LIST_SECCESS, payload: products }) 
    })
    
} catch (error) {
    dispatch({type: PRODUCT_LIST_FAIL,payload:error.message})
}
}

const detailsProduct = (productId)=>async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
       await axios
       .get(`/api/products/${productId}`)
       .then (response=>{

           const product = response.data
           
           dispatch({type: PRODUCT_DETAILS_SUCCESS,payload:product})
       })
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL,payload:error.message})//error is an obj sended from the server
    }
}
export {listProducts,detailsProduct}