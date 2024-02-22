import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useLocale } from "next-intl";


const recentPostsEN = [
    {
        id: 1,
        image: '/b1_1.png',
        href: '/blog-details1-1',
        title: 'Changing a domain name can be a strategic move for various reasons.',
        date: 'May 23, 2020',
    },
    {
        id: 2,
        image: '/b3_2.png',
        href: '/blog-details3-2',
        title: 'AI streamlines repetitive tasks',
        date: 'June 24, 2020',
    },
    {
        id: 3,
        image: '/b3_3.png',
        href: '/blog-details3-3',
        title: 'The integration of AI in customer service is not just a trend but a necessity. ',
        date: 'Aug 26, 2020',
    },
];
const recentPostsAR = [
    {
        id: 1,
        image: '/b1_1.png',
        href: '/blog-details1-1',
        title: 'يمكن أن يكون تغيير اسم النطاق خطوة استراتيجية لأسباب متنوعة.',
        date: '2020, مايو 23',
    },
    {
        id: 2,
        image: '/b3_2.png',
        href: '/blog-details3-2',
        title: 'الذكاء الاصطناعي يسهل المهام المتكررة',
        date: '2020, يونيو 24',
    },
    {
        id: 3,
        image: '/b3_3.png',
        href: '/blog-details3-3',
        title: 'إدماج الذكاء الاصطناعي في خدمة العملاء ليس مجرد اتجاه ولكن ضرورة.',
        date: '2021, 26 أغسطس',
    },
];


const RecentPostsWidget = () => {
    const localActive = useLocale()
    const recentPosts = localActive == 'en'?recentPostsEN : recentPostsAR

    return (
        <div className="">
            <div className="sidebar-widget">
            {localActive == 'en'? (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222]">Popular Posts <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></h4>
            ): (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222] text-right"><span><FontAwesomeIcon icon={faAngleDoubleLeft} /></span> منشورات شائعة</h4>
            )}
                <ul className="recent-post">
                    {recentPosts.map(post => (
                        <li key={post.id} className="mb-4">
                            <Link href={`/${localActive}${post.href}`} className={`flex justify-start gap-3 items-center ${localActive == 'ar'?"flex-row-reverse text-right":""}`}>
                                <Image width={1400} height={800} src={post.image} alt="blog" className='w-[100px]' />
                                <div className="r-post-content ml-15">
                                    <h3 className="theme-color">
                                        {post.title}
                                    </h3>
                                    <span>{post.date}</span>
                                </div> 
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecentPostsWidget;
