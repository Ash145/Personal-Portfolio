import React from 'react'
import subSkillsImage from '/images/subSkills.jpg'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-lightGrey relative'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full'></div>
        <img src={subSkillsImage} alt="Sub Skills image" />
    </div>
  )
}

export default SubSkills