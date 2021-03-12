import React, {useContext, useState}  from 'react'
import { useMapEvent } from 'react-leaflet';
import { LocationsContext } from '../context/LocationsContext';

const UpdatePositionButton = () => {
    
    
    const {position, setPosition} = useContext(LocationsContext);

    const map = useState({})

    return (
        <div>
            
        </div>
    )
}

export default UpdatePositionButton
