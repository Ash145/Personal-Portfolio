import React from 'react'
import ExpTopLeft from './ExpTopLeft.jsx'
import ExpTopMiddle from './ExpTopMiddle.jsx'
import ExpTopRight from './ExpTopRight.jsx'

const ExpTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
      <ExpTopLeft />
      <ExpTopMiddle />
      <ExpTopRight />
    </div>
  )
}

export default ExpTop