import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { useLDflexValue } from '@solid/react';

const FriendsLocationMarkers = (webId) => {

    let localizaciones = getFriendsLocations(webId);
    // { useLDflexValue("[" + loc.user + "].firstName") }

    localizaciones.forEach((loc) => {
        console.log(loc);
    });

    return (
        localizaciones.forEach((loc) => {
            <Marker position={[loc.location[0], loc.location[1]]}>
            <Popup>

            </Popup>
        </Marker>
        })
    );
}

export default FriendsLocationMarkers
