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
                                className="col-span-2 bg-no-repeat bg-cover py-6 px-16 flex-col justify-between bg-white dark:bg-gray-800 hidden lg:flex"
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
                                        Elstar comes with a complete set of UI components crafted with Tailwind CSS, it fulfilled most of the use case to create modern and beautiful UI and application
                                    </p>
                                </div>
                                <span className="text-white text-[14px]">
                                    Copyright &copy; {`${new Date().getFullYear()}`}{' '}
                                    <span className="font-semibold">{`Road Assistant`}</span>{' '}
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800">
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
