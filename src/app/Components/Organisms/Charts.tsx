import { NextPage } from 'next'
import { Hash, Bell, MessageCircle, Users, Search, Inbox, HelpCircle, Plus, Gift, Smile } from "react-feather";
type Props = {
    userData: any
}

const Charts: NextPage<Props> = ({ userData }: Props) => {
    return (
        <div>
            <div className="flex flex-col h-screen">

                <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
                    <div className="flex items-center space-x-1">
                        <Hash className="h-6 text-[#72767d]" />
                        <h4 className="text-white font-semibold">Rebase</h4>
                    </div>
                    <div className="flex space-x-3">
                        <Bell className="icon" />
                        <MessageCircle className="icon" />
                        <Users className="icon" />
                        <div className="flex bg-[#202225] text-xs p-1 rounded-md">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-[#202225] focus:outline-none text-white pl-1 placeholder-[#72767d]"
                            />
                            <Search className="h-4 text-[#72767d] mr-1" />
                        </div>
                        <Inbox className="icon" />
                        <HelpCircle className="icon" />
                    </div>
                </header>
                <main className="flex-grow overflow-y-scroll scrollbar-hide">

                    {/* <MessageCircle /> */}

                    <div className="pb-16" />
                </main>
                <div className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg">
                    <Plus className="icon mr-4" />
                    <form className="flex-grow">
                        <input
                            type="text"
                            placeholder=""
                            className="bg-transparent focus:outline-none text-[#dcddde] w-full placeholder-[#72767d] text-sm"
                        />
                        <button hidden type="submit">
                            Send
                        </button>
                    </form>
                    <Gift className="icon mr-2" />
                    <Smile className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Charts
