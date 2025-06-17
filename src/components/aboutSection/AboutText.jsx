import React from 'react'
import {Link} from 'react-scroll'

const AboutText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white mb-10'>
            Software Developer with 1 year of experience, primarily in
            frontend development. Skilled in building responsive and
            user-friendly interfaces, integrating APIs, and optimizing
            performance. Seeking to leverage my expertise to contribute
            to innovative projects and grow professionally in the field of
            software development.
        </p>
        <Link
          to='projects' 
          smooth={true}
          spy={true}
          duration={500}
        >
          <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>My Projects</button>
        </Link>
    </div>
  )
}

export default AboutText