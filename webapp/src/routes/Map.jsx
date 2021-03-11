import React, {useEffect, useContext} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationsContext } from '../context/LocationsContext';
import {getFriendsLocations} from '../api/api';

const Map = (props) => {
    const {locations, setLocations} = useContext(LocationsContext);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await getFriendsLocations();
                console.log(response);
                setLocations(response)
            } catch (e) {}
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Localizacines de los amigos</h1>

            <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {locations.locs && locations.locs.forEach(loc => {
                    console.log(loc);
                     return (   
                    <Marker position={[loc.altitud, loc.latitud]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                    );
                })}
                
            </MapContainer>
            </div>
        </div>
    )
}

export default Map

/*
                {locations && locations.map(location => {
                     return (   
                    <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                    );
                })}*/