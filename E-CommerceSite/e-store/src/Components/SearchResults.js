import React, {useState,useEffect}from 'react'
import { useSearchParams } from 'react-router-dom'
import Products from './products'
import { fetcher } from '../fetcher'

function SearchResults(){
 const [searchParams] = useSearchParams()
 const [searchProducts,setSearchProducts] = useState({errorMessage:'', data:[]})
 const query = searchParams.get('s')
 useEffect(()=>{
    const fetchProduct = async ()=>{
    const ProductData = await fetcher(`products?q=${query}`)
    setSearchProducts(ProductData)
  }
  fetchProduct()
},[query])

let productdata  = 
              searchProducts.errorMessage? 
              `Error: ${searchProducts.errorMessage}` 
              :searchProducts.data.length > 0? 
              searchProducts.data.map(product=>{
              return <Products key={product.id} 
              productInfo={product}/>
              }):<p>No results found.</p>

 return(
  <>
   <h3>Search Results</h3>
   {productdata}
  </>
 )
}

export default SearchResults