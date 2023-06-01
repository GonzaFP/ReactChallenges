import React,{useEffect,useState} from "react";
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
  const [searchWord, setSearchWord] = useState('')

  useEffect(()=>{
      const timeId = setTimeout(()=>{
        navigate(`/search?s=${searchWord}`)
      },500)
      return ()=> clearTimeout(timeId)
  },[searchWord])
  return(
  <StyledHeader>
    <FaHome id='house' onClick={()=>navigate('/')}/>

    <SearchProduct>
      <label >
        Search <input type="text"  name="search" onChange={(event)=>setSearchWord(event.target.value)}/>
      </label>
      </SearchProduct>

    <StoreName>Our Store</StoreName>
    <FaShoppingCart id="cart" onClick={()=>navigate('/basket')}/>
  </StyledHeader>
  )
}
export default Header