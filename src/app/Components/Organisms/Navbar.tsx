import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '@/app/assets/images/logo.svg';
import { NextPage } from 'next'
import { Menu } from 'react-feather';
interface Props {

}

const Navbar: NextPage<Props> = () => {
    return (
        <div>
            <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
                <Link href="/"> <Image
                    width={128}
                    height={48}
                    className="w-32 h-12 object-contain"
                    src={Logo}
                    alt=""
                /></Link>
                <div className="hidden lg:flex space-x-6">
                    <Link className='link' href="">Download</Link>
                    <Link className='link' href="">Nitro</Link>
                    <Link className='link' href="">Discover</Link>
                    <Link className='link' href="">Safety</Link>
                    <Link className='link' href="">Support</Link>
                    <Link className='link' href="">Blog</Link>
                    <Link className='link' href="">Careers</Link>
                </div>
                <div className='flex space-x-4'>
                    <Link href="/Pages/login">
                        <button className='bg-white p-2 rounded-full text-xs md:text-sm
                    px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'>
                            Login
                        </button></Link>
                    <Menu className=" h-9 text-white cursor-pointer lg:hidden" />
                </div>
            </header>
        </div>
    )
}

export default Navbar;
