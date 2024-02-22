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
                href: 'about',
                text: 'About',
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


export const ENbubbles = [
    {
        title: 'Websites Design & Development',
        img: 'bubble1.svg',
        desc: 'Kassel stands as a leading force in web development, offering comprehensive solutions tailored to client needs. '
    },
    {
        title: 'Apps Design & Development',
        img: 'bubble2.svg',
        desc: 'Kassel is at the forefront of app development, providing tailored solutions that elevate user experiences. '
    },
    {
        title: 'Digital Marketing',
        img: 'bubble3.svg',
        desc: 'Kassel distinguishes itself in the realm of digital marketing by offering comprehensive strategies that drive business growth.'
    },
    {
        title: 'SAP',
        img: 'bubble4.svg',
        desc: 'Kassel Company stands as a reliable and innovative provider of SAP services, offering a comprehensive suite of solutions tailored to meet the diverse needs of businesses. '
    },
    {
        title: 'ORACLE',
        img: 'bubble5.svg',
        desc: 'Kassel Company is a trusted provider of Oracle services. '
    },
    {
        title: 'Odoo',
        img: 'bubble6.svg',
        desc: 'Kassel Company is a distinguished provider of Odoo services.'
    },
];
export const ARbubbles = [
    {
        title: 'تصميم وتطوير المواقع',
        img: 'bubble1.svg',
        desc: 'تقف كاسل كقوة رائدة في تطوير الويب، حيث تقدم حلولاً شاملة مصممة خصيصًا لتلبية احتياجات العملاء.'
    },
    {
        title: 'تصميم وتطوير التطبيقات',
        img: 'bubble2.svg',
        desc: 'تعتبر شركة كاسل في طليعة شركات تطوير التطبيقات، حيث تقدم حلولاً مخصصة تعمل على الارتقاء بتجارب المستخدم.'
    },
    {
        title: 'التسويق الرقمي',
        img: 'bubble3.svg',
        desc: 'تميز كاسل نفسها في مجال التسويق الرقمي من خلال تقديم استراتيجيات شاملة تدفع نمو الأعمال.'
    },
    {
        title: 'اس بي ا',
        img: 'bubble4.svg',
        desc: 'تقف شركة كاسل كمزود موثوق ومبتكر لخدمات SAP، حيث تقدم مجموعة شاملة من الحلول المصممة لتلبية الاحتياجات المتنوعة للشركات.'
    },
    {
        title: 'اوراكل',
        img: 'bubble5.svg',
        desc: 'تعتبر شركة كاسل مزودًا موثوقًا لخدمات اوراكل .'
    },
    {
        title: 'اودوو',
        img: 'bubble6.svg',
        desc: 'شركة كاسل هي شركة متميزة في تقديم خدمات اودوو.'
    },
];

export const HomeAboutEN = [
    {
        title: 'app developments',
        img: 'user1.png',
        desc: 'complete solution for crafting innovative and tailored applications'
    },
    {
        title: 'Web Development',
        img: 'code.png',
        desc: 'Crafting innovative web solutions for business growth'
    },
    {
        title: 'Content Mangement',
        img: 'code2.png',
        desc: 'Streamlined app content management for businesses'
    },
    {
        title: 'Mobility',
        img: 'bar2.png',
        desc: 'Elevating businesses through cutting-edge mobility solutions'
    }
];
export const HomeAboutAR = [
    {
        title: 'تطوير التطبيقات',
        img: 'user1.png',
        desc: 'حلا كاملاً لصياغة تطبيقات مبتكرة ومصممة حسب الطلب'
    },
    {
        title: 'تطوير الويب',
        img: 'code.png',
        desc: 'صياغة حلاً ويب مبتكرًا لنمو الأعمال'
    },
    {
        title: 'إدارة المحتوى',
        img: 'code2.png',
        desc: 'إدارة ميسرة لمحتوى التطبيق للشركات'
    },
    {
        title: 'التنقل',
        img: 'bar2.png',
        desc: 'رفع مستوى الأعمال من خلال حلاول التنقل الحديثة'
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