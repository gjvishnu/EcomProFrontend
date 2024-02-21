import { Fragment } from "react";

export function Banner() {
  return (
    <Fragment>
      <div className="BGmain">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src="images/banner/bg.png" className="bannerImg" />
            </div>
            <div className="col-6 d-flex align-items-center">
              <div className="BannerleftMain">
                <div className="d-flex ">
                  <div className="dash"></div> <p>New Trends</p>
                </div>
                <div>
                  <h1>
                     
                    <span style={{ color: "rgb(152, 7, 7)" }}>Hello</span> New
                    Season
                  </h1>
                </div>
                <div>
                  <p>LIMITED TIME OFFER - UP TO 60% AND FREE SHIPPING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
