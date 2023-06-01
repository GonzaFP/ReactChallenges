import React, {useContext, useEffect} from 'react'
import CartContext from '../Contexts/cartContext'
import {BasketAndCheckout, StyledButton,PricingInfo,ProductDetails,ProductDetailContainer,QuantityArea,ChangeQuantity,Total} from './Styles/BasketStyles'
import { Link,useNavigate } from 'react-router-dom'
import {FaTrash,FaPlusCircle,FaMinusCircle} from 'react-icons/fa'
import DispatchContext from "../Contexts/dispatchContext";


function Basket(){
  const navigate = useNavigate()
  const state = useContext(CartContext)
  const {cartItems} = state
  const dispatch = useContext(DispatchContext)
  const TotalCost = cartItems.reduce((total,nextAmount)=>{
      return (total + nextAmount.price * nextAmount.qty)
    },0)

    const handleCheckOut = ()=>{
      cartItems.length > 0 && navigate('/checkout')
    }

    useEffect(()=>{
      dispatch({type:'getStoredItems'})
    },[dispatch])
  return(
  <div>
    <BasketAndCheckout>
      <h3>Shopping Basket</h3>
      <StyledButton onClick={handleCheckOut}>Checkout</StyledButton>
    </BasketAndCheckout>
  
    <PricingInfo>
      <h4>Item</h4>
      <h4>Quantity</h4>
      <h4>Price</h4>
    </PricingInfo>

    <ProductDetailContainer>
    {cartItems.length !== 0?  cartItems.map(item=>{
    const {id,title,price,qty} = item
    const TotalPrice = qty * price
    return(
      <ProductDetails key={id}>
        <p><Link to={`/products/${id}`}>{title}</Link></p>
      <QuantityArea>
        <p>{qty}</p>
      <ChangeQuantity>

        <FaPlusCircle onClick={()=> {
          dispatch({type:'AddSubQty', value:{operator:'+', productId:id}})
        }}/>

        <FaMinusCircle onClick={()=>{
          dispatch({type:'AddSubQty', value:{operator:'-', productId:id}})
        }}/>

      </ChangeQuantity>
        <FaTrash onClick={()=>{
          dispatch({type:'DeleteItem', value:id})
        }}/>
    </QuantityArea>
      <p>&pound;{TotalPrice}</p>
    </ProductDetails>
    
    )
    }) :<h4>No products in the cart.</h4>}
  </ProductDetailContainer>
  <Total>
    <StyledButton onClick={()=>{
      dispatch({type:'ClearCart'})
      return <h5>Empty cart.</h5>
    }}>Clear</StyledButton>
    <h3>Total: &pound;{TotalCost}</h3>
  </Total>
  </div>
  )
}
export default Basket

