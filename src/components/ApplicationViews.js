import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./Products/ProductList"
import { Customers } from "./CustomersList"
import { HiringEmployeeForm } from "./EmployeeHiringForm"
import { KandyKorner } from "./KandyKorner"
import { Purchase } from "./Purchases"
import { ProductLocation } from "./Products/ProductLocation"
import { EmployeeList } from "./EmployeeList"
// import { PurchasedProduct } from "./PurchasedProduct"

export const ApplicationViews = () => { 
    //export function that holds the routes for the components of the DOM
    return (
        <>
            <Route exact path="/">
                <LocationList />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>
            
            <Route exact path="/employee/form">
                <HiringEmployeeForm />
            </Route>

            <Route path="/customers">
                <Customers />
            </Route>

            <Route path="/register">
                <KandyKorner />
            </Route>

            <Route exact path="/productLocations/:locationId(\d+)">
                <ProductLocation />
            </Route>

            <Route exact path="/purchases">
                <Purchase />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            

            

           

            
            
            
            
        </>
    )
}