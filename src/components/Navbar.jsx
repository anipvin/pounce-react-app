import React from 'react'
import { whitelogo, menuBar, search } from "../assets";

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={whitelogo} alt='Pounce' className='w-[123px] h-[25px] z-[999]' />
      {/* Hamburger */}
      <div className='flex md:gap-10 sm:gap-5 z-10'>
        <img src={search} alt='Pounce' className='w-[32px] h-[32px]' />
        <div>
          <img src={menuBar} alt='Pounce' className='w-[32px] h-[32px]' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar