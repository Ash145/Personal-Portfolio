import React from 'react'
import ExpInfo from './ExpInfo'

const ExpTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExpInfo number='1' text='Year' />
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExpInfo number='3' text='Websites' />
      </div>
      <p className='text-center text-white'>With 1 Year of experience building dynamic and user-friendly web applications</p>
    </div>
  )
}

export default ExpTopLeft