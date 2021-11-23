import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Locations.css"

export const LocationList = () => {
    const [locations, updateLocations] = useState([])
    const history = useHistory()

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
                        return <div className="location_style " key={`location--${locationObj.id}`}>

                            <div><b>{locationObj.city}</b>----</div>
                            <div>Address: {locationObj.address}</div>
                            <div className="button">
                                <button onClick={() => history.push(`/productLocations/${locationObj.id}`)}><b>Choose a location</b></button>
                            </div>

                        </div>
                    }
                )
            }
        </>
    )

}