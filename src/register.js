import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Fragment>
      <div className="formBg">
        <div className="formWarpMain">
          <div className="formWarp">
          <Link onClick={()=>window.history.back()}>   <img src="./images/icons/back.png"/></Link>
            <div className="formimgPre"> <img src="./images/icons/user3.png" className="formStaticImg"/> </div>
          <h3 className="mb-4 text-white text-center">Register here</h3>
          <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder="" required="required"/>  <span className="text-white label">Name</span>  </div>
          <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder="" required="required"/>  <span className="text-white label">Email</span>  </div>
          <div className="my-3 inptDiv"><input type="email" className="formInpt" placeholder="" required="required"/>  <span className="text-white label">Password</span>  </div>
            <div className="my-3"><input className="formInpt" type="file" placeholder=" Enter password"/></div>          
            <div className="mt-4"> <input type="submit" className="formSubmit"/></div>
            <div className="my-3"> <p className="text-white">Already have an account ?  <Link to="/login" className="text-white">Login</Link>  </p></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
