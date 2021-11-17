import React from "react"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./Products/ProductList"



export const KandyKorner = () => {


    return (
        <>
            <h1>Kandy Korner</h1>
            <h4>Locations</h4>
            <LocationList />
            <h4>Customers</h4>
            <ProductList />
        </>
    )
}
