import { auth } from '@/app/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>

        </div>
    );
};