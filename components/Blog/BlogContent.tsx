import React from 'react'

const BlogContent = ({ h1, desc }: { h1: string, desc: string }) => {
    return (
        <div className='mb-[50px]'>
            <h1 className='font-bold text-[20px] mb-3 text-[#333]'>{h1}</h1>
            {desc && <p className='text-[18px] text-textGr my-3'>{desc}</p>}
        </div>
    )
}


export default BlogContent