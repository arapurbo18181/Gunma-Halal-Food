import React from 'react'
import CartSidebar from '../CartSidebar'
import Menubar from './Menubar'
import Topbar from './Topbar'

const Navbar = () => {
  return (
    <section className='bg-gray-200 py-4 sticky top-0 right-0 left-0 z-10 shadow-md' >
        <Topbar/>
        <CartSidebar/>
    </section>
  )
}

export default Navbar