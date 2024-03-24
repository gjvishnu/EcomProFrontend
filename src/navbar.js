import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [search, setSearch] = useState(false);
  const [offcan, setOffcan] = useState(false);
  const [xmark, setXmark] = useState(false);
 
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
            <Link to={"/"}> <img src="../images/icons/tylorgang.png" style={{ width: "60px" }} /></Link> 
            </div>
            <div className="col-6">
              <div className="navlinkMain d-flex justify-content-end">
                <div className="navlinks">
                  <a href="" onClick={(e) => handleSearch(e)}>
                    <img src="../images/icons/search.png" className="searchicn" />
                  </a>
                  <a>
                    <img src="../images/icons/cart.png" className="carticn mx-4" />
                  </a>
                  <Link to="/login">
                    <img src="../images/icons/user.png" className="usericn" />
                  </Link>
                </div>

                <div>
                  <a onClick={(e) => handleSearch(e)}>
                    <img
                      src="../images/icons/search.png"
                      className="searchicn resicons  me-3 mt-1"
                    />
                  </a>
                </div>
                <div>
                  <a>
                    <img
                      src="../images/icons/cart.png"
                      className="carticn resicons"
                    />
                  </a>
                </div>

                <div className="">
                  <a href="" onClick={(e) => handleOffcan(e)}>
                    <img src="../images/icons/menu.png" className="menuImg" />{" "}
                  </a>
                </div>
              </div>
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
                src="../images/icons/x-mark.png"
                className="xmarkimg xmarkActiveres"
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
