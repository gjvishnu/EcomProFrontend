import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./actions/productsAction";

export function ProductCard() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsState);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
  return (
    <Fragment>
      <div className="container my-5">
        <h2 className="my-5">
          <span className="color">New</span> Drops
        </h2>
        <div className="row">
          {products &&  
            products.map((prods) => (
              <div className="col-lg-3 col-12 col-md-6 d-flex justify-content-center">
                <div className="cardDiv">
                  <div
                    className="cardimg pb-3 d-flex justify-content-center align-items-end "
                    style={{ backgroundImage: `url(${prods.images[0].image})` }}
                  >
                    <button className="py-1 addCartBtn colorGray txt">
                      Add to Cart
                    </button>
                  </div>
                  <div className="mt-2 mb-0">
                    <p className="colorGray mb-2">{prods.category}</p>
                  </div>
                  <div>
                    <h5>{prods.name}</h5>
                  </div>
                  <div>
                    <p>₹{prods.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
