import React, { useRef } from 'react';
import ComingHome from '../components/ComingMap/ComingHome'
import 'aos/dist/aos.css';

import emailjs from '@emailjs/browser';

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="section" >
      <ComingHome />
      <div className="contenedor">
        <img src="/" alt="astronauta" />
        <div className="contenedor-form">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
