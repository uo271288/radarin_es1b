import React from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import StartPage from '../routes/StartPage';


const NavBar = () => {
    const webId = useWebId()
    return (webId) ? <BottomNav webId={webId} /> : <StartPage />;
}

export default NavBar
