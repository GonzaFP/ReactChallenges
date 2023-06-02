/*
  !Receives categories data from sharedLayout and displays them.  
*/

import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { CategoryProductContainer } from './Styles/SideBarStyles'
import './index.css'

function Categories(props){
  const [Toggle, setToggle] = useState(false)
  const handleCategory = ()=>{
    setToggle(!Toggle)
  }
  let categorydata = 
                props.categories.errorMessage? 
                `Error: ${props.categories.errorMessage}` 
                : props.categories.data.map(category=>{
                return <li key={category.id}>
                          <Link to={`category/${category.id}`}>{category.title}</Link>
                        </li>
                })
  return( 
    <CategoryProductContainer display={Toggle && 'block'}>
      <h4  onClick={handleCategory}>Categories</h4>
        <ul>
        {categorydata} 
      </ul>
  </CategoryProductContainer>
  ) 
}
export default Categories