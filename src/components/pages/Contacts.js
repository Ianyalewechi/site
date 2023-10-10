import React from "react"
import { Email , LocationOn, Phone } from '@mui/icons-material';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./Contacts.css"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

export default function Contacts() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_m5g1ku8',
     'template_cevuazh', 
     form.current,
      'XS3vO9PXYO4xV5fb9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <>
        <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="info-wrap">
                <h2 className="info-title">Contact Informationss</h2>
                <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul className="info-details">
                 
                    <li>
                        <Phone  className="group"/>
                        <span className="space">Phone:</span><p className="space">+ 234 07034989904</p> 
                    </li>
                    <li>
                        <Email  className="group"/>
                        <span className="space">Email:</span> <p className="space">galitech.tech@gmail.com</p>
                    </li>
                    <li>
                    <LocationOn className="group"/>
                        <span className="space">Address:</span>
                        <div className="address">
                        <p className="space">42 Olowu street off Awolowo road Ikeja</p><br></br>
                        <p>6011 168 avenue Edmonton alberta T5y3s6</p>
                        
                        </div> 

                    </li>
                  
                </ul>
                <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className="form-wrap">
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className="form-title">Send us a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                          <input type="text" name="user_name" placeholder="First Name" required />
                        </div>
                        <div class="form-group">
                          <input type="text" name="user_name" placeholder="Last Name"  required/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Mail" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="user_number" placeholder="Phone" required  />
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message" />
                        </div>
                    </div>
                    <input type="submit" value="Send" class="submit-button" />
                </form>
            </div>
        </div>
    </section>

























































   
    </>
  )
}













































































