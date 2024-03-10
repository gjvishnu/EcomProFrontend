import { Fragment } from "react";

export function ProductDetail() {
  return (
    <Fragment>
      <div className="prdDtMain container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="imgMainDiv ">
              <div className="mainImg ">
                <img
                  src="../images/product/product_0.jpg"
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
              <div className="subimgDiv d-flex mt-4">
                <div className="boxOne"></div>
                <div className="boxOne mx-2"></div>
                <div className="boxOne"></div>
                <div className="boxOne mx-2"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 "></div>
        </div>
      </div>
    </Fragment>
  );
}
