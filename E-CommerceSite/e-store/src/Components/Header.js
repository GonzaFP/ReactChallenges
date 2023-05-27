import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './index.css'
import {
  StyledHeader,
  SearchProduct,
  StoreName 
} from './Styles/HeaderStyles'

class Header extends Component{
  constructor(){
  super()
  this.state={
    query:''
  }
  }
  render(){
    return(
  <StyledHeader>
    <FontAwesomeIcon icon={faHouse} id="house"/>

    <SearchProduct>
      <label >
        Search <input type="text"  name="query"/>
      </label>
      </SearchProduct>

    <StoreName>Our Store</StoreName>
    <FontAwesomeIcon id="cart" icon={faShoppingCart}/>
  </StyledHeader>
  )
  }
}

export default Header