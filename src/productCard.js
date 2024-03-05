import { Fragment,   } from "react";
 

export function ProductCard() {

 

  return (
    <Fragment>
      <div className="container my-5">
        <h2 className="my-5">
          <span className="color">New</span> Drops
        </h2>
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <div className="cardDiv">
              <div className="cardimg pb-3 d-flex justify-content-center align-items-end ">
                <button className="py-1 addCartBtn colorGray txt">
                  Add to Cart
                </button>
              </div>
              <div className="mt-2 mb-0">
                <p className="colorGray mb-2">Tshirt</p>
              </div>
              <div>
                <h6>Cropped Faux Leather Jacket</h6>
              </div>
              <div>
                <p>₹ 6000</p> 
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </Fragment>
  );
}
