import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"

const ProductHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
`

// const ProductPic = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
// `

//this component Product, whill show the product when we fetched it
export const Product = () => {
    const product = useSelector(state => state.products.product)
    
    // if we dont have a product at all, we dont want to show anything, return null
    if (!product) return null

    // if we get a product, we want to show it
    console.log('product', product)

    return (
        <>
            <ProductHeading>
                <img src={product.product && product.product.image_thumb_url} alt= "" />  
                <h1>{product.product && product.product.product_name} </h1>
            </ProductHeading>
           
            <ProductInfo>
                <h4>
                    {product.product && product.product.ingredients_tags}
                </h4>
                <h5>
                    {product.product && product.product.stores}
                </h5>
            </ProductInfo>

           {/* <ProductPic> */}
                {/* first checking that we get the product in the fetch && then show the picture of the product */}
                <img src={product.product && product.product.image_url} alt= "" />
                <img src={product.product && product.product.image_ingredients_url} alt= "" />
                <img src={product.product && product.product.image_nutrition_url} alt= "" />
                
           {/* </ProductPic> */}
        </>
    )
}