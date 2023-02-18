import React from 'react'
import Footer from '../components/Footer';
import { BsPlusLg } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import CategorySidebar from '../components/CategorySidebar';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Wishlist = () => {

  const {Wishlist, setShowProduct, addToCart, removeFromWishlist} = useCart();

  return (

    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[1440px]">
        <div className="-mt-4 w-[380px]">
          <div className="block w-[380px]"></div>
          <CategorySidebar />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
            <span className="underline decoration-emerald-500 underline-offset-8">
              Wi
            </span>
            sh List
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {Wishlist.map((item) => {
              return (
                <div className="px-4 py-4 border border-emerald-500 rounded-md hover:-translate-y-3 transition-all duration-500">
                  <Link className="overflow-hidden"to={`/product/${item.title}`} onClick={()=>setShowProduct(item)} >
                    <img
                      className="hover:scale-110 cursor-pointer transition-all duration-500"
                      src={item.img}
                      alt=""
                    />
                  </Link>
                  <div className="flex flex-col justify-between items-start my-2">
                    <h2 className="text-[1.5rem] font-bold"> {item.title} </h2>
                    <div className="flex justify-center items-center space-x-1">
                        <h2 className="text-2xl font-bold text-red-500">
                        ৳250
                        </h2>
                        <h2 className="text-base text-gray-400 line-through">
                        ৳300
                        </h2>
                    </div>
                    <div className="w-full flex justify-center items-center my-2 ">
                        <button onClick={()=>removeFromWishlist(item)} className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"> <BsTrash/> <span>Remove From Wishlist</span> </button>
                    </div>
                    <div className="w-full flex justify-center items-center my-2 ">
                        <button onClick={()=>addToCart(item)} className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"> <BsPlusLg/> <span>Add To Cart</span> </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer/>
        </div>
      </div>
    </section>
  )
}

export default Wishlist