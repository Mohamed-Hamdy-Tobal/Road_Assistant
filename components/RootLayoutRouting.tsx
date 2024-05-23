"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import Loading from '../components/Loading'
import { useLocale } from "next-intl";

const RootLayoutRouting = ({ children }: { children: React.ReactNode }) => {
    const { loading } = useSelector((state: any) => state.auth);
    const pathname = usePathname()
    const localActive = useLocale()

    // Check if the route is http://localhost:3000/en/dashboard
    const isDashboardRoute = pathname === `/${localActive}/dashboard`;
    const isLogin = pathname === `/${localActive}/login`;
    const isSignUp = pathname === `/${localActive}/signup`;

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
