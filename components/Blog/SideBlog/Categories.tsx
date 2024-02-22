import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";



const blogsEN = [
    { id: 1, title: 'Web Design' },
    { id: 2, title: 'Development' },
    { id: 3, title: 'Programming' },
    { id: 4, title: 'Artificial Intelligence' },
    { id: 5, title: 'SEO' },
];
const blogsAR = [
    { id: 1, title: 'تصميم الويب' },
    { id: 2, title: 'التطوير' },
    { id: 3, title: 'البرمجة' },
    { id: 4, title: 'الذكاء الاصطناعي' },
    { id: 5, title: 'تحسين محركات البحث (SEO)' },
];



const Categories = () => {
    const localActive = useLocale()

    const blogs = localActive == 'en' ? blogsEN : blogsAR

    return (
        <div className={`categories pt-5 ${localActive == 'ar' ? "text-right" : ''}`}>
            {localActive == 'en' ? (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222]">Popular Posts <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></h4>
            ) : (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222]"><span><FontAwesomeIcon icon={faAngleDoubleLeft} /></span> منشورات شائعة</h4>
            )}
            <ul>
                {blogs.map(blog => (
                    <li className='pb-4' key={blog.id}>

                        {
                            localActive == 'en' ? (
                                <>
                                    <span className='pr-2 text-[#6c63ff]'><FontAwesomeIcon icon={faCaretRight} /> </span>
                                    <span className='text-[#222]'>{blog.title}</span>
                                </>
                            ) : (
                                <>
                                    <span className='text-[#222]'>{blog.title} </span>
                                    <span className='pr-2 text-[#6c63ff]'><FontAwesomeIcon icon={faCaretLeft} /> </span>
                                </>
                            )
                        }
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Categories