import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../images/slider1.png";
import Slider2 from "../images/slider2.png";

const sliderImage = [
  {
    img: Slider1,
  },
  {
    img: Slider2,
  },
  {
    img: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
  },
  {
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const [WidthForSlider, setWidthForSlider] = useState();

  // useEffect(() => {
  //   setWidthForSlider(window.innerWidth - 500);
  //   console.log(window.innerWidth);
  // }, [])

  // console.log(WidthForSlider);

  return (
    <section className={`w-[98.9vw] xl:w-[84.95vw]`}>
      {/* //! Main Slider */}
      <Slider {...settings}>
        {sliderImage.map((slide, index) => {
          return (
            <div key={index} className="w-full h-[25vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh]">
                <img className="h-full w-full object-cover" src={slide.img} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Hero;
