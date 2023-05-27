import React from 'react'
import { Link } from 'react-router-dom'

function Categories(props){
  let categorydata = 
                props.categories.errorMessage? 
                `Error: ${props.categories.errorMessage}` 
                : props.categories.data.map(category=>{
                return <li key={category.id}>
                          <Link to={`category/${category.id}`}>{category.title}</Link>
                        </li>
                })
  return( 
    <>
      <nav>
        <ul>
        {categorydata} 
      </ul>
      </nav>
  </>
  ) 
}
export default Categories