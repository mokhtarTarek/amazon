import axios from "axios";
//import Cookies from 'js-cookie'
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

const register = (name, email, password) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { name, email, password },
    });
    try {
      //destructuring data property from the response
      console.log(axios.post("/api/users/register"));
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      //update the local storage
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfos", JSON.stringify(data));
      //Cookies.set('userInfos',JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

const signin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      //destructuring data property from the response
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfos", JSON.stringify(data));
      //Cookies.set('userInfos',JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

const signOut = () => (dispatch) => {
  localStorage.removeItem("userInfos");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
};

export { signin, signOut, register };
