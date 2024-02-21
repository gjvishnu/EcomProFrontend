import { Fragment } from "react";
import { Banner } from "./banner";
import { Navbar } from "./navbar";
import { Collection } from "./collections";

export function Home() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Collection/>
    </Fragment>
  );
}
