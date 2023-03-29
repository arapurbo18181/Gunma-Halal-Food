import React from "react";
import { useProduct } from "../context/ProductContext";
import RingLoader from "react-spinners/RingLoader";
import BreadCrumbs from "../components/BreadCrumbs";

const About = () => {
  const { progress, setProgress } = useProduct();
  return (
    <>
    <BreadCrumbs name="About" url="about" />
      <div>About</div>
    </>
  );
};

export default About;
