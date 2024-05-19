"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import Loading from '../components/Loading'

const RootLayoutRouting = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn, loading } = useSelector((state: any) => state.auth);
    const pathname = usePathname()

    // Check if the route is http://localhost:3000/en/dashboard
    const isDashboardRoute = pathname === '/en/dashboard' && '/ar/dashboard';
    const isLogin = pathname === '/en/login' && '/ar/login';
    const isSignUp = pathname === '/en/signup' && '/ar/signup';

    return (
        <>
            {loading && <Loading spinnerClass='my-spin ' loading={loading} type={'default'}/>}
            {isDashboardRoute || isLogin || isSignUp ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
}

export default RootLayoutRouting;
