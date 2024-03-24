import {createSlice} from '@reduxjs/toolkit'


 const userSlice = createSlice({
    name : "user",
    initialState: {
        loading : false,
        isLoggedIn : false
    },
    reducers : {
        loginReq(state,action){
           return {
            loading : true,
            isLoggedIn : false
           }
        },
        loginSucc(state, action) {
            return{
                loading : false,
                isLoggedIn : true,
                user : action.payload.user
            }
        },
        loginFail(state,action){
            return{
                loading : false,
                isLoggedIn : false,
                error : action.payload
            }
        }

    },
})
const {actions,reducer} = userSlice;
export const {loginReq,loginSucc,loginFail} = actions
export default reducer