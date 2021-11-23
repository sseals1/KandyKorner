import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export const ProductList = () => {
    const [products, updateProducts] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then((productData) => {
                    updateProducts(productData)
                }

                )
        },
        []
    )



    const [purchase, setPurchases] = useState({
        id: 0,
        name: "",
        price: 0

    })

    const savePurchases = (event) => {
        event.preventDefault()
        const newPurchase = {
            id: purchase.id,
            name: purchase.name,
            price: purchase.price

        }


        const fetchPurchases = { //This is the POST request Object that needs to be passed in as a second argument to the fetch call
            method: "POST", //POST requires a second argument. Get requests are the only fetch requests that do not require a second argument.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch("http://localhost:8088/purchases", fetchPurchases) //generating a new purchases object in the purchases resource of the API
            .then(() => {
                history.push("/purchases") //the history method is used to rerender the tickets to the DOM
                //creating the change in views using the history mechanism.
            })

    }



    return (
        <>

            {
                products.map(
                    (productObj) => {
                        return <p key={`products--${productObj.id}`}>
            
                
            
                            <div>Product id: {productObj.id}</div>
                            <div>Product Type: {productObj.productType.type}</div>
                            <div>Product name: {productObj.name}</div>
                            <div>Product price: {productObj.price}</div>

                        </p>
                    }
                )
            }
        </>
    )

}