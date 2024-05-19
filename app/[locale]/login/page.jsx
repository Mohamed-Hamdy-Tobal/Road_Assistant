import Login from '@/components/Auth/Login'
import Cover from '../../../components/layout/CoverLayout'
import dynamic from 'next/dynamic'

const SignInCover = () => {
    return (
        <Cover
            content={
                <>
                    <h3 className="mb-1 text-[1.5rem] leading-8 font-semibold text-[#111827]">Welcome back!</h3>
                    <p className='text-[14px] text-[#6b7280]'>Please enter your credentials to sign in!</p>
                </>
            }
        >
            <Login/>
        </Cover>
    )
}

export default dynamic(() => Promise.resolve(SignInCover), { ssr: false })