import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../context/LocationsContext';
import { addLocation, getFriendsLocations } from '../api/api';
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Map = (props) => {
    const { locations, setLocations } = useContext(LocationsContext);
    const { position, setPosition } = useContext(LocationsContext);

    function MyMapEvent() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                saveLocation(e.latlng)
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
                console.log("Posición del user:"+ position);
                const response = addLocation(props.webId, [e.latlng.lat, e.latlng.lng]);
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

    function saveLocation(latlng) {
        
        console.log(latlng)
        Geocode.fromLatLng(latlng.lat, latlng.lng).then(
            (response) => {
              console.log(response)
              const address = response.results[0].formatted_address;
              let state, country;
              for (let i = 0; i < response.results[0].address_components.length; i++) {
                for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                  switch (response.results[0].address_components[i].types[j]) {
                    case "administrative_area_level_1":
                      state = response.results[0].address_components[i].long_name;
                      break;
                    case "country":
                      country = response.results[0].address_components[i].long_name;
                      break;
                  }
                }
              }
              console.log(state, country);
              console.log(address);
            },
            (error) => {
              console.error(error);
            }
        );
    }

    async function getFriends(friends){ 
        const friendsValue=  await friends;
        return friendsValue;
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

