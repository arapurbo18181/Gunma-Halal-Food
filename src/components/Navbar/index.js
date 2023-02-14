import React from 'react'
import Menubar from './Menubar'
import Topbar from './Topbar'

const Navbar = () => {
  return (
    <section className='bg-gray-200 sticky top-0 right-0 left-0 z-20 shadow-md' >
        <Topbar/>
        <Menubar/>
    </section>
  )
}

export default Navbar