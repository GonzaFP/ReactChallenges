import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
class Products extends React.Component{
  constructor(props){
  super(props)
  this.state={
    imageSrc:''
  }
  }

  loadImage = (imageName)=> {
  import (`../assets/${imageName}`)
        .then(image=>{
          this.setState({
          imageSrc:image.default
          })
        })
}

  render(){
  const {id, title,image,specs:{dimensions},features,price,stock} = this.props.productInfo
  let featuresData = features?.map((item,index)=><li key={index}>{item}</li>)
    this.loadImage(image)
    const imageData = this.state.imageSrc
      
  return(
    <>
    <div className='productArea'>
      <Link to={`/products/${id}`}>{title}</Link>
      <div className='mainArea'>
      <img src={imageData} alt='' className='grid'/>

      <div className='grid'>
        <h4>Dimensions</h4>
        <p id='dimension'>{dimensions}</p>
        {features && 
            <>
            <h4>Features</h4>
            <ul id='features'>
            {featuresData}
            </ul>
            </>
          }
        </div>

        <div className='grid'>
        <h3>&pound; {price}</h3>
        <div className='shopBtns'>
        <div className='deliver'>
          <p>{`Stock Level: ${stock}`}</p>
          <p>Free Delivery.</p>
        </div>
        <button><Link to={`/products/${id}`}>View Product</Link></button>
        <button>Add to Basket</button>
        </div>
        </div>

    </div>
    </div>
  </>
  )
}
}
export default Products