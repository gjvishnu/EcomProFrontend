import { Fragment } from "react";
import { Banner } from "./banner";
import { Navbar } from "./navbar";
import { Collection } from "./collections";
import { ProductCard } from "./productCard";

export function Home() {
  return (
    <Fragment>
      <Navbar/>
       <Banner />
      <Collection/>
      <ProductCard/>
    </Fragment>
  );
}
