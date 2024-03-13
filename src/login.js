import { Fragment,useState } from "react";
import { Link } from "react-router-dom";

export function Login() {

 

  return (
    <Fragment>
        <div className="formBg">
        <div className="formWarpMain">
           <div className="formWarp">
        <Link onClick={()=>window.history.back()}>   <img src="./images/icons/back.png"/></Link>
                  <h3 className="mb-4 text-white text-center">Login here</h3>
             <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder="" required="required"/>  <span className="text-white label">Email</span>  </div>
             <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder=""  required="required"/>  <span className="text-white label">Password</span>  </div>
             <div className="mt-4"> <input type="submit" value="Login" className="formSubmit"/></div>
            <div className="my-3"> <p className="text-white">Don't have an account ?  <Link to="/register" className="text-white">Register</Link>  </p></div>
          </div>
        </div>
      </div> 
    
    </Fragment>
  );
}
