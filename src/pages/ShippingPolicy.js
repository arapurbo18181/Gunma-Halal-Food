import React from 'react'
import ShippingImage from "../images/shippingPolicy.jpg"
import Footer from "../components/Footer"

const ShippingPolicy = () => {
  return (
    <>
    <div className='w-full h-full mt-10 flex px-4 space-x-4 overflow-hidden'>
        <div className='flex-1'>
            <h2 className='text-4xl font-bold mb-10'>Our Shipping Policy</h2>
            <p className='text-gray-600 font-semibold'>Order more than 8500円 & get free delivery all over japan except Okinawa Prefecture.</p>
            <p className='text-gray-600 font-semibold mt-32 mb-5'>Customer living in Okinawa Ken additional shipping will be charged extra ¥1,200 for each box (1box =20kg). And Shipping cost calculate after placed order.</p>
            <p className='text-gray-600 font-semibold'>Please Note: After complete shipped your produts you should not cancel your order. But if you want to return your products you should pay all transport cost.</p>
        </div>
        <div className='flex-1 '>
            <img className='w-4/5' src={ShippingImage} alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ShippingPolicy