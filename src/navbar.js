import { Fragment, useState } from "react";
import { Container } from "react-bootstrap";

export function Navbar() {
  const [search, setSearch] = useState(false);
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

  return (
    <Fragment>
      <div className="navMain border">
        <div className="container">
          <div className="row py-3">
            <div className="col-6">
               
              <img src="images/icons/tylorgang.png" style={{width:"60px"}}/> 
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
                  <a>
                    <img src="images/icons/user.png" className="usericn" />
                  </a>
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
                  <img src="images/icons/menu.png" className="menuImg" />
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
