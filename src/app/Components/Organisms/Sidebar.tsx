"use-client"
import { ChevronDown, Plus } from "react-feather";
import ServerIcon from "./ServerIcon";
import Channel from "./Channel";
// import { db } from "@/app/firebase/config";
// import { addDoc, collection } from "firebase/Firestore";

/* eslint-disable @next/next/no-img-element */
// import { auth } from '@/app/firebase/config';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { redirect } from 'next/navigation';

export default function Sidebar() {
    // const [user] = useAuthState(auth);
    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");

        // if (channelName) {
        //     addDoc(collection(db, "channels"), {
        //         channelName: channelName,
        //     })
        // }
    }
    return (
        <>
            {/* if(!user) {
                redirect('/login')
            } */}
            <div className="flex h-screen">
                <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
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
                <div className="bg-discord_channelsBg flex flex-col min-w-max">
                    <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-[#424242] p-4 hover:bg-[#34373c] cursor-pointer">Rebase Academy Server...<ChevronDown className="h-5 ml-2" /></h2>
                    <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
                        <div className="flex items-center p-2 mb-2">
                            <ChevronDown className="h-3 mr--2" />
                            <h4 className="font-semibold">Channels</h4>
                            <Plus className="h-6 ml-auto cursor-pointer hover:text-white" />
                        </div>
                        <div className="flex flex-col space-y-2 px-2 mb-4">
                            <Channel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};