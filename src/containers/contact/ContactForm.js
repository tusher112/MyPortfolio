import React, { useRef } from 'react';
import "./contactus.css";
import emailjs from '@emailjs/browser';
import Contact from './Contact';

 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_tq198hi", "template_1srih37", form.current, 'wln0vbAN1ekDve7z0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Thank you for submitting your request I will get in touch with you shortly.");
      form.current.reset();
      
  };

  return (
   
    <div className='contact-container'>
      <div>
      {/* <Contact></Contact> */}
      </div>


    <div>
    <form ref={form} onSubmit={sendEmail}>

    <table>
      <tr>
        <td>Name</td>
        <td><input type="text" name="name" required className='form-control-plaintext'/> </td>
        </tr>
         <tr> 
          <td> <label>Email</label> </td> 
          <td> <input type="email" name="email" required className='form-control-plaintext'/>  </td>
         </tr>
         <tr>
            <td>Subject</td>
            <td><input type="text" name="subject" required className='form-control-plaintext'/> <br/></td> 
          </tr>
          <tr>
            <td>Message</td>
            <td><textarea name="message" required className='form-control-plaintext'/></td>
          </tr>

    </table>
       <input type="submit" className='btn btn-success' value="Send" />

    </form>
    </div>
 </div>
  );
};
export default ContactUs;

