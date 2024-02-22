'use client'

// import Banner from '@/components/Banner'
// import ContactForm from '@/components/Contact/From'
// import Information from '@/components/Contact/Information'
import React from 'react'
import { useLocale } from "next-intl";


const Contact = () => {
    const localActive = useLocale()

    return (
        // <div className="contact overflow-hidden">
        //     {
        //         localActive == 'en'? (
        //             <Banner bannerTitle={'Contact Us'} path={'Contact'} bref={'Know more'} />
        //         ):(<Banner bannerTitle={'اتصل بنا'} path={'اتصل بنا'} bref={"تعرف أكثر"} />
        //         )
        //     }
        //     <div className="main-contact py-[100px]">
        //         <div className="container ">
        //             <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-2 gap-y-20">
        //                 <div className="contact-info blogs-info-details lg:col-span-2 xl:col-span-1">
        //                     <Information />
        //                 </div>
        //                 <div className="contact-form lg:col-span-3 xl:col-span-1">
        //                     <ContactForm />
        //                 </div>
        //             </div>
        //             <div className="map-container">
        //                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13534.790227467456!2d35.8850835!3d31.9962133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca13d1331d42f%3A0xe04c250b2e016ae0!2skasselsoft!5e0!3m2!1sar!2seg!4v1706995306619!5m2!1sar!2seg" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <h1>Contact</h1>
    )
}

export default Contact