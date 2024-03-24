import  axios from 'axios'
import { loginFail, loginReq, loginSucc } from '../slices/userSlice'

export const login = (email,password) => async(dispatch)=>{
try{
   const url = "/api/login"
    dispatch(loginReq())
  const {data} =  await axios.post(url,{email,password})
  dispatch(loginSucc(data))
}
catch(e){
dispatch(loginFail(e.response.data.message))
}
}