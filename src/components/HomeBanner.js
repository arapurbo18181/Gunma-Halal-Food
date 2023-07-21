import React from "react";
import banner1 from "../images/banner4.png";
import { useApi } from "../context/ApiContext";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const { SubBanner, SliderImageRoute } = useApi();
  return (
    <>
      {SubBanner ? (
        <section className={``}>
          <div className="overflow-hidden mt-20 mb-10 relative flex justify-center group items-center w-full">
            <img
              className=" w-full md:w-full md:h-full group-hover:scale-110 transition-all duration-300"
              src={`${SliderImageRoute}/${SubBanner.image}`}
              alt=""
            />
            <div className="absolute w-full h-full flex justify-start items-start bg-black bg-opacity-40">
              <div className="mx-2 md:mx-8 md:mt-8 flex flex-col justify-center items-start md:space-y-4 text-white">
                <h2 className="text-sm sm:text-2xl xl:text-3xl font-semibold md:font-bold">Fresh Beef</h2>
                <p className="md:font-semibold text-sm md:text-base">Fresh Beef Available Is Every Friday</p>
                <Link to={"/category/Meat-Fish"} className="bg-red-600 text-white px-0.5 md:px-4 py-0.5 md:py-2 text-xs md:text-base"> Buy Now </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default HomeBanner;
