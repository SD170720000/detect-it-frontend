import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const serviceID = 'service_3gag6de';
  const templateID = 'template_aavrsjs';
  const userID = 'user_quuTj0kuyeIIpcfcQTv21';

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      userID
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
