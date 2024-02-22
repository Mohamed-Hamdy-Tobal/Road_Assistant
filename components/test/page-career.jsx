// 'use client'

// import React, { useState } from 'react';
// import { motion } from "framer-motion"
// import { LeftRight, bottomVariants } from '@/components/animation'
// import Banner from '@/components/Banner';
// import axios from 'axios';
// import { useRouter } from 'next/navigation' 

// const CareerFrom = () => {
//     const router = useRouter();

//     const [file, setFile] = useState(null);
//     const [progress, setProgress] = useState({ started: false, pc: 0 });
//     const [msg, setMsg] = useState(null);

//     const handleUpload = () => {
//         if (!file) {
//             console.log("No file selected");
//         }
//         const fd = new FormData();
//         fd.append('resume', file);
    
//         setMsg("Uploading...");
//         setProgress(prevData => {
//             return { ...prevData, started: true }
//         })
//         axios.post('http://localhost:9000/resume', fd, {
//             onUploadProgress: (progressEvent) => {
//                 setProgress(prevState => {
//                     return { ...prevState, pc: (progressEvent.loaded / progressEvent.total) * 100 }
//                 });
//             },
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         })
//         .then((response) => { console.log(response.data); setMsg("Uploaded"); })
//         .catch((error) => { console.log(error); setMsg("Error"); });
//     };
    
//     return (
//         <div className="career-form overflow-hidden">
//             <Banner bannerTitle={'Career'} path={'Career'} bref={'Know more'} />
//             <div className="main-form py-[100px]">
//                 <div className="container">
//                     <div className="career-wrapper">
//                         <div className="career-form">
//                             <div className="title mb-8">
//                                 <h3 className="font-bold text-[45px] text-[#333] mb-5">Drop us a line</h3>
//                                 <p className="text-[18px] text-[#666]">
//                                     Fill Your Information, and we will contact you soon
//                                 </p>
//                             </div>

//                             <motion.form onSubmit={handleUpload} id="contact-career-form" variants={LeftRight} initial='initial' whileInView='animate'>
//                                 <div className="grid grid-cols-1 gap-4">
//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <div className="mb-3">
//                                             <label
//                                                 htmlFor="formFileLg"
//                                                 className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
//                                             >Attach any files you think could be useful (optional)</label>
//                                             <input
//                                                 className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
//                                                 id="formFile"
//                                                 name="file"
//                                                 type="file"
//                                                 onChange={(e) => { setFile(e.target.files[0]); }}
//                                             />
//                                         </div>
//                                     </motion.div>

//                                     <motion.div className="my-btn mt-8" variants={bottomVariants}>
//                                         <div>
//                                             <button
//                                                 className="btn btn-contact uppercase font-bold rounded-full transition duration-300 transform hover:scale-105 text-[20px]"
//                                                 type="button"
//                                                 onClick={handleUpload}
//                                             >
//                                                 Upload
//                                             </button>
//                                             {progress.started && <progress max="100" value={progress.pc}></progress>}
//                                             {msg && <span>{msg}</span>}
//                                         </div>
//                                     </motion.div>
//                                 </div>
//                             </motion.form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CareerFrom;


// 'use client'

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { motion } from "framer-motion"
// import { LeftRight, bottomVariants } from '@/components/animation'
// import Banner from '@/components/Banner';
// import axios, { AxiosResponse } from 'axios';
// import { useRouter } from 'next/navigation'

// interface FormData {
//     fname: string;
//     lname: string;
//     email: string;
//     phone: string;
//     about: string;
//     message: string;
//     resume: File | null; // Use File type for resume
// }

// const CareerFrom = () => {

//     const router = useRouter()

//     const [formData, setFormData] = useState<FormData>({
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         about: '',
//         message: '',
//         resume: null,
//     });

//     const handleInputChange = (
//         e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];

//         if (file) {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 resume: file,
//             }));
//         }
//     };

