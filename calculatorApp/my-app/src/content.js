import React from 'react'

/* 
!component that renders the calculator buttons
*/

function ButtonData(props){
const [num1,num2,num3,num4] = props.data
  return(
    <div className='buttons'>
      <p className='btn' onClick={()=>props.handleClick(num1)}> {num1}</p>
      <p className='btn' onClick={()=>props.handleClick(num2)}> {num2}</p>
      <p className='btn' onClick={()=>props.handleClick(num3)}> {num3}</p>
      <p className='btn lastBtn'onClick={()=>props.handleClick(num4)}> {num4}</p>
    </div>
  )
}

export default ButtonData