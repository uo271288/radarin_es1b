import React from "react";

import {useLDflex} from "@solid/react";
import FriendContainer from './Container'
import useProfile from "../../profile/useProfile";

export default ({webId}) => {
    const profile = useProfile(webId) //accede a las consultas para extraer los datos y se las pasa al contenedor
    return <FriendContainer
        {...profile}
    />;
}