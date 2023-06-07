import React from 'react';
import Navbar from '@/app/Components/Organisms/Navbar'
import Hero from '@/app/Components/Organisms/Hero'
import { NextPage } from 'next'

interface Props {

}

const Landing: NextPage<Props> = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Landing;
