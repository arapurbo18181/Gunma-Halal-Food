import React from 'react'
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

console.log(sliderImage)

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };



  return (
    <section className='w-full h-full'>
    {/* //! Main Slider */}
        <Slider {...settings}>
            {
                sliderImage.map(slide=>{
                    return(
                        <div>
                            <img src={slide.img} />
                        </div>
                    )
                })
            }
        </Slider>
    </section>
  )
}

export default Hero