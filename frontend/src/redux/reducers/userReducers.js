import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

const userRegisterReducers = (state={},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {
                loading:false,userInfos:action.payload
            } 
        case USER_REGISTER_FAIL: 
            return{
                loading:false,error:action.payload
            }     
        default: return state  
    }
}
const userSigninReducers = (state={},action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true}
        case USER_SIGNIN_SUCCESS:
            return {
                loading:false, userInfos: action.payload
            } 
        case USER_SIGNIN_FAIL:
            return{
                loading:false, error: action.payload
            }     
        case USER_SIGNOUT:
            return{};    
        default: 
        return state  
    }
}
export{
    userSigninReducers,userRegisterReducers
}