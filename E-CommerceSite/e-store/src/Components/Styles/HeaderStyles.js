import styled from 'styled-components'

export const StyledHeader = styled.div`
  background-color: darkorange;
  color: white;
  grid-area: header;
  display: flex;
  input{
  outline: none;
  width: 120px;
  }
  @media screen and (min-width:1000px){
    justify-content:space-around;
  }
`
export const SearchProduct = styled.div`
  font-size:15px;
  margin:10px 10px 10px 30px;
  @media screen and (min-width:800px){
    font-size: 20px;
    margin:10px 10px 10px 30px;
  }
`
export const StoreName = styled.h3`
  
  font-size:20px;
  margin:10px 10px 10px 50px;
  justify-self:center;
`
