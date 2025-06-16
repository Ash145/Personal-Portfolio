import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
import emailImage from '/images/email-image.png'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src={emailImage} alt="Contact me" className='max-w-[300px]' />
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}

export default ContactRight