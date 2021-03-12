import Friend from "./Friend";
import LoadingFriend from "./LoadingFriend";
import React from "react";

//recibe los parametros y si no estan cargando los añade al componente amigo
export default ({webId, fullName, imageSrc, pending}) => (
    pending ?
        <LoadingFriend webId={`${webId}`}/> :
        <Friend
            webId={`${webId}`}
            fullName={`${fullName}`}
            imageSrc={imageSrc ? `${imageSrc}` : undefined}
        />
);