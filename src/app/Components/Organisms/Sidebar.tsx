"use-client"

import { Plus } from "react-feather";
import ServerIcon from "./ServerIcon";

/* eslint-disable @next/next/no-img-element */
// import { auth } from '@/app/firebase/config';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { redirect } from 'next/navigation';

export default function Sidebar() {
    // const [user] = useAuthState(auth);
    return (
        <>
            {/* if(!user) {
                redirect('/login')
            } */}
            <div className="flex h-screen">
                <div className="flex flex-col space-y-4 bg-[#202225] p-3 min-w-max">
                    <div className="server-default hover:bg-discord_purple">
                        <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
                    </div>
                    <hr className=" border-gray-700 border w-8 mx-auto" />
                    <ServerIcon image="https://rb.gy/qidcpp" />
                    <ServerIcon image="https://rb.gy/j5ocz" />
                    <ServerIcon image="https://rb.gy/lvwax" />
                    <ServerIcon image="https://rb.gy/jz089" />
                    <ServerIcon image="https://rb.gy/eqel9" />
                    <div className="server-default hover:bg-discord_green group">
                        <Plus className="text-discord_green h-15 group-hover:text-white" />
                    </div>
                </div>
            </div>
        </>
    );
};