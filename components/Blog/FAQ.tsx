import React from 'react';
import { useLocale } from "next-intl";


const FAQsEN = [
    {
        question: "Is changing the domain name a wise idea?",
        answer: "Changing your domain name for branding purposes can have long-term benefits."
    },
    {
        question: "What length domain name is ideal for SEO?",
        answer: "Short domain names, typically 3 to 4 terms, are recommended for better memorability."
    },
    {
        question: "Does a domain's name impact search ranking?",
        answer: "While domain names don't directly impact rankings, a memorable and brand-aligned name can positively affect user engagement."
    },
    {
        question: "Which is better for SEO, .com or .net?",
        answer: "There's no SEO distinction between .com and .net. Overall SEO strategy matters more than the domain extension."
    },
    {
        question: "Can I have two domains for the same website?",
        answer: "Yes, you can route multiple domains to the same website for increased online visibility."
    },
    {
        question: "Does Google penalize the forwarding of domains?",
        answer: "No, changing domain names is not subject to penalties, but temporary interruptions in indexing and ranking may occur."
    },
];
const FAQsAR = [
    {
        question: "هل تغيير اسم النطاق فكرة حكيمة؟",
        answer: "يمكن أن يكون تغيير اسم النطاق الخاص بك لأغراض العلامة التجارية له فوائد طويلة المدى."
    },
    {
        question: "ما هو طول اسم النطاق المثالي لتحسين محرك البحث؟",
        answer: "يُفضل اختيار أسماء نطاق قصيرة، عادةً من 3 إلى 4 مصطلحات، لتحسين قابلية التذكر."
    },
    {
        question: "هل يؤثر اسم النطاق على ترتيب البحث؟",
        answer: "بينما لا يؤثر اسم النطاق مباشرة على الترتيب، إلا أن اسمًا يتميز بالتذكر ويرتبط بالعلامة التجارية يمكن أن يؤثر إيجابيًا على مشاركة المستخدم."
    },
    {
        question: "ما هو أفضل لتحسين محرك البحث .كوم او .نت؟",
        answer: "لا يوجد تمييز في تحسين محرك البحث بين .com و .net. تستمر استراتيجية تحسين محرك البحث الشاملة في الأهمية أكثر من امتداد النطاق."
    },
    {
        question: "هل يمكنني الحصول على نطاقين لنفس الموقع لتحسين مرئيته على الإنترنت؟",
        answer: "نعم، يمكنك توجيه عدة نطاقات إلى نفس الموقع لزيادة رؤيته على الإنترنت."
    },
    {
        question: "هل تعاقب جوجل على إعادة توجيه النطاقات؟",
        answer: "لا، لا يخضع تغيير أسماء النطاقات لعقوبات، ولكن قد تحدث انقطاعات مؤقتة في فهرسة وترتيب الصفحات."
    },
];


const FAQSection = () => {
    const localActive = useLocale()
    const FAQs = localActive == 'en'?FAQsEN:FAQsAR

    return (
        <section>
            <h3 className={`text-sm font-semibold leading-7 text-slate-400 w-full ${localActive == 'ar'? "text-right":""}`}>
                {localActive == 'en'?"FAQs":"الأسئلة الشائعة"}
            </h3>
            <dl className="mt-2 divide-y divide-slate-100">
                {FAQs.map((faq, index) => (
                    <div  key={index} className={`${localActive =='ar'?"text-right":""}`}>
                        <details className="group py-4 marker:content-['']">
                            <summary className={`${localActive =='ar'?"flex-row-reverse text-right":""} flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-mainColor [&amp;::-webkit-details-marker]:hidden`}>
                                {faq.question}
                                <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="pb-6 pt-6">
                                <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-mainColor hover:prose-a:text-indigo-500">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </details>
                    </div>
                ))}


                {/* Repeat the pattern for other FAQ items */}
            </dl>
        </section>
    );
};

export default FAQSection;
