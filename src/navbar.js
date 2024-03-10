import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [search, setSearch] = useState(false);
  const [offcan, setOffcan] = useState(false);
  const [xmark, setXmark] = useState(false);

  const menubar = useRef();
 
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  const handleSearchFocus = (e) => {
    e.preventDefault();
    setXmark(true);
  };

  const handleXmark = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  const handleOffcan = (e) => {
    e.preventDefault();
    setOffcan(!offcan);
  };

  return (
    <Fragment>
      <div className="navMain border">
        <div className="container">
          <div className="row py-3">
            <div className="col-6">
              <img src="images/icons/tylorgang.png" style={{ width: "60px" }} />
            </div>
            <div className="col-6">
              <div className="navlinkMain d-flex justify-content-end">
                <div className="navlinks">
                  <a href="" onClick={(e) => handleSearch(e)}>
                    <img src="images/icons/search.png" className="searchicn" />
                  </a>
                  <a>
                    <img src="images/icons/cart.png" className="carticn mx-4" />
                  </a>
                  <Link to="/login">
                    <img src="images/icons/user.png" className="usericn" />
                  </Link>
                </div>

                <div>
                  <a onClick={(e) => handleSearch(e)}>
                    <img
                      src="images/icons/search.png"
                      className="searchicn resicons  me-3 mt-1"
                    />
                  </a>
                </div>
                <div>
                  <a>
                    <img
                      src="images/icons/cart.png"
                      className="carticn resicons"
                    />
                  </a>
                </div>

                <div className="">
                  <a href="" onClick={(e) => handleOffcan(e)}>
                    <img src="images/icons/menu.png" className="menuImg" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* offcanvas */}

      <div
        className={`p-3 ${
          offcan ? "offcanvasMainActive" : "offcanvasMainInactive"
        } `}
        ref={menubar}
      >
        <div className="linksWarp">
          <div className="d-flex justify-content-between">
            <div>
              <a href="" style={{ textDecoration: "none" }}>
                <h6 className="colorGray mt-1">Profile</h6>
              </a>
            </div>
            <div>
              <img src="images/icons/user.png" style={{ width: "25px" }} />
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div>
              <a href="" style={{ textDecoration: "none" }}>
                <h6 className="colorGray mt-1">Cart</h6>
              </a>
            </div>
            <div>
              <img src="images/icons/cart.png" style={{ width: "30px" }} />
            </div>
          </div>
          <div className="d-flex justify-content-between   ">
            <div>
              <a href="" style={{ textDecoration: "none" }}>
                <h6 className="colorGray mt-1">My Orders</h6>
              </a>
            </div>
            <div>
              <img src="images/icons/order.png" style={{ width: "30px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* search bar  */}
      <div className={`${search ? "searchActive" : "searchInActive"}    `}>
        <div className="container d-flex">
          <input
            onClick={(e) => handleSearchFocus(e)}
            className="searchInput "
            placeholder="Search here..."
          />
          <div className={`${xmark ? "xmarkActive" : "xmarkInactive "} xmark `}>
            <a href="" onClick={(e) => handleXmark(e)}>
              <img
                src="images/icons/x-mark.png"
                className="xmarkimg xmarkActiveres"
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
