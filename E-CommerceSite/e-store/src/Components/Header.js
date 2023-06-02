/*
  !Component contains the header.
*/

import React from "react";
import { FaShoppingCart,FaHome} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import './index.css'
import {
  StyledHeader,
  SearchProduct,
  StoreName 
} from './Styles/HeaderStyles'


function Header(){
  const navigate = useNavigate()
  return(
  <StyledHeader>
    <FaHome id='house' onClick={()=>navigate('/')}/>
    <SearchProduct>
      <Search/>
    </SearchProduct>
    <StoreName>Our Store</StoreName>
    <FaShoppingCart id="cart" onClick={()=>navigate('/basket')}/>
  </StyledHeader>
  )
}
export default Header