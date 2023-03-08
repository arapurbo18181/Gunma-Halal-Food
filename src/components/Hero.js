import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../images/slider1.png"
import Slider2 from "../images/slider2.png"

const sliderImage = [
    {
        img: Slider1
    },
    {
        img: Slider2    
    }
]

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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      // const [WidthForSlider, setWidthForSlider] = useState();

      // useEffect(() => {
      //   setWidthForSlider(window.innerWidth - 500);
      //   console.log(window.innerWidth);
      // }, [])

      // console.log(WidthForSlider);
      

  return (
    <section className={`w-[98.9vw] xl:w-[84.95vw] h-full`}>
    {/* //! Main Slider */}
        <Slider {...settings}>
            {
                sliderImage.map(slide=>{
                    return(
                        <div className='w-full'>
                            <img className='w-full' src={slide.img} />
                        </div>
                    )
                })
            }
        </Slider>
    </section>
  )
}

export default Hero