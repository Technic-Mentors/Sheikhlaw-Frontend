import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [successMessage, setSuccessMessage] = useState("");
const formRef = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  const form = formRef.current;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();


  const nameI = document.getElementById("nameI");
  const emailI = document.getElementById("emailI");
  const subjectI = document.getElementById("subjectI");
  const messageI = document.getElementById("messageI");

  let hasError= false;

  if(!name){
    nameI.innerText = "Please fill this field ";
    hasError = true;
  }else{
    nameI.innerText= "";
  }

  if(!email){
    emailI.innerText = "Please fill this field ";
    hasError = true;
  }else{
    emailI.innerText= "";
  }


  if(!subject){
    subjectI.innerText = "Please fill this field ";
    hasError = true;
  }else{
    subjectI.innerText= "";
  }


  if(!message){
    messageI.innerText = "Please fill this field ";
    hasError = true;
  }else{
    messageI.innerText= "";
  }


if(hasError){
  return;
}

emailjs
.sendForm(
  "service_kjk8y1a", "template_lc035pj", formRef.current, "ZFbDufHGULjHKZGqF"
)


.then((response) => {
  formRef.current.reset();
  setSuccessMessage ("Your Message Is Sent Successfully");
  setTimeout(() => {
    setSuccessMessage("");
  }, 3000);
});
};
  return (
    <div>
      <div
          className="background-image1"
          style={{ backgroundImage: `url(${"page-head.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div >
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
                // style={{ fontSize: 60 }}
              >
                 Contact Us
              </h1>
            </div>
          </div>
        </div>


        <section style={{backgroundColor: "#F6F9FE"}}>
          <div class="contact ">
            <div class="container">
                <div class="section-header mb-5 mt-5 text-center" data-aos="fade-up" data-aos-offset="200">
                    <h2>Get In Touch</h2>
                    <h3>Get In Touch For Any Query</h3>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-5" data-aos="fade-up" data-aos-offset="200">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Our Head Office</h3>
                                <p>1st floor office # 7, F block Trust Plaza, G.T Road، Model Town, Gujranwala, Punjab Pakistan</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Call for Help</h3>
                                <p>+92 302 9655723</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Email for Information</h3>
                                <p>arslan.sh.adv@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7" data-aos="fade-up" data-aos-offset="200">
                        <div class="contact-form">
                            <div id="success"></div>
                            {successMessage && <div style={{color: "green"}}><i class="fas fa-check"></i>{successMessage}</div>}<br/>
                            <form name="sentMessage" onSubmit={sendEmail} ref={formRef} id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="form-control" name='name' id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <div id="nameI" style={{ color: "red" }}></div>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" name='email' id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <div id="emailI" style={{ color: "red" }}></div>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" name='subject' id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <div id="subjectI" style={{ color: "red" }}></div>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" name='message' id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <div id="messageI" style={{ color: "red" }}></div>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-12 mt-3' data-aos="fade-up" data-aos-offset="200">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.130191215097!2d74.17977397463459!3d32.17376381457227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29e70101f963%3A0xd62c4650a312be9a!2sTrust%20Plaza!5e0!3m2!1sen!2s!4v1699428912255!5m2!1sen!2s" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

        </section>



    </div>
  )
}

export default Contact
