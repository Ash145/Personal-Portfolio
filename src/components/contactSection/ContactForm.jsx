import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_f833vvr', 'template_r4p47kd', form.current, {
            publicKey: '9095lRKS63viuU5m2',
          })
          .then(
            () => {
              setName('');
              setEmail('');
              setMessage('');
              setSuccess('Message Sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

    return (
    <div>
        <p className='text-cyan' >{success}</p>
        <form action="" className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail} >
            <input 
                name='from_name' 
                value={name}
                onChange={handleName}
                type="text" 
                placeholder='Your Name' 
                required 
                className='h-12 rounded-lg bg-lightBrown px-2'
            />
            <input 
                name='from_email' 
                value={email}
                onChange={handleEmail}
                type="email" 
                placeholder='Your Email' 
                required 
                className='h-12 rounded-lg bg-lightBrown px-2' 
            />
            <textarea 
                name="message" 
                value={message}
                onChange={handleMessage}
                id="" type='text' 
                placeholder='Message' 
                rows='9' 
                cols='50' 
                required 
                className='rounded-lg bg-lightBrown p-2' 
            />
            <button 
                type='submit' 
                className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500' 
            >
                Send
            </button>
        </form>
    </div>
  )
}

export default ContactForm