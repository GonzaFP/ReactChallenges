import React from 'react'

function GameCircle(props){
  return(
    <div>
      <div className={`circle ${props.className}`} onClick={()=>
    {
      props.handleClick(props.id)
      props.handleWinner()
      props.handleDraw()
    }
    }></div>
    </div>
  )
}


export default GameCircle