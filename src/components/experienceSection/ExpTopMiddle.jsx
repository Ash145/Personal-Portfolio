import React from 'react'
import experienceImage from '/images/experience-image.png'

const ExpTopMiddle = () => {
  return (
    <div className='lg:w-[35%] md:w-[50%] sm:w-[80%]'>
      <img 
        src={experienceImage} 
        alt="Experience image" />
    </div>
  )
}

export default ExpTopMiddle