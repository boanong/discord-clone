/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'

import { Download } from 'react-feather';

interface Props {

}

const Hero: NextPage<Props> = () => {
    return (
        <div>
            <div className="bg- w-full relative"
            >
                <img
                    alt=""
                    src='https://wallpapercave.com/uwp/uwp3789584.png'
                    className='w-full h-[36rem] absolute'
                />
                <div className="inset-0 flex items-center justify-center p-16 py-6 h-screen md:h-[85vh] md:flex absolute">
                    <div className=" justify-items-center flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center absolute ">
                        <h1 className=" text-center text-5xl text-white font-black font-serif">IMAGINE A PLACE...</h1>
                        <h2 className=" text-center items-stretch text-white text-lg font-light  tracking-wide lg:max-w-2xl w-full">
                            ...where you can belong to a school club, a gaming group,
                            or a worldwide art community. Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.
                        </h2>
                        <div className=" p-9 flex flex-col sm:flex-row md:flex-col lg:flex-row lg:items-csnter md:items-start sm:items-center gap-6 right-96">
                            <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
                                <Download className="w-6 mr-2" />
                                Download for Mac
                            </button>
                            <button className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
                                Open Discord in your browser
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero