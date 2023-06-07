import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '@/app/assets/images/logo.svg';

import { NextPage } from 'next'

interface Props {

}

const Navbar: NextPage<Props> = () => {
    return (
        <div>
            <header className="flex items-center justify-between py-4 px-6">
                <Link href="/"> <Image
                    width={128}
                    height={48}
                    className="w-32 h-12 object-contain"
                    src={Logo}
                    alt=""
                /></Link>
            </header>
        </div>
    )
}

export default Navbar;











// function Navbar(nav: any) {
//     <header className="flex items-center justify-between py-4 px-6">
//         <Link href="/"> <Image
//             src="https://rb.gy/it5msp"
//             className="w-32 h-12 object-contain"
//             alt=""
//         /></Link>
//     </header>
// }

// export default Navbar;