import { Link } from "react-router-dom";
import React from "react";
import { StyledFooter } from "./Styles/FooterStyles";

function Footer(){
 return(
  <StyledFooter>
    <Link to='/home'>Home</Link>
    <p>|</p>
    <Link to='/basket'>Basket</Link>
  </StyledFooter>
 )
}

export default Footer