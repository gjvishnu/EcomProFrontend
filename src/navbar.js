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
          <div className="row py-4">
            <div className="col-6">logo</div>
            <div className="col-6">
              <div className="navLinkWarp">
                <div>
                  <a href="" onClick={(e) => handleSearch(e)}>
                    <img src="images/icons/search.png" className="Navicon" />
                  </a>
                </div>
                <div className="mx-4">
                  <img
                    src="images/icons/shopping-bag.png"
                    className="Navicon"
                  />
                </div>
                <div className="ms-3">
                  <img src="images/icons/user.png" className="Navicon" />
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
          <div className={`${xmark ? "xmarkActive" : "xmarkInactive "} xmark`}>
            <a href="" onClick={(e) => handleXmark(e)}>
              <img src="images/icons/x-mark.png" className="xmarkimg" />{" "}
            </a>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}
