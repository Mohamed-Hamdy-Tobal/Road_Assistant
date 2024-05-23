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
import { register } from "../../redux/slices/authSlice";
import { clearMessage } from "../../redux/slices/message";
import { useLocale } from "next-intl";
import Link from "next/link";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';


// toast.configure();
const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('User Name Required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('User Name Required'),
  username: Yup.string().required('Please enter your user name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
  password2: Yup.string().oneOf(
    [Yup.ref('password')],
    'Your passwords do not match'
  ),
})

const Register = () => {

  const localActive = useLocale()
  const router = useRouter();

  const { isLoggedIn, loading } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };


  const [pwVisible, setPwVisible] = useState(false);
    const [pwConfirmVisible, setPwConfirmVisible] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'newPassword') {
            setPwVisible(!pwVisible);
        } else if (field === 'confirmNewPassword') {
            setPwConfirmVisible(!pwConfirmVisible);
        }
    };

    const passwordVisible = (field) => (
        <span
            className="cursor-pointer"
            onClick={() => togglePasswordVisibility(field)}
        >
            {field === 'newPassword' ? (
                pwVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />
            ) : (
                pwConfirmVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />
            )}
        </span>
    );

  const handleRegister = (formValue, setSubmitting, resetForm) => {
    console.log("values from register : ", formValue);

    dispatch(register(formValue))

    setSubmitting(false);

    // if (isLoggedIn) {
    //   router.push(`/${localActive}/dashboard`);
    // }
  };

  React.useEffect(() => {
    if (isLoggedIn !== 'empty') {
      router.replace(`/${localActive}/dashboard`);
    }
}, [isLoggedIn])

  return (
    <div className='form-ui'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            handleRegister(values, setSubmitting, resetForm);
          }, 1000);
        }}
      >
        {({ values, touched, errors, isSubmitting, resetForm, dirty }) => (
          <Form>
            <FormContainer>
              <div className="sm:flex justify-between items-center gap-5">
                <FormItem
                  className='sm:w-[48%]'
                  label="First Name"
                  invalid={errors.first_name && touched.first_name}
                  errorMessage={errors.first_name}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="first_name"
                    placeholder="First Name"
                    component={Input}
                  />
                </FormItem>
                <FormItem
                  className='sm:w-[48%]'
                  label="Last Name"
                  invalid={errors.last_name && touched.last_name}
                  errorMessage={errors.last_name}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="last_name"
                    placeholder="Last Name"
                    component={Input}
                  />
                </FormItem>
              </div>
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
                label="Email"
                invalid={errors.email && touched.email}
                errorMessage={errors.email}
              >
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Password"
                invalid={errors.password && touched.password}
                errorMessage={errors.password}
              >
                <Field
                  type={pwVisible ? 'text' : 'password'}
                  suffix={passwordVisible('newPassword')}
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Confirm Password"
                invalid={errors.password2 && touched.password2}
                errorMessage={errors.password2}
              >
                <Field
                  type={pwConfirmVisible ? 'text' : 'password'}
                  suffix={passwordVisible('confirmNewPassword')}
                  autoComplete="off"
                  name="password2"
                  placeholder="Confirm Password"
                  component={Input}
                />
              </FormItem>
              <div className="mb-4">
                <Button className='bg-[#2B5F1D] w-full hover:bg-[#2b5f1db6]' variant="solid" loading={loading? true: false} type="submit" disabled={!dirty || isSubmitting} >
                  {isSubmitting ? "Waiting.." : "Sign Up"}
                </Button>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>

      <div className="">
        <span className="text-[14px] text-[#6b7280]">
          Already have an account? <Link href={`/${localActive}/login`} className='text-[#2B5F1D] underline hover:text-[#2b5f1dbb] font-semibold transition-all'>Sing in</Link>
        </span>
      </div>

    </div>
  )
}

export default Register