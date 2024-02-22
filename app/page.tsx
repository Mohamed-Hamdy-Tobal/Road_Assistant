'use client'
import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

export default function RootPage() {
    useEffect(() => {
        // Redirect to /en after component mount
        redirect('/en');
    }, []);

    // This component doesn't need to render anything as it redirects immediately
    return null;
}
