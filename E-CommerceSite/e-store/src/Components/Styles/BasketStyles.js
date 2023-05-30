import styled from "styled-components";

export const BasketAndCheckout = styled.div`
 display:grid;
 grid-template-columns:1fr 0.6fr;
 column-gap: 950px;
 margin:20px 0 0 20px;
`

export const StyledButton = styled.button`
 border:2px solid black;
 padding:8px 15px;
 border-radius:5px;
`
export const PricingInfo = styled.div`
 display:grid;
 grid-template-columns:1fr 0.5fr 0.5fr;
 margin:10px 0 0 20px
`
export const ProductDetails = styled.div`
 display:grid;
 grid-template-columns:1fr 0.5fr 0.5fr;
 margin:10px 0 0 20px
`
export const ProductDetailContainer = styled.div`
 border-top:1px solid black;
 border-bottom:1px solid black;
 h4{
  margin:10px;
 }
`
export const QuantityArea = styled.div`
 display:flex;
 margin-right:10px;
`
export const ChangeQuantity = styled.div`
 margin-right:20px;
 margin-left:20px;
`
export const Total = styled.div`
 display:grid;
 grid-template-columns:0.6fr 1fr;
 column-gap: 950px;
 margin:20px 0 0 20px;
`