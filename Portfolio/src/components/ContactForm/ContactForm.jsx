import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name='FirstName' placeholder='FirstName'/>
                <input type="text" name='LastName' placeholder='LastName'/>
            </div>
            <input type="email"  name='Email' placeholder='Email'/>
            <textarea type='text' name='message' placeholder='Message' rows={3}></textarea>

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm
