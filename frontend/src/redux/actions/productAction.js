import axios from "axios";
//import { jwt } from "jsonwebtoken";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SECCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SECCESS,
} from "../constants/productsConstants";

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    //destructuring data from the server response // data:[]
    const  {data}  = await axios.get("/api/products");
    
    dispatch({ type: PRODUCT_LIST_SECCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST,payload:productId });
    const  {data}  = await axios.get(`/api/products/${productId}`);

    
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    //console.log(getState())
    const {
      userSignIn: { userInfos },
    } = getState();
    //if product not exist
    if (!product._id) {
      const { data } = await axios
        //post and put methode take body and header
        //as second and theard params
        .post("/api/products", product, {
          headers: {
            Authorization: "Bearer " + userInfos.token,
          },
        });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        "/api/products/" + product._id,
        product,
        {
          headers: {
            Authorization: "Bearer " + userInfos.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfos },
    } = getState();
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });

    const { data } = await axios.delete("/api/products/" + productId, {
      headers: {
        Authorization: "Bearer " + userInfos.token,
      },
    });
    dispatch({ type: PRODUCT_DELETE_SECCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

export { listProducts, detailsProduct, saveProduct, deleteProduct };
