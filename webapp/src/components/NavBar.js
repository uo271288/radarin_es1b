import React from 'react';
import {evaluateExpressions, useWebId} from '@solid/react';

import BottomNav from './BottomNav';


export default () => {
    //useWebId() te devuelve el url del perfil logeado con una String , que cambia automaticamente cuando el usuario se deslogea o cambia de perfil 
    const webId = useWebId()
    return <BottomNav webId={webId} />;
}