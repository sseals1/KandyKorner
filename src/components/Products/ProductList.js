import React, { useEffect, useState } from "react";


export const ProductList = () => {
    const [products, updateProducts] = useState([])

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