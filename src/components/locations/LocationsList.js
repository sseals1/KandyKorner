import React, { useEffect, useState } from "react";


export const LocationList = () => {
    const [locations, updateLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationData) => {
                updateLocations(locationData)
            }

            )
        },
        []
    )
    return (
        <>
            {
                locations.map(
                    (locationObj) => {
                        return <p key={`ticket--${locationObj.id}`}>
                            {locationObj.description} 
                            {locationObj.address} 
                            
                            </p>
                    }
                )
            }
        </>
    )

}