"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormItem from '@/components/ui/Form/FormItem'
import FormContainer from '@/components/ui/Form/FormContainer'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
// import { profile } from "@/redux/slices/authSlice";
import { clearMessage } from "@/redux/slices/message";
import { useLocale } from "next-intl";
import { useRouter } from 'next/navigation';

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
})

const Profile = () => {

    const localActive = useLocale()
    const router = useRouter();

    const { isLoggedIn, loading } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const initialValues = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
    };


    const handleProfileUpdates = (formValue, setSubmitting, resetForm) => {
        console.log("values from Profile : ", formValue);

        const { first_name, last_name, username, email } = formValue;

        // dispatch(profile({ first_name, last_name, username, email }))

        console.log("isLoggedIn Profile : ", isLoggedIn);

        setSubmitting(false);
    };

    // Check Auth
    // React.useEffect(() => {
    //     if (isLoggedIn === 'empty') {
    //         router.push(`/${localActive}/login`);
    //     }
    // }, [isLoggedIn])

    return (
        <div className='form-ui my-[100]'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        handleProfileUpdates(values, setSubmitting, resetForm);
                    }, 1000);
                }}
            >
                {({ values, touched, errors, isSubmitting, resetForm, dirty }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
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
                            <FormItem
                                label="Email"
                                invalid={errors.email && touched.email}
                                errorMessage={errors.email}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email"
                                    component={Input}
                                />
                            </FormItem>
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
                            <div className="mb-4">
                                <Button
                                    className="ltr:mr-2 rtl:ml-2"
                                    type="reset"
                                    disabled={isSubmitting || !dirty}
                                    onClick={() => resetForm()}
                                >
                                    Reset
                                </Button>
                                <Button className='bg-[#2B5F1D] w-full hover:bg-[#2b5f1db6]' variant="solid" loading={loading ? true : false} type="submit" disabled={!dirty || isSubmitting} >
                                    {isSubmitting ? "Waiting..." : "Save"}
                                </Button>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Profile