//     console.log('before : ',formData)

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
        
//         try {
            
//             console.log("Data submitted", formData)

//             // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//             const response: AxiosResponse = await axios.post('http://localhost:9000/career', formData, 
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Server response:', response.data);

//             // Optionally, reset the form
//             setFormData({
//                 fname: '',
//                 lname: '',
//                 email: '',
//                 phone: '',
//                 about: '',
//                 message: '',
//                 resume: null,
//             });

//             router.push('/')

//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };


//     return (
//         <div className="career-form overflow-hidden">
//             <Banner bannerTitle={'Career'} path={'Career'} bref={'Know more'} />
//             <div className="main-form py-[100px]">
//                 <div className="container">
//                     <div className="career-wrapper">
//                         <div className="career-form">
//                             <div className="title mb-8">
//                                 <h3 className="font-bold text-[45px] text-[#333] mb-5">Drop us a line</h3>
//                                 <p className="text-[18px] text-[#666]">
//                                     Fill You'r Information and we will contact You'r soon
//                                 </p>
//                             </div>

//                             <motion.form id="contact-career-form" onSubmit={handleSubmit} variants={LeftRight} initial='initial' whileInView='animate'>
//                                 <div className="grid grid-cols-1 gap-4">
//                                     <motion.div className="mb-4 aos-init aos-animate gap-8 grid grid-cols-1 lg:grid-cols-2 justify-between w-full" variants={LeftRight}>
//                                         <motion.input
//                                             className="name py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
//                                             type="text"
//                                             name="fname"
//                                             id="fname"
//                                             value={formData.fname}
//                                             onChange={handleInputChange}
//                                             placeholder="First Name"
//                                             variants={LeftRight}
//                                         />
//                                         <motion.input
//                                             className="name py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
//                                             type="text"
//                                             name="lname"
//                                             id="lname"
//                                             value={formData.fname}
//                                             onChange={handleInputChange}
//                                             placeholder="Last Name"
//                                             variants={LeftRight}
//                                         />
//                                     </motion.div>

//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <input
//                                             className="email w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleInputChange}
//                                             placeholder="Your Email"
//                                         />
//                                     </motion.div>

//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <input
//                                             className="phone w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
//                                             type="tel"
//                                             id="phone"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleInputChange}
//                                             placeholder="Your Phone"
//                                         />
//                                     </motion.div>
//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <input
//                                             className="here w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee]"
//                                             type="text"
//                                             name="about"
//                                             value={formData.about}
//                                             onChange={handleInputChange}
//                                             id="about"
//                                             placeholder="How did you hear about us ?"
//                                         />
//                                     </motion.div>
//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <textarea
//                                             className="massage w-full py-3 outline-none px-3 pr-2 border-[2px] border-[#eee] h-[200px]"
//                                             name="message"
//                                             value={formData.message}
//                                             id="message"
//                                             onChange={handleInputChange}
//                                             placeholder="Your Message"
//                                         ></textarea>
//                                     </motion.div>
//                                     <motion.div className="mb-4 aos-init aos-animate" variants={LeftRight}>
//                                         <div className="mb-3">
//                                             <label
//                                                 htmlFor="formFileLg"
//                                                 className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
//                                             >Attach any files you think could be useful (optional)</label>
//                                             <input
//                                                 className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
//                                                 id="formFile"
//                                                 name="file"
//                                                 type="file"
//                                                 onChange={handleFileChange}
//                                             />
//                                         </div>
//                                     </motion.div>

//                                     <motion.div className="my-btn mt-8" variants={bottomVariants}>
//                                         <button
//                                             className="btn btn-contact uppercase font-bold rounded-full transition duration-300 transform hover:scale-105 text-[20px]"
//                                             type="submit"
//                                             name="submit"
//                                         >
//                                             SUBMIT
//                                         </button>
//                                     </motion.div>
//                                 </div>
//                             </motion.form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CareerFrom