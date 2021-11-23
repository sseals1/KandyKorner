import React, { useEffect, useState } from "react";
import { PurchasedProduct } from "./PurchasedProduct"
import "./Purchases.css"


export const Purchase = () => {
    const [purchases, updatePurchases] = useState([])
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=productLocation")
            .then(res => res.json())
            .then((purchaseData) => {
                
                updatePurchases(purchaseData)
            }

            )
        },
        []
    )



    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then((productData) => {
                
                updateProducts(productData)
            }

            )
        },
        []
    )


    

    return (
        <>
            {
                purchases.map(
                    (purchasesObj) => {
                        const purchasedProduct = products.find(product => 
                           purchasesObj.productLocation.productId === product.id
                        
                        )
                        return (< div className="Purchased_Product" key={`purchases--${purchasesObj.id}`}>
                            <div>{purchasedProduct?.name}</div>
                            <div>{purchasedProduct?.price}</div> 
                            
                            </div>
    )
                    }
                )
            }
        </>
    )

}