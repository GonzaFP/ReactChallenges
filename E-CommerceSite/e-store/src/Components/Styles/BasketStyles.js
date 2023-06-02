import styled from "styled-components";

export const BasketAndCheckout = styled.div`
  display:grid;
  grid-template-columns:1fr 100px;
  margin:25px 10px 30px 20px;
  column-gap: 5px;
`

export const StyledButton = styled.button`
  border:2px solid black;
  padding:8px 15px;
  border-radius:5px;
`
export const PricingInfo = styled.div`
  @media screen and (min-width:850px){
  grid-template-columns:0.5fr 0.25fr 90px;
  gap:20px;
}
  display:grid;
  grid-template-columns:1fr 0.5fr 0.5fr;
  margin:10px 0 0 20px;
`
export const ProductDetails = styled.div`
@media screen and (min-width:850px){
  grid-template-columns:0.5fr 0.25fr 90px;
  gap:20px;
}
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
@media screen and (min-width:850px){
  margin-right:20px;
  margin-left:20px;
}
  margin-right:5px;
  margin-left:5px;
`
export const Total = styled.div`
  display:grid;
  grid-template-columns:0.5fr 1fr;
  column-gap: 200px;
  margin:20px 0 20px 20px;
  
  @media screen and (min-width:700px){
    grid-template-columns:0.25fr 0.55fr;
    column-gap: 400px;
  }
  @media screen and (min-width:1025px){
    grid-template-columns:80px 1fr;
    column-gap: 750px;
  }
`