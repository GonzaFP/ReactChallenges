import React from "react";
import { FaShoppingCart,FaHome} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
      <label >
        Search <input type="text"  name="query"/>
      </label>
      </SearchProduct>

    <StoreName>Our Store</StoreName>
    <FaShoppingCart id="cart" onClick={()=>navigate('/basket')}/>
  </StyledHeader>
  )
}
export default Header