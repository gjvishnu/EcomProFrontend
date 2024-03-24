import { Fragment,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions/usersAction";

export function Login() {

 const [email,setEmail] = useState("admin@ad.com")
 const [password ,setPassword] = useState("0000")
 const dispatch = useDispatch()

 const submitHand = (e)=>{
   e.preventDefault()
   dispatch(login(email,password))
 }

 return (
    <Fragment>
        <div className="formBg">
        <div className="formWarpMain">
           <div className="formWarp">
        <Link onClick={()=>window.history.back()}>   <img src="./images/icons/back.png"/></Link>
                  <h3 className="mb-4 text-white text-center">Login here</h3>
                  <form onClick={(e)=>submitHand(e)}>
             <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder="" required="required" onChange={(e)=>setEmail(e.target.value)}/>  <span className="text-white label">Email</span>  </div>
             <div className="my-3 inptDiv"><input type="password" className="formInpt" placeholder=""  required="required" onChange={(e)=>setPassword(e.target.value)}/>  <span className="text-white label">Password</span>  </div>
             <div className="mt-4"> <input type="submit" value="Login" className="formSubmit"/></div>
            <div className="my-3"> <p className="text-white">Don't have an account ?  <Link to="/register" className="text-white">Register</Link>  </p></div>
                </form>
          </div>
        </div>
      </div> 
    
    </Fragment>
  );
}
