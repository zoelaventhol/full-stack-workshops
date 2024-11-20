import React, { useState, useRef } from 'react'
import './App.css'
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const serviceId = 'service_etmxz89';
  const templateId = 'template_54iol6n'
  const publicKey = 'ipRRyo2rM9F3Zf7Tw';


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => { 
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <h2>Send an email with EmailJS</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className = "input">
        <label>First name</label>
        <input type="text" name="first_name" />
        </div>

        <div className = "input">
          <label>Last name</label>
          <input type="text" name="last_name" />
        </div>

        <div className = "input">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        
        <div className = "input">
          <label>Message</label>
          <textarea name="message" />
        </div>
        
        <div>
        <input type="submit" value="Send" />
        </div>
      </form>
    </>  
  )
}

export default App
