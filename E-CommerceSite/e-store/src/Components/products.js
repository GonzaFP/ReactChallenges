import React from 'react'
import {Link} from 'react-router-dom'

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

class Products extends React.Component{
  constructor(props){
  super(props)
  this.state={
    imageSrc:''
  }
  }

  render(){
  const {id, title,image,specs:{dimensions},features,price,stock} = this.props.productInfo
  let featuresData = features?.map((item,index)=><li key={index}>{item}</li>)
  return(
    <>
    <ProductContainer>

      <ProductTitle>
        <h3><Link to={`/products/${id}`}>{title}</Link></h3>
      </ProductTitle>
      
      <ProductContent>
        <ProductImage src={`..//assets/${image}`} alt=''/>
        <ProductInfo>
          <h4>Dimensions</h4>
          <p id='dimension'>{dimensions}</p>
            {features && 
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

            <button><Link to={`/products/${id}`}>View Product</Link></button>
            <button>Add to Basket</button>
          </ShoppingButtons>
        </ProductInfo>

      </ProductContent>
    </ProductContainer>
  </>
  )
}
}
export default Products