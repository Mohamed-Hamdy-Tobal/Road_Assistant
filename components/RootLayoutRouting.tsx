"use client"
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import Loading from '../components/Loading'
import { useLocale } from "next-intl";
import ReactGA from 'react-ga4';


const RootLayoutRouting = ({ children }: { children: React.ReactNode }) => {

    ReactGA.initialize('G-4VWDN4H7WE');

    const { loading } = useSelector((state: any) => state.auth);
    const { status } = useSelector((state: any) => state.table);
    console.log("status from RootLayoutRouting : ", status)
    const pathname = usePathname()
    const localActive = useLocale()

    // Check if the route is http://localhost:3000/en/dashboard
    const isDashboardRoute = pathname === `/${localActive}/dashboard`;
    const isLogin = pathname === `/${localActive}/login`;
    const isSignUp = pathname === `/${localActive}/signup`;

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: pathname });
    }, []);

    return (
        <>
            {loading && <Loading spinnerClass='my-spin ' loading={loading} type={'default'} />}
            {status === 'loading' && <Loading spinnerClass='my-spin ' loading={loading} type={'default'} />}
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
