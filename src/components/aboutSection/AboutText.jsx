import React from 'react'

const AboutText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>
            Software Developer with 1 year of experience, primarily in
            frontend development. Skilled in building responsive and
            user-friendly interfaces, integrating APIs, and optimizing
            performance. Seeking to leverage my expertise to contribute
            to innovative projects and grow professionally in the field of
            software development.
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>My Projects</button>
    </div>
  )
}

export default AboutText