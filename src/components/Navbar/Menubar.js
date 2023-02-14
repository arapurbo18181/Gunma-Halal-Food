import React from 'react'
import { Link } from 'react-router-dom'

const menu = [
{
    menu: "Home",
    page: "/"
},
{
    menu: "About Us",
    page: "/about"
},
{
    menu: "Shop",
    page: "/shop"
},
{
    menu: "Contact",
    page: "/contact"
},
{
    menu: "Privacy Policy",
    page: "/privacypolicy"
}
]

const Menubar = () => {
  return (
    <section className='w-full flex justify-center items-center space-x-10 px-6 py-2'>
        {
            menu.map(item=>{
                return (
                    <Link to={item.page} className="text-xl focus:border-b py-2 px-4 bg-emerald-600 text-white border-2 border-emerald-600 hover:bg-white hover:text-black transition-all duration-500 rounded-md">
                        {item.menu}
                    </Link>
                )
            })
        }
    </section>
  )
}

export default Menubar