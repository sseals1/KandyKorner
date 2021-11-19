import React, { useEffect, useState } from "react";


export const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerData) => {
                    setCustomers(customerData)
                }

                )
        },
        []
    )
    return (
        <>
        <h4>Customers</h4>
            {
                customers.map(
                    (customerObj) => {
                        return <div key={`customer--${customerObj.id}`}>
                            <div>
                            <div>Id: {customerObj.id}</div>
                            Name: {customerObj.name}
                            </div>

                        </div>
                    }
                )
            }
        </>
    )

}