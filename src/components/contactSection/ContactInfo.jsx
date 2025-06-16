import React from 'react'
import SingleInfo from './SingleInfo'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='asiqahmed6909@gmail.com' Image={HiOutlineMail} />
        <SingleInfo text='+91 9566969549' Image={FiPhone} />
        <SingleInfo text='Chennai, India' Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo