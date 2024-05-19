// "use client"

// import { useState } from 'react'
// import FormItem from '../../../components/ui/Form/FormItem'
// import FormContainer from '../../../components/ui/Form/FormContainer'
// import Input from '../../../components/ui/Input'
// import Button from '../../../components/ui/Button'
// // import Checkbox from '../../../components/ui/Checkbox'
// import { Field, Form, Formik } from 'formik'
// import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
// import * as Yup from 'yup'

// const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email Required'),
//     userName: Yup.string()
//         .min(3, 'Too Short!')
//         .max(12, 'Too Long!')
//         .required('User Name Required'),
//     password: Yup.string()
//         .required('Password Required')
//         .min(8, 'Too Short!')
//         .matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
//     rememberMe: Yup.bool(),
// })

// const Basic = () => {
//     const [pwInputType, setPwInputType] = useState('password')

//     const onPasswordVisibleClick = (e) => {
//         e.preventDefault()
//         setPwInputType(pwInputType === 'password' ? 'text' : 'password')
//     }

//     const passwordVisible = (
//         <span
//             className="cursor-pointer"
//             onClick={(e) => onPasswordVisibleClick(e)}
//         >
//             {pwInputType === 'password' ? (
//                 <HiOutlineEyeOff />
//             ) : (
//                 <HiOutlineEye />
//             )}
//         </span>
//     )

//     return (
//         <div className='form-ui'>
//             <Formik
//                 initialValues={{
//                     email: '',
//                     userName: '',
//                     password: '',
//                     rememberMe: false,
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, { resetForm, setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2))
//                         setSubmitting(false)
//                         resetForm()
//                     }, 400)
//                 }}
//             >
//                 {({ touched, errors, resetForm }) => (
//                     <Form>
//                         <FormContainer>
//                             <FormItem
//                                 label="Email"
//                                 invalid={errors.email && touched.email}
//                                 errorMessage={errors.email}
//                             >
//                                 <Field
//                                     type="email"
//                                     autoComplete="off"
//                                     name="email"
//                                     placeholder="Email"
//                                     component={Input}
//                                 />
//                             </FormItem>
//                             <FormItem
//                                 label="User Name"
//                                 invalid={errors.userName && touched.userName}
//                                 errorMessage={errors.userName}
//                             >
//                                 <Field
//                                     type="text"
//                                     autoComplete="off"
//                                     name="userName"
//                                     placeholder="User Name"
//                                     component={Input}
//                                 />
//                             </FormItem>
//                             <FormItem
//                                 label="Password"
//                                 invalid={errors.password && touched.password}
//                                 errorMessage={errors.password}
//                             >
//                                 <Field
//                                     type={pwInputType}
//                                     suffix={passwordVisible}
//                                     autoComplete="off"
//                                     name="password"
//                                     placeholder="Password"
//                                     component={Input}
//                                 />
//                             </FormItem>
                            
//                             <FormItem>
//                                 <Button
//                                     type="reset"
//                                     className="ltr:mr-2 rtl:ml-2"
//                                     onClick={() => resetForm()}
//                                 >
//                                     Reset
//                                 </Button>
//                                 <Button variant="solid" type="submit">
//                                     Submit
//                                 </Button>
//                             </FormItem>
//                         </FormContainer>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// export default Basic


// import SignInForm from "../../../components/Auth/SignInForm";
"use client"
import { useLocale } from "next-intl";
import Link from "next/link";
import dynamic from 'next/dynamic'
import Login from '@/components/Auth/Login'
import Cover from '@/components/layout/CoverLayout'

const SignIn = () => {

    const localActive = useLocale()

    return (
        <Cover
            content={
                <>
                    <h3 className="mb-1">Welcome back!</h3>
                    <p>Please enter your credentials to sign in!</p>
                </>
            }
        >
            <Login />
            <span>Not a member? <Link href={`/${localActive}/signup`} className='text-[#2B5F1D] underline hover:text-[#2b5f1dbb] font-semibold transition-all'>Create an account</Link></span>
        </Cover>
        // <div className="auth-wrapper">
        //     <main className="main-auth">
        //         <div className="cover flex justify-center items-center gap-10 flex-col">
        //             <div className="logo">
        //                 <Image width={150} height={150} src={'/logo.svg'} alt="img" className="rounded-full border-[2px] border-[#fff] border-solid"/>
        //             </div>
        //             <div className="title text-white text-[25px] font-semibold">
        //                 Roadside Assistance
        //             </div>
        //         </div>
        //         <div className="auth-content">
        //             <Login />

        //         </div>
        //     </main>
        // </div>
    );
};

export default dynamic(() => Promise.resolve(SignIn), { ssr: false })


