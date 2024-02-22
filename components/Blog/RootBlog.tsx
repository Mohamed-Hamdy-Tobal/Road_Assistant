import React from 'react'
import RecentPostsWidget from './SideBlog/Recent'
import Categories from './SideBlog/Categories'
import TagsWidget from './SideBlog/Tags'
import { useLocale } from "next-intl";


const RootBlog = ({ children }: { children: React.ReactNode }) => {
    const localActive = useLocale()
    return (
        <div>

            {
                localActive == 'en' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-20 gap-[70px] lg:gap-[40px] ">
                        <div className="blogs-form relative lg:col-span-3">{children}</div>
                        <div className="blogs-info-details lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[20px] md:gap-[60px] lg:gap-[20px] justify-between">
                                <RecentPostsWidget />
                                <Categories />
                            </div>
                            <TagsWidget />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-20 gap-[70px] lg:gap-[40px] ">
                        <div className="blogs-info blogs-info-details lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[20px] md:gap-[60px] lg:gap-[20px] justify-between">
                                <RecentPostsWidget />
                                <Categories />
                            </div>
                            <TagsWidget />
                        </div>
                        <div className="blogs-form relative lg:col-span-3">{children}</div>
                    </div>
                )
            }

        </div>
    )
}


export default RootBlog