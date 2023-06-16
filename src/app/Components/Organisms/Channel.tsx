import { NextPage } from 'next'
import { Hash } from "react-feather";
interface Props {
}

const Channel: NextPage<Props> = () => {
    return (
        <div className="mb-100">
            <div className="flex items-center space-x-1">
                <Hash className="h-6 text-[#72767d]" />
                <h4 className="text-white font-semibold">Rebase</h4>
            </div>
        </div>
    )
}

export default Channel
