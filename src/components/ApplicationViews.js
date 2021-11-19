import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./Products/ProductList"
import { Customers } from "./CustomersList"
import { HiringEmployeeForm } from "./EmployeeHiringForm"

export const ApplicationViews = () => { 
    //export function that holds the routes for the components of the DOM
    return (
        <>
            <Route path="/location">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>
            
            <Route path="/">
                <HiringEmployeeForm />
            </Route>

            <Route path="/customers">
                <Customers />
            </Route>
            
            
            
        </>
    )
}