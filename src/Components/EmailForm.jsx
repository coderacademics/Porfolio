import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const EmailForm = () => {
    const form = useRef();
    const notify = () => toast.success('Message sent successfully!!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_81wj5gd", "template_i2exeik", form.current, "trI7s_DLkO4CxPfpL")
            .then((result) => {
                console.log(result.text);
                notify();
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='contact-me-form' data-aos="fade-up"
        data-aos-duration="750">
            <label className='contact-me-form-label'>Name:</label>
            <input type="text" name="from_name" className='contact-me-form-input' placeholder='Enter your Name...' />
            <label className='contact-me-form-label'>Email Address:</label>
            <input type="email" name="email_id" className='contact-me-form-input' placeholder='Enter your Email Address...' />
            <label className='contact-me-form-label'>Subject of Email:</label>
            <input type="text" name="message_subject" className='contact-me-form-input' placeholder='Enter the Email Subject..' />
            <label className='contact-me-form-label'>Message:</label>
            <textarea name="message" rows="6" className='contact-me-form-input' placeholder='Enter your Message ...' />
            <button type="submit" value="Send Mail" className='contact-me-form-btn'>Send Mail</button>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </form>
    );
};