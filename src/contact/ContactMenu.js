import React, { useState } from 'react'
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";

export default function ContactMenu() {
  const initialState = {
    name:"",
    email:"",
    message:"",
  };

  const [formData , setFormData]= useState(initialState);
  const [errors , setErrors]= useState({});
  const [isloading , setIsLoading]= useState(false);
  const [isSent , setIsSent]= useState(false);

  const handleChange=(e) => {
    const {name , value} = e.target ;
    setFormData((prevFormData)=> ({
        ...prevFormData ,
        [name]: value,
    }));
  };

  const handleSubmit=(e) => {
    e.preventDefault();
    const validateErrors = validateForm() ;
    if (Object.keys(validateErrors).length > 0){
        setErrors(validateErrors);
        return;
    }
    
    setIsLoading(true);
    const {name,email,message} = formData;
    const templateParams = {
        name: "name :"+ DOMPurify.sanitize(name),
        email: "Email :"+DOMPurify.sanitize(email),
        message: "message :"+DOMPurify.sanitize(message),
    };
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
        console.error("EmailJS config missing. Check your REACT_APP_EMAILJS_* env vars.");
        setErrors({ submit: "Unable to send message right now. Please try again later." });
        setIsLoading(false);
        return;
    }

    emailjs.init(userID);

    emailjs
    .send(serviceID, templateID, templateParams)
    .then((response)=>{
        console.log("email is sent successfully", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
    })
    .catch((error)=>{
        console.error("Email sending failed",error);
    })
    .finally(()=>{
        setIsLoading(false);
    })
    ;
};

const validateForm = () => {
    const{name , email , message} = formData;
    const errors = {};

    if (!name.trim()){
        errors.name= "Name is required";
    }

    if (!email.trim()){
        errors.email= "Email is required";
    }else if (!isValidEmail(email)){
        errors.email="Invalid email format";

    } 

    if (!message.trim()){
        errors.message= "message is required";
    }

    return errors;
};
const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
};
return <div className='contact-menu'>
    {!isSent && (<form onSubmit={handleSubmit}>
        <div className='form-group'> 
            <label htmlFor='name'>Name : </label>
            <input type='text'
             id='name'
              name='name'
               placeholder='Name'
                value={formData.name}
                 onChange={handleChange}
                 className={errors.name ? "error" : ""}
                 disabled={isloading}/> {errors.name && (
                    <span className='error-message'> {errors.name}</span>
                 )}
        </div>
        <div className='form-group'> 
            <label htmlFor='email'>Email : </label>
            <input type='email'
             id='email'
              name='email'
               placeholder='Email'
                value={formData.email}
                 onChange={handleChange}
                 className={errors.email ? "error" : ""}
                 disabled={isloading}/> {errors.email && (
                    <span className='error-message'> {errors.email}</span>
                 )}
        </div>
        <div className='form-group'> 
            <label htmlFor='message'>Message : </label>
            <textarea 
             id='message'
              name='message'
               placeholder='message'
                value={formData.message}
                 onChange={handleChange}
                 className={errors.message ? "error" : ""}
                 disabled={isloading}></textarea>
                  {errors.message && (
                    <span className='error-message'> 
                    {errors.message}</span>
                 )}
        </div>
                <button type='submit' disabled={isloading}>
                    {isloading ? "SENDING..." : "SUBMIT"}
                </button>
        </form>
       ) }
        {isSent && (
        <div className='success-message'>
            <p>SUCCESS!</p>
            <p>Your message has been successfully sent!</p>
            <p>You can safely leave this page</p>
            </div>
            )}

</div>
}
