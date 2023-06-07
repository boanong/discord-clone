import React from 'react';
import Navbar from '@/app/Components/Organisms/Navbar'
import { NextPage } from 'next'

interface Props {

}

const Landing: NextPage<Props> = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Landing;
