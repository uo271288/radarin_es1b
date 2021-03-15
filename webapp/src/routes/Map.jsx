import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { LocationsContext } from '../context/LocationsContext';
import { addLocation, getFriendsLocations } from '../api/api';
import { latLng } from 'leaflet';

const Map = (props) => {
    const { locations, setLocations } = useContext(LocationsContext);
    const { position, setPosition } = useContext(LocationsContext);

    function MyMapEvent() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
                console.log("Posición del user:"+ position);
                const response = addLocation("user", position);
                console.log(response)
            },
        })

        if(position){
            return (
                <Marker position={position}>
                    <Popup>
                        Localizacion del usuario <br /> Easily customizable.
                </Popup>
                </Marker>
            )
        }else{
            return null;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFriendsLocations();
                console.log(response);
                setLocations(response)
            } catch (e) { }
        };

        fetchData();
    }, []);

    return (
        <div style={{ marginBottom: 10, position: 'relative' }}>
            <h1>Localizacines de los amigos</h1>

            <div>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                    <MyMapEvent />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {locations.locs && locations.locs.forEach(loc => {
                        console.log(loc);
                        <Marker position={[loc.altitud, loc.latitud]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                        </Marker>
                    })}

                </MapContainer>
            </div>
        </div>
    )
}

export default Map

