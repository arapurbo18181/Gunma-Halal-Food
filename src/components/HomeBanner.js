import React from "react";
import banner1 from "../images/banner4.png";

const HomeBanner = () => {
  return (
    <section className={``}>
      <div className="overflow-hidden my-10 relative flex justify-center items-center">
      <img className="rounded-2xl w-8/12" src={banner1} alt="" />
        <h1 className="absolute top-[45%] left-[25%] text-5xl font-bold">
          Get 50% off on your first 2 orders!{" "}
        </h1>
      </div>
    </section>
  );
};

export default HomeBanner;
