import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../context/LocationsContext';
import { addLocation, getFriendsLocations } from '../api/api';

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
                const response = addLocation("user", [e.latlng.lat, e.latlng.lng]);
                console.log(response)
            },
        })

        if(position){
            return (
                <Marker position={position}>
                    <Popup>
                        Ubicación del usuario <br />
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
            <h1>Ubicación del usuario</h1>

            <div>
                <MapContainer center={[43.36, -5.90]} zoom={10} scrollWheelZoom={true}>
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

