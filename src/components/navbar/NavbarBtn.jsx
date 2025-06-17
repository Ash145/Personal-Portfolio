import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='sm:text-lg md:px-4 sm:px-2 md:py-2 sm:py-1 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
        Hire Me
        <div className='sm:hidden md:block'>
            <LuArrowDownRight />
        </div>
    </button>
  )
}

export default NavbarBtn