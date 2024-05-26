"use client";

import React from 'react'
import { LeftRight, bottomVariants } from '@/components/animation';
import { motion } from 'framer-motion';

const JobFom = () => {
    return (
        <motion.form id="contact-career-form" onSubmit={handleSubmit} variants={LeftRight} initial='initial' whileInView='animate'>
            <div className="grid grid-cols-1 gap-4">
                <motion.div className="mb-4 aos-init aos-animate gap-8 grid grid-cols-1 lg:grid-cols-2 justify-between w-full" variants={LeftRight}>
                    <motion.input
                        className="name py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        variants={LeftRight}
                    />
                    <motion.input
                        className="name py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        variants={LeftRight}
                    />
                </motion.div>

                <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                    <input
                        className="email w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                    />
                </motion.div>

                <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                    <input
                        className="phone w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone"
                    />
                </motion.div>
                <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                    <input
                        className="here w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
                        type="text"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        id="hearAbout"
                        placeholder="How did you hear about us ?"
                    />
                </motion.div>
                <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                    <textarea
                        className="massage w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee] h-[200px]"
                        name="message"
                        value={formData.message}
                        id="message"
                        onChange={handleInputChange}
                        placeholder="Your Message"
                    ></textarea>
                </motion.div>
                <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
                    <div className="mb-3">
                        <label
                            htmlFor="formFileLg"
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Attach any files you think could be useful (optional)</label>
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            id="formFile"
                            name="file"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                </motion.div>

                <motion.div className="my-btn mt-8" variants={bottomVariants}>
                    <button
                        className="btn btn-contact uppercase font-bold rounded-full transition duration-300 transform hover:scale-105 text-[20px]"
                        type="submit"
                        name="submit"
                    >
                        SUBMIT
                    </button>
                </motion.div>
            </div>
        </motion.form>
    )
}

export default JobFom