import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './index.css'

class Header extends Component{
  constructor(){
  super()
  this.state={
    query:''
  }
  }
  render(){
    return(
  <div className="topnav">
    <FontAwesomeIcon icon={faHouse} id="house"/>
    <div id="search">
      <label >
        Search <input type="text"  name="query"/>
      </label>
      </div>
    <h3 id="store">Our Store</h3>
    <FontAwesomeIcon id="cart" icon={faShoppingCart}/>
  </div>
  )
  }
}

export default Header