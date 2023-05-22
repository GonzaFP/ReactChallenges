import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './components/gameboard'

function App(){
   return(
      <>
         <GameBoard/>
      </>
   )
}

ReactDOM.render(<App/>, document.getElementById('root'))