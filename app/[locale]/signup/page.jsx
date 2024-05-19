import Register from '@/components/Auth/Register'
import Cover from '../../../components/layout/CoverLayout'
import dynamic from 'next/dynamic'

const SignInCover = () => {
    return (
        <Cover
            content={
                <>
                    <h3 className="mb-1 text-[1.5rem] leading-8 font-semibold text-[#111827]">Sign Up</h3>
                    <p className='text-[14px] text-[#6b7280]'>And lets get started with your free trial!</p>
                </>
            }
        >
            <Register/>
        </Cover>
    )
}

export default dynamic(() => Promise.resolve(SignInCover), { ssr: false })