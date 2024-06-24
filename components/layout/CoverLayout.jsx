import { cloneElement } from 'react'
import Logo from './Logo'
import Link from 'next/link'


const Cover = ({ children, content, ...rest }) => {
    return (
        <div className='app-layout-blank flex flex-auto flex-col h-[100vh]'>
            <div className='h-full flex flex-auto flex-col justify-between'>
                <main className='h-full'>
                    <div className='page-container relative h-full flex flex-auto flex-col'>
                        <div className="grid lg:grid-cols-3 h-full">
                            <div
                                className="col-span-2 bg-no-repeat bg-cover py-6 px-16 flex-col justify-between bg-white  hidden lg:flex"
                                style={{
                                    backgroundImage: `url('/car-bg-2.jpg')`,
                                }}
                            >
                                <Link href={'/'}><Logo mode="dark" imgClass='w-[45px]'/></Link>
                                <div>
                                    <h3 className="text-white mb-4 text-[1.5rem] leading-8 font-semibold">
                                        Welcome back to Our App
                                    </h3>
                                    <p className="text-lg text-white opacity-80 max-w-[700px]">
                                        The Road Assistant app designed to assist drivers with essential services such as gas refills, windshield cleaning, and towing. It provides a modern and intuitive interface to ensure a seamless and efficient driving experience.
                                    </p>
                                </div>
                                <span className="text-white text-[14px]">
                                    Copyright &copy; {`${new Date().getFullYear()}`}{' '}
                                    <span className="font-semibold">{`Road Assistant`}</span>{' '}
                                </span>
                            </div>
                            <div className="relative flex flex-col justify-center items-center bg-white ">
                                <div className="block lg:hidden absolute left-[32px] top-[10px]">
                                    <Link href={'/'}><Logo mode="dark" imgClass='w-[45px]'/></Link>
                                </div>
                                <div className="w-full xl:max-w-[550px] px-8 py-4">
                                    <div className="mb-8">{content}</div>
                                    {children
                                        ? cloneElement(children, { ...rest })
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Cover
