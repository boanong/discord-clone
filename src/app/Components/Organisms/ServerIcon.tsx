/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'

interface Props {
    image: any;
}

const ServerIcon: NextPage<Props> = ({ image }) => {
    return (
        <img
            src={image}
            alt=""
            className="h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl"
        />
    )
}

export default ServerIcon
