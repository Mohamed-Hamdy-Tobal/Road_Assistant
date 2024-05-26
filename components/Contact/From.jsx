"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { LeftRight, bottomVariants } from '@/components/animation'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useLocale } from "next-intl";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';


const ContactForm = () => {
    // Initialize state for form data and error handling
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [inputChanged, setInputChanged] = useState(true);

    useEffect(() => {
        const isAnyInputChange = Object.values(formData).some(value => value !== '');
        console.log('isAnyInputChange', isAnyInputChange)
        setInputChanged(!isAnyInputChange);
    }, [formData]);

    const [errorN, setEN] = useState('');
    const [nameShow, setNameShow] = useState(false);

    const [errorE, setEE] = useState('');
    const [emailShow, setEmailShow] = useState(false);

    const [errorPhone, setPhoneError] = useState('');
    const [phoneShow, setPhoneShow] = useState(false);

    const [errorMessage, setMessageError] = useState('');
    const [messageShow, setMessageShow] = useState(false);

    // Initialize useRouter hook
    const router = useRouter();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Regular expression for email validation

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure formData
        const { name, email, phone, message } = formData;

        // Validate name
        if (name === '') {
            setEN('Empty Field');
            setNameShow(true);
        } else if (name.length < 10) {
            setEN('Must be more than 10 characters');
            setNameShow(true);
        } else {
            setNameShow(false);
        }

        // Validate email using regular expression
        if (email === '') {
            setEE('Empty Field');
            setEmailShow(true);
        } else {
            if (!emailRegex.test(email)) {
                setEE('Invalid Email Format');
                setEmailShow(true);
            } else {
                setEmailShow(false);
            }
        }
        if (phone === '' && !/^\d{10}$/.test(phone)) {
            setPhoneError('Invalid Phone Number');
            setPhoneShow(true);
        } else {
            setPhoneShow(false);
        }

        // Validate message
        if (message === '' && message.length < 20) {
            setMessageError('Must be at least 20 characters');
            setMessageShow(true);
        } else {
            setMessageShow(false);
        }

        // If there are errors, log and exit
        if (nameShow || emailShow || phoneShow || messageShow) {
            console.log('Please fix the form errors');
        } else {
            // If no errors, submit the form
            console.log('Data submitted', formData);

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            toast.success(`Data Sent Successfully`, {position: 'bottom-left'})

            router.push('/')

            // try {
            //     // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            //     const response = await axios.post('https://wevr.tech/eslam.wevr.tech/public/api/contact/insert', formData);
            //     // console.log('Server response:', response.data);

            //     // Optionally, reset the form
            //     setFormData({
            //         name: '',
            //         email: '',
            //         phone: '',
            //         message: '',
            //     });
            //     toast.success(`Data Sent Successfully`, {position: 'bottom-left'})

            //     router.push('/')

            // } catch (error) {
            //     console.error('Error submitting form:', error);
            // }
        }
    }

    const localActive = useLocale()
    

    return (
        <div className="contact-wrapper">
            <div className="contact-form">
                <div className={`title mb-8 ${localActive == 'ar'?"text-right":""}`}>
                    <h3 className="font-bold text-[45px] text-[#333] mb-5">
                        {
                            localActive == 'en' ? "Drop us a line" : "اترك لنا بياناتك"
                        }
                    </h3>
                    <p className="text-[18px] text-[#666]">
                        {
                            localActive == 'en' ? "Fill You'r Information and we will contact You'r soon" : "املأ معلوماتك وسنتصل بك قريبًا"
                        }
                    </p>
                </div>

                <motion.form id="contact-form" onSubmit={handleSubmit} variants={LeftRight} initial='initial' whileInView='animate'>
                    <div className={`grid grid-cols-1 gap-4 ${localActive == 'ar' ? "text-right" : ""}`}>
                        <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                            <input
                                className={`name w-full py-3 outline-none ${localActive == 'ar' ? "text-right" : ""} px-3 pr-2 border-[2px] border-[#eee]`}
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={`${localActive == 'en' ? "Your Name" : "اسمك"}`}
                            />
                            {nameShow && <h4 className='error text-red-500 text-[500]'>{errorN}</h4>}

                        </motion.div>

                        <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                            <input
                                className={`email w-full py-3 outline-none ${localActive == 'ar' ? "text-right" : ""} px-3 pr-2 border-[2px] border-[#eee]`}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={`${localActive == 'en' ? "Your Email" : "الايميل"}`}
                            />
                            {emailShow && <h4 className='error text-red-500 text-[500]'>{errorE}</h4>}
                        </motion.div>

                        <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                            <input
                                className={`phone w-full py-3 outline-none ${localActive == 'ar' ? "text-right" : ""} px-3 pr-2 border-[2px] border-[#eee]`}
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={`${localActive == 'en' ? "Your Phone" : "هاتفك"}`}
                            />
                            {phoneShow && <h4 className='error text-red-500 text-[500]'>{errorPhone}</h4>}
                        </motion.div>
                        <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                            <textarea
                                className={`massage w-full py-3 outline-none ${localActive == 'ar' ? "text-right" : ""} px-3 pr-2 border-[2px] border-[#eee] h-[200px]`}
                                name="message"
                                value={formData.message}
                                id="message"
                                onChange={handleInputChange}
                                placeholder={`${localActive == 'en' ? "Your Message" : "رسالتك"}`}
                            ></textarea>
                            {messageShow && <h4 className='error text-red-500 text-[500]'>{errorMessage}</h4>}
                        </motion.div>

                        <motion.div className="my-btn mt-8" variants={bottomVariants}>
                            <Button 
                                className="btn2 btn-contact uppercase font-bold rounded-full transition duration-300 transform hover:scale-105 text-[20px]"
                                type="submit"
                                name="submit"
                                disabled={inputChanged}
                                >
                                {localActive == 'en' ? "SUBMIT" : "تسجيل"}
                            </Button>
                        </motion.div>
                    </div>
                </motion.form>
            </div>
        </div>
    );
};



export default ContactForm;
