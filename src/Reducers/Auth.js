import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    ADD_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../Constants/Auth';

const INITIAL_STATE = {
    user: {username:'test@gmail.com',password:"12345678"},
    token: null,
    loading: false,
    errorMessage: '',
    isAuth:null,
    data:[
        {
            "id":1,
            "name":"test1",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
        },
        {
            "id":2,
            "name":"test2",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
        },
        {
            "id":3,
            "name":"test3",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
        },
        {
            "id":4,
            "name":"test4",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
        },
        {
            "id":5,
            "name":"test5",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
        },
 
    ]
};



export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_INIT:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth:(state.user.username == payload.username && state.user.password == payload.password),
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                data:[...state.data,payload]
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                data:state.data.map(res=>res.id == payload.id ? res = payload : res)
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                data:state.data.filter(res=>res.id !== payload.id)
            }
        default:
            return state;
    }
}