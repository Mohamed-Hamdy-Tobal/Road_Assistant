"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormItem from '../../components/ui/Form/FormItem'
import FormContainer from '../../components/ui/Form/FormContainer'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { Field, Form, Formik } from 'formik'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import * as Yup from 'yup'
import { redirect } from 'next/navigation';
import { login } from "../../redux/slices/authSlice";
import { clearMessage } from "../../redux/slices/message";
import { useLocale } from "next-intl";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

// toast.configure();
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('User Name Required'),
  password: Yup.string()
    .required('Password Required')
    .min(5, 'Too Short!'),
})

const Login = () => {

  const localActive = useLocale()
  const router = useRouter();

  const { isLoggedIn, loading } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const initialValues = {
    username: "",
    password: "",
  };


  const [pwInputType, setPwInputType] = useState('password')

  const onPasswordVisibleClick = (e) => {
    e.preventDefault()
    setPwInputType(pwInputType === 'password' ? 'text' : 'password')
  }

  const passwordVisible = (
    <span
      className="cursor-pointer"
      onClick={(e) => onPasswordVisibleClick(e)}
    >
      {pwInputType === 'password' ? (
        <HiOutlineEyeOff />
      ) : (
        <HiOutlineEye />
      )}
    </span>
  )

  const handleLogin = (formValue, setSubmitting, resetForm) => {
    console.log("values from Login : ", formValue);

    const { username, password } = formValue;

    dispatch(login({ username, password }))

    console.log("isLoggedIn Login : ", isLoggedIn);

    setSubmitting(false);

    // if (isLoggedIn !== 'empty') {
    //   router.replace(`/${localActive}/dashboard`);
    // }
  };

  React.useEffect(() => {
    if (isLoggedIn !== 'empty') {
      router.replace(`/${localActive}/dashboard`);
    }
}, [isLoggedIn])

  return (
    <div className='form-ui'>
      {/* {loading ? (
                <div>Waiting...</div>
            ) : ''} */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            handleLogin(values, setSubmitting, resetForm);
          }, 1000);
        }}
      >
        {({ values, touched, errors, isSubmitting, resetForm, dirty }) => (
          <Form>
            <FormContainer>
              <FormItem
                label="User Name"
                invalid={errors.username && touched.username}
                errorMessage={errors.username}
              >
                <Field
                  type="text"
                  autoComplete="off"
                  name="username"
                  placeholder="User Name"
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Password"
                invalid={errors.password && touched.password}
                errorMessage={errors.password}
              >
                <Field
                  type={pwInputType}
                  suffix={passwordVisible}
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  component={Input}
                />
              </FormItem>
              <div className="mb-4">
                <Button className='bg-[#2B5F1D] w-full hover:bg-[#2b5f1db6]' variant="solid" loading={loading? true: false} type="submit" disabled={!dirty || isSubmitting} >
                  {isSubmitting ? "Submitting" : "Submit"}
                </Button>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>

      <div className="">
        <span className="text-[14px] text-[#6b7280]">
          Not a member? <Link href={`/${localActive}/signup`} className='text-[#2B5F1D] underline hover:text-[#2b5f1dbb] font-semibold transition-all'>Create an account</Link>
        </span>
      </div>

    </div>
  )
}

export default Login