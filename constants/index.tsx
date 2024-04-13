import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faTools, faCarBattery, faGasPump } from '@fortawesome/free-solid-svg-icons';



export const NavLinksEN = [
    { href: '/', key: 'Home', text: 'Home' },
    { href: 'about', key: 'About', text: 'About' },
    { href: 'services', key: 'Services', text: 'Services' },
    { href: 'blog', key: 'Blog', text: 'Blog' },
    { href: 'career', key: 'Career', text: 'Career' },
    { href: 'contact', key: 'Contact', text: 'Contact' },
];
export const NavLinksAR = [
    { href: '/', key: 'الرئيسية', text: 'الرئيسية' },
    { href: 'about', key: 'حول', text: 'حول' },
    { href: 'services', key: 'الخدمات', text: 'الخدمات' },
    { href: 'blog', key: 'المدونة', text: 'المدونة' },
    { href: 'career', key: 'الوظائف', text: 'الوظائف' },
    { href: 'contact', key: 'اتصل بنا', text: 'اتصل بنا' },
];


type footer = ({
    title: string;
    links: {
        href: any;
        text: any;
    }[];
} | {
    title: any;
    links: any[];
})[]

export const footerLinksEN:footer = [
    {
        title: 'Company',
        links: [
            {
                href: '/',
                text: 'Home',
            },
            {
                href: 'faq',
                text: "FAQ's",
            },
            {
                href: 'services',
                text: 'Services',
            },
        ],
    },
    {
        title: 'Support',
        links: [
            {
                href: 'term-and-conditions',
                text: 'Terms & Conditions',
            },
            {
                href: 'privacy-policy',
                text: 'Privacy Policy',
            },
            {
                href: 'contact',
                text: 'Contact',
            },
        ],
    }
];
export const footerLinksAR:footer = [
    {
        title: 'الشركة',
        links: [
            {
                href: '/',
                text: 'الرئيسية',
            },
            {
                href: 'about',
                text: 'حول',
            },
            {
                href: 'services',
                text: 'الخدمات',
            },
        ],
    },
    {
        title: 'الدعم',
        links: [
            {
                href: 'term-and-conditions',
                text: 'الأحكام والشروط',
            },
            {
                href: 'privacy-policy',
                text: 'سياسة الخصوصية',
            },
            {
                href: 'contact',
                text: 'اتصل بنا',
            },
        ],
    }
];


export const ENbubbles: {
    title: string;
    img: any;
    desc: string;
}[] = [
    {
        title: 'Innovative Roadside Assistance',
        img: faTriangleExclamation,
        desc: "The ultimate roadside assistance experience - Road Assistant's got you covered"
    },
    {
        title: 'Motor Insurance Inspections',
        img: faCar,
        desc: 'Innovative car inspections through AI technology'
    },
    {
        title: 'Full Claim Cooperation',
        img: faMapLocationDot,
        desc: "Efficient inspection coordination From request to inspection, we've got you covered Simplify your inspection process today"
    },
];
export const ARbubbles = [
    {
        title: "المساعدة على الطريق المبتكرة",
        img: faTriangleExclamation,
        desc: "تجربة المساعدة على الطريق المثالية - Road Assistant's توفر لك كل ما تحتاجه"
    },
    {
        title: "فحص التأمين على السيارات",
        img: faCar,
        desc: "فحص مبتكر للسيارات من خلال تقنية الذكاء الاصطناعي"
    },
    {
        title: "التعاون الكامل للمطالبة",
        img: faMapLocationDot ,
        desc: "تنسيق فحص فعال، بدءًا من الطلب وحتى الفحص، نوفر لك كل ما تحتاجه. قم بتبسيط عملية الفحص الخاصة بك اليوم"
    },
];

