import React from 'react'
import Products from './products'
import './index.css'

function SideBar(props){
  let categorydata = props.categories.errorMessage? `Error: ${props.categories.errorMessage}` : props.categories.data.map(category=>{
      return <p key={category.id} onClick={()=>props.onClick(category.id)}>{category.title}</p>
    })

    let productdata  = props.products.errorMessage? `Error: ${props.products.errorMessage}` : props.products.data.map(product=>{
      return <Products key={product.id} productInfo={product}/>
      // <p >{product.title}</p>
    })

  return(
  <section id='sidebar'>
    <nav>
    {categorydata}
    </nav>
    <div>
    {productdata}
    </div>
  </section>
  )
}

export default SideBar