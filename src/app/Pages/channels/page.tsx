import Sidebar from '@/app/Components/Organisms/Sidebar'
import { NextPage } from 'next'

interface Props {

}

const Home: NextPage<Props> = () => {
    return (
        <div>
            <Sidebar />
        </div>
    )
}

export default Home
