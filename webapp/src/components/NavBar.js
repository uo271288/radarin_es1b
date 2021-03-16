import React from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import StartPage from '../routes/StartPage';


export default () => {
    //useWebId() te devuelve el url del perfil logeado con una String , que cambia automaticamente cuando el usuario se deslogea o cambia de perfil 
    const webId = useWebId()
    return (webId) ? <BottomNav webId={webId} /> : <StartPage />;
}