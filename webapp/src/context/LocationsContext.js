import React, {useState, createContext} from "react";

export const LocationsContext = createContext();

export const LocationsContextProvider = (props) => {
    const [locations, setLocations] = useState([]);
    const [position, setPosition] = useState();
    

    return (
        <LocationsContext.Provider value={{locations, setLocations, position, setPosition}}>
            {props.children}
        </LocationsContext.Provider>
    )
}