/*
  !When a category is clicked, an API call is made to the server
  !to retrieve products which belong to that category.
  !products data is passed to the Products component.
*/

import { useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { fetcher } from "../fetcher";
import Products from "./products";


function CategoryProducts(){
  const [categoryProducts,setCategoryProducts] = useState({errorMessage:'', data:[]})
  const {categoryId} = useParams()

useEffect(()=>{
    const fetchProduct = async ()=>{
    const ProductData = await fetcher(`products?catId=${categoryId}`)
    setCategoryProducts(ProductData)
  }
  fetchProduct()
},[categoryId])

let productdata  = 
              categoryProducts.errorMessage? 
              `Error: ${categoryProducts.errorMessage}` 
              : categoryProducts.data.map(product=>{
              return <Products key={product.id} 
              productInfo={product}/>
              })

return(
  <>
  {productdata}
  </>
)
}

export default CategoryProducts