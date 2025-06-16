import React from 'react'
import SingleExp from './SingleExp'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'

const experiences = [
  {
    job: 'Front-End Developer',
    company: 'Finstein Advizory Service LLP',
    data: '2024 - Present',
    responsibilities: [
      `Developed the frontend of a medical test application designed for
      pregnant women, enabling efficient scan analysis.`,
      `Played a key role in creating a user-friendly interface that significantly
      reduces the time`,
      `Collaborated with the backend team to implement minor backend
      functionalities.`
    ]
  }
]
const AllExp = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-center'>
      {experiences.map((experience, index) => {
        return <>
          <SingleExp key={index} experience={experience} />
          {index < 0 ? (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0}}
            >
              <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
            </motion.div>
          ) : ''}
        </>
      })}
    </div>
  )
}

export default AllExp