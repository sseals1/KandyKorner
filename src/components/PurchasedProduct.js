import React, { useEffect, useState } from "react";




export const PurchasedProduct = ({purchase}) => {
    const [purchasedProduct, updatePurchasedProduct] = useState({})
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/products/${purchase.productLocation?.productId}`)
            .then(res => res.json())
            .then((purchaseData) => {
                
                updatePurchasedProduct(purchaseData)
            }

            )
        },
        [purchase]
    )




    return (<div key={`purchases--${purchase.id}`}>
                            <div>{purchasedProduct?.name}</div>
                            <div>{purchasedProduct?.price}</div> 
                            
                            </div>
    )
}