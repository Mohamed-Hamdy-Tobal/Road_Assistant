import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './MainAccordion.css'
import { useLocale } from "next-intl";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const dataFAQEN = [
    {
        title: "How does your accident assistance feature work?",
        desc: "Our accident assistance feature utilizes advanced sensors and technology to detect accidents in real-time. Once an incident is detected, your precise location is sent to emergency services for swift assistance."
    },
    {
        title: "What other roadside assistance services do you provide?",
        desc: "In addition to accident support, we offer help for a variety of situations such as running out of fuel, tire punctures, engine overheating, and more. Our goal is to ensure you're covered for any roadside emergency"
    },
    {
        title: "How do users join your platform to offer help to others?",
        desc: "Joining our platform as a helper is easy! Simply sign up on our website or app,and you'll be ready to lend a hand to fellow drivers in need."
    },
    {
        title: "How quickly can I expect help to arrive in an emergency situation?",
        desc: "Response times vary depending on your location and the nature of the emergency. However, we strive to dispatch assistance as quickly as possible to ensure your safety and well-being."
    },
    {
        title: "Are there any geographical limitations to your service?",
        desc: " While we aim to provide assistance nationwide, there may be certain remote areas where coverage is limited. We continually work to expand our network and reach as many users as possible."
    },
    {
        title: "How is user privacy and data security ensured on your platform?",
        desc: "Protecting your privacy and data security is our top priority. We adhere to strict protocols and encryption standards to safeguard your personal information at all times."
    },
    {
        title: "How can I provide feedback or report a problem with your service",
        desc: "We value your feedback and strive to continuously improve our services. You can provide feedback through our app, website, or by contacting our customer support team directly. We're here to listen and address any concerns you may have."
    },
]
const dataFAQAR = [
    {
        title: "ما هو هيلبو ؟",
        desc: "تستخدم ميزة المساعدة في الحوادث لدينا أجهزة استشعار وتقنية متقدمة للكشف عن الحوادث في الوقت الفعلي. وبمجرد اكتشاف الحادث، يتم إرسال موقعك الدقيق إلى خدمات الطوارئ للحصول على مساعدة سريعة"
    },
    {
        title: "كيف تعمل ميزة المساعدة في الحوادث ؟",
        desc: "تستخدم ميزة المساعدة في الحوادث لدينا أجهزة استشعار وتقنية متقدمة للكشف عن الحوادث في الوقت الفعلي. وبمجرد اكتشاف الحادث، يتم إرسال موقعك الدقيق إلى خدمات الطوارئ للحصول على مساعدة سريعة"
    },
    {
        title: "ما هي خدمات المساعدة على الطريق الأخرى التي تقدمها ؟",
        desc: "بالإضافة إلى دعم الحوادث، فإننا نقدم المساعدة في مجموعة متنوعة من المواقف مثل نفاد الوقود، وانثقاب الإطارات، وارتفاع درجة حرارة المحرك، والمزيد. هدفنا هو ضمان حصولك على التغطية اللازمة لأي حالة طوارئ على جانب الطريق"
    },
    {
        title: "كيف ينضم المستخدمون إلى النظام الأساسي الخاص بك لتقديم المساعدة للآخرين ؟",
        desc:  "إن الانضمام إلى منصتنا كمساعد أمر سهل! ما عليك سوى الاشتراك في موقعنا أو تطبيقنا، وستكون جاهزًا لتقديم المساعدة لزملائك السائقين المحتاجين."
    },
    {
        title: "ما مدى سرعة وصول المساعدة في حالة الطوارئ ؟",
        desc: "تختلف أوقات الاستجابة حسب موقعك وطبيعة حالة الطوارئ. ومع ذلك، فإننا نسعى جاهدين لإرسال المساعدة في أسرع وقت ممكن لضمان سلامتك ورفاهيتك"
    },
    {
        title: "هل هناك أي قيود جغرافية على خدمتك ؟",
        desc: "بينما نهدف إلى تقديم المساعدة على المستوى الوطني، قد تكون هناك بعض المناطق النائية حيث التغطية محدودة. ونحن نعمل باستمرار على توسيع شبكتنا والوصول إلى أكبر عدد ممكن من المستخدمين"
    },
    {
        title: "كيف يتم ضمان خصوصية المستخدم وأمن البيانات على النظام الأساسي الخاص بك ؟",
        desc: ". حماية خصوصيتك وأمن بياناتك هي أولويتنا القصوى. نحن نلتزم ببروتوكولات ومعايير تشفير صارمة لحماية معلوماتك الشخصية في جميع الأوقات"
    },
    {
        title: "كيف يمكنني تقديم ملاحظات أو الإبلاغ عن مشكلة في خدمتك",
        desc: "نحن نقدر تعليقاتك ونسعى جاهدين لتحسين خدماتنا بشكل مستمر. يمكنك تقديم التعليقات من خلال التطبيق أو الموقع الإلكتروني الخاص بنا أو عن طريق الاتصال بفريق دعم العملاء مباشرةً. نحن هنا للاستماع إلى أي مخاوف قد تكون لديك والتعامل معها"
    },
]

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange =
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

    const localActive = useLocale()
    const dataFAQ = localActive == 'en' ? dataFAQEN : dataFAQAR

    return (
        <div className="grid lg:grid-cols-2 gap-5">
            <div className='main-accordion'>
                {dataFAQ.slice(0, 4).map((accordion, idx) => (
                    <Accordion key={idx} expanded={expanded === `panel${idx + 1}`} onChange={handleChange(`panel${idx + 1}`)}>
                        <AccordionSummary aria-controls={`panel${idx + 1}d-content`} id={`panel${idx + 1}d-content`}>
                            <Typography className={`${localActive == 'ar' ? 'text-right w-full' : ''}`}>{accordion.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={`${localActive == 'ar' ? 'text-right' : ''}`}>{accordion.desc}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <div className='main-accordion'>
                {dataFAQ.slice(4).map((accordion, idx) => (
                    <Accordion key={idx} expanded={expanded === `panel${idx + 5}`} onChange={handleChange(`panel${idx + 5}`)}>
                        <AccordionSummary aria-controls={`panel${idx + 5}d-content`} id={`panel${idx + 5}d-content`}>
                            <Typography className={`${localActive == 'ar' ? 'text-right w-full' : ''}`}>{accordion.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={`${localActive == 'ar' ? 'text-right' : ''}`}>{accordion.desc}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}