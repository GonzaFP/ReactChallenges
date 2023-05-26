import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetcher } from '../fetcher'


function ProductDetails(){
 const [productData,setProductData] = useState({errorMessage:'', data:{}})
 const [imageSrc, setImageSrc] = useState(null)
 const {productId} = useParams()

useEffect(()=>{
    const fetchProduct = async ()=>{
    const ProductData = await fetcher(`products/${productId}`)
    setProductData(ProductData)
  }
  fetchProduct()
},[productId])

const loadImage = (imageName)=> {
  import (`../assets/${imageName}`)
        .then(image=>{
          setImageSrc(image.default)
        })
}

   const {title,image,description,specs,features,stock,price} = productData.data
   let featuresData = features?.map((item,index)=><li key={index}>{item}</li>)
   loadImage(image)
 return(
  <div className='productArea'>
      <h3>{title}</h3>
      <div className='mainArea'>
      <img src={imageSrc} alt='' className='grid'/>

      <div className='grid'>
        <h4>Dimensions</h4>
        <p>{specs?.dimensions}</p>
        {features && 
            <>
            <h4>Features</h4>
            <ul>
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
        <button>Add to Basket</button>
        </div>
        </div>
     </div>
     <p>{description}</p>
    </div>
 )
}
  
  
 export default ProductDetails