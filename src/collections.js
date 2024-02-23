import { Fragment } from "react";

export function Collection() {
  return (
    <Fragment>
      <div className="collectionMain container mt-3 r ">
        <div className="row collectionLg">
          <div className="col-12 col-lg-6 col-md-6  d-flex justify-content-end">
            <div className="collection_left d-flex align-items-end justify-content-end">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0">HOT LIST</p>
                <h4 className="mb-0">Womens Collection</h4>
                <p>Shop now</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6  ">
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
        <div className="container collectionRes">
          <div className="row d-flex justify-content-center">
            <div className="col-12 resCollectOne">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0 text-white">HOT LIST</p>
                <h4 className="mb-0 text-white">Womens Collection</h4>
                <p className="text-white">Shop now</p>
              </div>
            </div>
            <div className="col-12 my-2  resCollectTwo ">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0 text-white">HOT LIST</p>
                <h4 className="mb-0 text-white">Men Collection</h4>
                <p className="text-white">Shop now</p>
              </div>
            </div>
            <div className="col-12  mb-2 resCollectthree">
              <div className="p-2 pt-4 ps-3">
                <p className="mb-0 text-white">HOT LIST</p>
                <h4 className="mb-0 text-white">Kids Collection</h4>
                <p className="text-white">Shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
