import React from 'react'
import '../app/styles/contact.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <div className='contact-grid md:grid-cols-2'>
                <div className='contact-space'>
                    <h2 className='contact-heading'>
                       Get in touch
                    </h2>
                    <p className='contact-text' >
                      Drop me a line, give me a call, or send me a message by submitting the form
                    </p>
                    <div className='contact-flex' >
                    <AiOutlineMail size={30}/> xyz@gmail.com
                    </div>
                    <div className='contact-flex' >
                    <BsTelephone size={30} /> (021) 000-0000
                    </div>
                </div>

                <div className='contact-space' >
                    <div className='form'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='input-field' id='name'/>

                    </div>
                    <div className='form' >
                        <label htmlFor='email'>Email</label>
                        <input type='text' className='input-field' id='email'/>

                    </div>
                    <div className='form'  >
                        <label htmlFor='msg'>Message</label>
                        <textarea className='textarea-field' id='msg' rows={8}></textarea>
                    </div>

                    <button className='button'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
