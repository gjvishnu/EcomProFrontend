import { Fragment,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./navbar";
import {useParams} from 'react-router-dom'
import { getSingleProd } from "./actions/singleProdAction";

export function ProductDetail() {

  //  const { products, loading } = useSelector((state) => state.productsState);
   const { product,   loading } = useSelector((state) => state.SingleproductState);

   const {id} = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getSingleProd(id))
    window.scrollTo(0, 0);  
  }, []);


let imgPre = product ? product.images:""

 const [imgMain, setimgMain] = useState(0)
const [quantity , setquantity] = useState(1)

const addQuant = (e)=>{
  e.preventDefault()
  setquantity(quantity+1)
}
const subQuant = (e)=>{
  e.preventDefault()
  if (quantity > 1) {
    setquantity(quantity - 1);
  }
}

 const getI = (e,i)=>{
  e.preventDefault()
  setimgMain(i)
}
  return (
    <Fragment>
          <Navbar/>
      <div className="prdDtMain container mt-5">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="imgMainDiv ">
              <div className="mainImg ">
                <img
                  src={product ? imgPre[imgMain].image : ""}
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
              <div className="subimgDiv d-flex mt-4 justify-content-center">
             {product ? product.images.map((ele,i)=>(
                  <div className={`boxOne mx-1 ${imgMain === i ? 'imgPreActive' : ''} `} key={i}>
                 <a href="#" onClick={(e)=>getI(e,i)}><img  className="imgPre" src={ele.image}/></a>
                  </div>
                )):""}    
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4  ">
            <div className="proDetailMain container">
              <h2>{product ? product.name :"" }</h2>
              <h3 className="my-3">₹ 2000</h3>
              <div className="addCartDiv d-flex align-items-center  mt-3">
                <div className="quantity d-flex align-items-center justify-content-center my-2">
                  <div><a href="" onClick={(e)=>subQuant(e)} className="linkBlack">-</a></div>
                  <div className="mx-3"> <input className="quantityInpt" value={quantity}/> </div>
                  <div><a href="" onClick={(e)=>addQuant(e)} className="linkBlack">+</a></div>
                </div>
                <div className="addCartDiv mx-3"> <button className="addBtn">Add Cart</button>  </div>
              </div>
              <p className="my-4">Leriya Fashion Textured Shirts for Men || Casual Shirt for Men || Shirt for Men|| Men Stylish Shirt || Men Fancy Shirt || Men Full Sleeve Shirt || Plain Shirts for Men</p>
              <p>size : <a href="" className="linkBlack">XL</a> <a href="" className="mx-2 linkBlack">L</a><a href="" className="linkBlack">M</a><a href="" className="mx-2 linkBlack">S</a></p>
             <div className=""> <h5>Description :</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div>
            </div> 
          </div>
        </div>
  
      </div>
    </Fragment>
  );
}
