import { Fragment } from "react";

export function Collection() {
  const imgArr = [
    "brand1",
    "brand2",
    "brand3",
    "brand4",
    "brand5",
    "brand6",
    "brand7",
  ];

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
      {/* our brands */}
      <div className="container my-4">
        <h3 className="text-center my-3"> <span className="color">Our</span>  Brands</h3>
        <div className="strip ">
          <div className=" d-felx  ">
            <marquee>
              <div className="mx-5">
                {imgArr.map((img, i) => (
                  <img
                    key={i}
                    src={`images/brands/${img}.png`}
                    className="mx-4"
                  />
                ))}
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
