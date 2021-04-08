import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import { addLocation, getFriendsLocations, getFriends } from '../../api/api';
import FriendsLocationMarkers from './FriendsLocationMarkers';
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
        Geocode.fromLatLng(latlng.lat, latlng.lng).then(
            (response) => {
              console.log(response)
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
              const apicall = addLocation(
                  props.webId, [latlng.lat, latlng.lng],
                  state, country);
              console.log(apicall)
              const friends = getFriends(props.webId);
              console.log(friends)
            },
            (error) => {
              console.log("No se ha podido guardar la localización")
              console.error(error);
            }
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getFriendsLocations();
                console.log(resp);
                setLocations(resp)
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

                    <FriendsLocationMarkers webId={props.webId}/>
                </MapContainer>
            </div>
        </div>
    )
}

export default Map

