import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"


export const ProductLocation = () => {
    const [productLocations, updateProductLocations] = useState([])
    const history = useHistory()

    const { locationId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/productLocations?_expand=location&_expand=product&locationId=${locationId}`)
             
                .then(res => res.json())
                .then((productLocationData) => {
                    updateProductLocations(productLocationData)
                }

                )
        },
        []
    )

    const postPurchases = (newPostObj) =>  {

        const fetchOption = { //This is the POST request Object that needs to be passed in as a second argument to the fetch call
            method: "POST", //Get requests are the only fetch requests that do not require a second argument.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPostObj)
        }
    
        return fetch("http://localhost:8088/purchases", fetchOption) //generating a new employee object in the employees resource of the API
            .then(() => {
                history.push("/purchases") //the history method is used to rerender the tickets to the DOM
                //creating the change in views using the history mechanism.
            })
    
    }
    
    
    return (
        <>
            
            

            {
                productLocations.map(
                    (productLocationObj) => {
                        return <div className="purchase_List" key={`location--${productLocationObj.id}`}>
                            <div>Name: {productLocationObj.product.name}</div>
                            <div>Candy Count: {productLocationObj.candyCount}</div>
                            <div>Price: {productLocationObj.product.price}</div>
                            <div>City: {productLocationObj.location.city}</div>

                            <button onClick={() => {postPurchases({
                                "customerId": parseInt(localStorage.getItem("kandy_customer")),
                                "productLocationId": productLocationObj.id,
                                "candySoldAmount": 1


                            })}}>Purchase</button>

                        </div>
                    }
                )
            }
        </>
    )
        }
