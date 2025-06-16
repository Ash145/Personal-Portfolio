import React from 'react'
import { FaRegCircle } from "react-icons/fa6";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'
import heroImage from '/images/HexaPic.png'

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}} 
      className='h-full flex items-center justify-center sm:mt-8 md:mt-0'
    >
      <img 
        src={heroImage} 
        alt="Syed Ashik Ahamed" 
        className='rounded-full max-h-[410px] max-w-[500px] w-auto' 
      />
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
          <FaRegCircle className='md:h-[50%] sm:h-[70%] min-h-[430px] w-full text-cyan blur-md animate-[20s_linear_infinite]' />
      </div>
    </motion.div>
  )
}

export default HeroPic