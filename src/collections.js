import { Fragment } from "react";

export function Collection() {
  return (
    <Fragment>
      <div className="collectionMain container mt-3 r">
        <div className="row">
          <div className="col-12 col-lg-6   d-flex justify-content-end">
            <div className="collection_left">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0">HOT LIST</p>
                <h4 className="mb-0">Womens Collection</h4>
                <p>Shop now</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6  ">
            <div className="rightOne">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0">HOT LIST</p>
                <h4 className="mb-0">Men Collection</h4>
                <p>Shop now</p>
              </div>
            </div>
            <div className="d-flex rightAnim">
              <div className="rightThree  mt-1"></div>
              <div className="rightTwo ms-1 mt-1 ">
                <div className="p-2 pt-4 ps-3">
                  <p className="mb-0">HOT LIST</p>
                  <h4 className="mb-0">Kids Collection</h4>
                  <p>Shop now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile responsive  */}
        {/* <div className="row d-flex justify-content-center">
            <div className="col-12 collection_left"></div>
            <div className="col-12 collection_left "></div>
            <div className="col-12collection_left "></div>
            <div className="col-12 collection_left"></div>
          </div> */}
      </div>
    </Fragment>
  );
}
