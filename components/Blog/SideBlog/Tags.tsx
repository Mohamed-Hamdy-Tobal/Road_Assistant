import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";

const TagsWidget = () => {
    // Sample array of tags
    const tagsEN = ["Mirgbai", "Bangla", "Algorithm", "Facebook", "Social Network", "Ios", "Bootstraping", "Android"];
    const tagsAR = ["ميرغباي", "بنغلا", "خوارزمية", "فيسبوك", "شبكة اجتماعية", "iOS", "تمهيد", "أندرويد"];

    const localActive = useLocale()

    const tags = localActive == 'en'? tagsEN: tagsAR

    return (
        <div className={`sidebar-widget my-8 ${localActive == 'ar'? 'text-right':""}`}>
            
            {localActive == 'en'? (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222]">Popular Posts <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></h4>
            ): (
                <h4 className="pb-[20px] font-bold text-[20px] text-[#222]"><span><FontAwesomeIcon icon={faAngleDoubleLeft} /></span> منشورات شائعة</h4>
            )}
            <ul className={`search-tag flex flex-wrap gap-2 ${localActive == 'ar'? "justify-end":""}`}>
                {tags.map((tag, index) => (
                    <li key={index} className="px-4 py-3 rounded-full text-sm font-bold border-textGr hover:border-mainColor cursor-pointer border-[1px] text-textGr hover:text-white bg-white hover:bg-mainColor transition-all duration-300">
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagsWidget;
