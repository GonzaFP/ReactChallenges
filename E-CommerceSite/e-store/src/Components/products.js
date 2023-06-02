/*
  !component receives data from Category products.
  !responsible for displaying products according
  !to category.  
*/

import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DispatchContext from '../Contexts/dispatchContext'
import 
{
  ProductContainer,
  ProductTitle,
  ProductContent,
  ProductImage,
  ProductInfo,
  ShoppingButtons,
  DeliveryInfo
} from './Styles/productStyles'

function Products(props){
  const navigate = useNavigate()
  const dispatch = useContext(DispatchContext)
  const {id, title,image,specs:{dimensions},features,price,stock} = props.productInfo
  let featuresData = features?.map((item,index)=> <li key={index}>{item}</li>)
  return(
    <ProductContainer>
      <ProductTitle>
        <h3><Link to={`/products/${id}`}>{title}</Link></h3>
      </ProductTitle>
      <ProductContent>
        <div>
          <ProductImage src={`..//assets/${image}`} alt=''/>
        </div>

        <ProductInfo>
          <h4>Dimensions</h4>
          <p id='dimension'>{dimensions}</p>
            {
              features && 
              <div>
                <h4>Features</h4>
                <ul id='features'>
                  {featuresData}
                </ul>
              </div>
            }
        </ProductInfo>

        <ProductInfo>
          <h3>&pound; {price}</h3>
          <ShoppingButtons>
            <DeliveryInfo>
              <p>{`Stock Level: ${stock}`}</p>
              <p>Free Delivery.</p>
            </DeliveryInfo>
            <button 
              onClick={()=>navigate(`/products/${id}`)}>
                View product
            </button>
            <button
              onClick={()=>{
              dispatch({type:'AddToBasket', 
              value:{productId:id, 
                payLoad:{id,title,qty:1,price}}})}}>
                Add to Basket
            </button>
          </ShoppingButtons>
        </ProductInfo>
      </ProductContent>
    </ProductContainer>
  )
}
export default Products