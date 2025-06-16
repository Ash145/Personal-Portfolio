import React from 'react'

const links = [
    { link: 'About Me', section: 'about' },
    { link: 'Skills', section: 'skills' },
    { link: 'Experience', section: 'experience' },
    { link: 'Projects', section: 'projects' },
    { link: 'Contact', section: 'contact' },
];

const FooterMain = () => {
  return (
    <div className='px-4 '>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto' >
            <p className='text-3xl text-lightGrey' >Syed Ashik Ahamed</p>
            <ul className='flex gap-4 text-lightGrey text-xl' >
                {links.map((link, index) => {
                    return <li key={index}>
                        <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer' >{link.link}</a>
                    </li>
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown' >@Syed Ashik Ahamed</p>
    </div>
  )
}

export default FooterMain