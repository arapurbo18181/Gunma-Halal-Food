import React from "react";
import banner1 from "../images/banner4.png";
import { useApi } from "../context/ApiContext";

const HomeBanner = () => {
  const {SubBanner, SliderImageRoute} = useApi();
  return (
    <>

    { SubBanner ? <section className={``}>
      <div className="overflow-hidden mt-20 mb-10 relative flex justify-center items-center">
      <img className="md:rounded-2xl w-full px-6 md:w-full md:h-full" src={`${SliderImageRoute}/${SubBanner.image}`} alt="" />
        <div className="absolute w-full h-full flex justify-center items-center text-sm sm:text-2xl xl:text-3xl font-bold">
          {/* Get 50% off on your first 2 orders!{" "} */}
        </div>
      </div>
    </section> : ""}
    </>
  );
};

export default HomeBanner;
