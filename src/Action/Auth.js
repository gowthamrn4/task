import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    ADD_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../Constants/Auth';

export const LOGIN = (val) => (dispatch) => {
    dispatch({ type: LOGIN_INIT });
    console.log(val)
    setTimeout(()=>{
      dispatch({ type: LOGIN_SUCCESS, payload: val });
    },4000)
}

export const AddEmployee= (value) =>(dispatch)=>{
    dispatch({type:ADD_EMPLOYEE,payload:value})
}

export const UpdateEmployee= (value) =>(dispatch)=>{
    dispatch({type:UPDATE_EMPLOYEE,payload:value})
}

export const DeleteEmployee= (value) =>(dispatch)=>{
    dispatch({type:DELETE_EMPLOYEE,payload:value})
}