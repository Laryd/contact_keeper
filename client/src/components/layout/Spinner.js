import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <>
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "200px", margin: "auto", dislay: "block" }}
    />
  </>
);

export default Spinner;
