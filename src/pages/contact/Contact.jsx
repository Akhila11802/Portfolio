import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
}from "react-icons/fa";
import "./contact.css"
import {FiSend, FiX} from 'react-icons/fi';
import { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7v8bcd', 'template_6810ivq', form.current, '9hKBjtGpXvw3swCd7')
      .then((result) => {
          console.log(result.text);
          setShowSuccessPopup(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setShowErrorPopup(true);
      });

  };
  
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In<span>Touch</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>

          <p className="contact__description">
          Feel free to get in touch with me. I am always open to discussing
          new projects, creative ideas or opportunities to be part of your visions

          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__open'/>

              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">anilkumarakhila80@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__open'/>

              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">8010896671</h4>
              </div>


            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF/>
            </a>
            <a href="https://facebook.com" className="contact__social-link">
              <FaTwitter/>
            </a>
            <a href="https://facebook.com" className="contact__social-link">
              <FaYoutube/>
            </a>
            
          </div>
        </div>
        <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>

          <div className="form__input-group">
            <div className="form__input-div">
              <input 
              type="text" 
              name="user_name"
              placeholder='Your Name' 
              className="form__control" 
              required
              />
            </div>

            <div className="form__input-div">
              <input 
              type="email" 
              name="user_mail"
              placeholder='Your Email' 
              className="form__control" 
              required
              />
            </div>

            <div className="form__input-div">
              <input 
              type="text" 
              name="user_subject"
              placeholder='Your Subject' 
              className="form__control" 
              required
              />
            </div>
          </div>

          <div className="form__input-div">
          <textarea 
          name='user_message'
          placeholder='Your Message' 
          className='form__control textarea'
          required
          ></textarea>
            </div>
          <button className="button">Send Message
          <span className="button__icon contact__button-icon">
            <FiSend/>
          </span>
          </button>
        </form>
      </div>

      
       {/* Success Popup */}
       {showSuccessPopup && (
        <div className="popup success-popup">
          <p>Email sent successfully!</p>
          <button className="popup-close" onClick={closeSuccessPopup}>
            <FiX />
          </button>
        </div>
      )}

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="popup error-popup">
          <p>Error sending email.</p>
          <button className="popup-close" onClick={closeErrorPopup}>
            <FiX />
          </button>
        </div>
      )}
    </section>
  )
}

export default Contact