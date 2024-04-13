import Landing from '@/components/Home/Landing'
import HomeAboutUS from '@/components/Home/HomeAboutUS'
import React from 'react'
import Boxes from '@/components/Home/Boxes'
import HomeChooseUs from '@/components/Home/HomeChooseUs'
import WorkWith from '@/components/Home/WorkWith'


// Main Page
const Home = async() => {
    return (
        <>
            <Landing/>
            <Boxes/>
            <HomeAboutUS/>
            <HomeChooseUs/>
            <WorkWith/>
        </>
    )
}

export default Home