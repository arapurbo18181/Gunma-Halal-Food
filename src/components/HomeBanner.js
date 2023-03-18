import React from "react";
import banner1 from "../images/banner4.png";

const HomeBanner = () => {
  return (
    <section className={``}>
      <div className="overflow-hidden my-10 relative flex justify-center items-center">
      <img className="md:rounded-2xl w-full md:w-8/12" src={banner1} alt="" />
        <div className="absolute w-full h-full flex justify-center items-center text-sm sm:text-2xl xl:text-3xl font-bold">
          Get 50% off on your first 2 orders!{" "}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