export const HomeAboutEN = [
    {
        title: 'TOW TRUCKS',
        img: faTruck,
        desc: 'When the vehicle cannot be safely on the road after attending any of the emergency procedures provided, or in an accident situation a tow truck will be sent to vehicle location for assistance.'
    },
    {
        title: 'TIRE CHANGE',
        img: faTools,
        desc: 'In case of a flat tire and availability of usable spare tire in the vehicle, our providers will change the tires on the spot.'
    },
    {
        title: 'BATTERY JUMP START',
        img: faCarBattery,
        desc: 'If the battery on the vehicle is dead for whatever reason, our providers will assist in jump-starting the vehicle so you can carry on with your journey.'
    },
    {
        title: 'FUEL DELIVERY',
        img: faGasPump,
        desc: "An emergency towing service will be delivered to user’s disabled vehicle helping the user reach the nearest gas station."
    }
];
export const HomeAboutAR = [
    {
        title: "ونش إنقاذ",
        img: faTruck,
        desc: ". طلب ونش إنقاذ فى حالة تعسر السيارة عن الحركة بسبب عطل أو فى حالة الحوادث"
    },
    {
        title: "تغيير أو تصليح الإطارات",
        img: faTools,
        desc: ". فى حالة ثقب الإطارات مع عدم توافر إطار إضافى أو معدات لتغيير الإطارات يتم تقديم مساعدة من خلال أحد شركائنا لتغيير أو إصلاح الإطارات"
    },
    {
        title: "شحن البطارية",
        img: faCarBattery,
        desc: ". فى حالة نفاذ شحن البطارية أو توقفها عن العمل يتم إرسال أحد شركاء ماى داى بالمعدات اللازمة لشحن البطارية فى نفس مكان حدوث العطل"
    },
    {
        title: 'توصيل الوقود',
        img: faGasPump,
        desc: ". فى حالة نفاذ الوقود يتم نقل السيارة لأقرب محطة وقود أو توصيل وقود لمكان السيارة فى حالة إمكانية لذلك"
    }
];

export const services = [
    {
        title: 'Apps development',
        desc: 'Kassel excels in app development, crafting tailored solutions for optimal user experiences on both iOS and Android platforms. Our skilled team ensures seamless deployment, marrying innovation with functionality. From ideation to execution, Kassel delivers reliable, cutting-edge apps, meeting diverse business needs with a commitment to excellence on both major mobile platforms.'
    },
    {
        title: 'Websites Development',
        desc: 'Kassel excels in website development, creating visually stunning and functional sites tailored to diverse user needs. Our expert team ensures seamless experiences, optimizing responsiveness for all devices. From concept to launch, Kassel delivers innovative and reliable web solutions, empowering businesses with a strong online presence.'
    },
    {
        title: 'Web App Maintenance',
        desc: 'Kassel Company goes beyond development, providing tailor-made web app maintenance services. Our dedicated team ensures uninterrupted reliability and peak performance by expertly managing updates, troubleshooting, and scaling. Trust Kassel for proactive and efficient maintenance, ensuring seamless operation of your digital assets and empowering your business to thrive in the ever-evolving digital landscape. '
    },
    {
        title: 'Search Engine Optimization',
        desc: "Kassel Company specializes in Search Engine Optimization (SEO) services, optimizing online visibility for businesses. With a focus on strategic keyword placement, on-page optimization, and effective link building, their dedicated team ensures improved search engine rankings and increased organic traffic. Kassel Company's tailored approach empowers businesses to thrive in the digital landscape, driving sustainable growth and enhancing their online presence."
    },
    {
        title: 'Social Media Marketing',
        desc: "Kassel Company excels in Social Media Marketing (SMM), with a focus on platforms like Facebook, Twitter, and Instagram. Tailoring strategies for each platform's unique strengths, they drive brand visibility and engagement through compelling content and targeted campaigns. Kassel Company's expertise ensures businesses effectively connect with their audience, fostering brand loyalty and staying competitive in the digital realm."
    },
    {
        title: 'SAP',
        desc: "Kassel Company excels in SAP services, tailoring solutions for businesses of all sizes and industries. Specializing in implementation, customization, and ongoing support, our dedicated team ensures seamless integration and maximum efficiency. Focused on optimizing processes, data management, and advanced analytics, Kassel empowers organizations to stay ahead in today's competitive landscape while driving sustainable growth and innovation. "
    },
    {
        title: 'ORACLE',
        desc: "Kassel Company is a premier provider of Oracle services, delivering comprehensive solutions to empower businesses with cutting-edge technologies. Specializing in Oracle database management, implementation, and support, Kassel Company ensures optimal performance and scalability for its clients. With a focus on harnessing the full potential of Oracle's suite of applications, Kassel Company tailors solutions to meet the unique needs of each organization, promoting efficiency and innovation. Whether it's database optimization, cloud migration, or application development, Kassel Company's Oracle services are designed to elevate businesses, enabling them to thrive in the rapidly evolving digital landscape."
    },
    {
        title: 'Odoo',
        desc: "Kassel Company excels in providing Odoo services, leveraging years of experience to offer seamless implementation, customization, and ongoing support. With a deep understanding of Odoo's capabilities, our expert team ensures businesses harness its full potential across integrated management software. From optimizing accounting processes to enhancing CRM and e-commerce functionalities, Kassel Company tailors solutions to meet the unique needs of each organization. Our holistic approach empowers businesses to not only enhance efficiency but also foster collaboration and achieve overall business productivity. With Kassel as your partner, you can confidently navigate the complexities of Odoo implementation and unlock its transformative benefits for your organization. "
    },
]