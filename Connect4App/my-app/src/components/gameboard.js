import React, {Component} from 'react'
import GameCircle from './gamecircle'
import './index.css'

const Player1=1
const Player2=2
// !number of circles
const data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// !Array contains combinations of indexes that lead to a win.
const Winner = [
  [0,1,2,3],
  [4,5,6,7],
  [8,9,10,11],
  [12,13,14,15],
  [0,4,8,12],
  [1,5,9,13],
  [2,6,10,14],
  [3,7,11,15],
  [0,5,10,15],
  [3,6,9,12]
]
let diff = []


class GameBoard extends Component{
  constructor(){
    super()
    this.state={
      currentPlayer: Player1,
      displayMsg: "Player1's Turn",
      hasWon:false,
      isInitial:true,
      ArrayValues: Array(16).fill(0)
    }
  }
  
/*
!func takes in index of the circle clicked.
TODO: When player1 plays, set 1 as the value at that index. When it is player2 set value to 2.
TODO: if user wins, prevent game from proceeding.
TODO: prevent user from switching btn players.
TODO: control text displayed on the board.
*/

handleClick = (id)=>{
  if(this.state.isInitial){
    this.setState({
      isInitial:false
    })
  }
  if (this.state.hasWon || this.state.ArrayValues[id] !== 0){
    return
  }
  this.state.ArrayValues[id] = this.state.currentPlayer
  this.setState(()=>{
    if (this.state.currentPlayer === Player1){
      return{
        currentPlayer:Player2,
        displayMsg:"Player2's Turn",
        ArrayValues:this.state.ArrayValues
      }
    }else{
      return{
        currentPlayer:Player1,
          displayMsg: "Player1's Turn",
        ArrayValues:this.state.ArrayValues
      }
    }
  })
}


 /*
 !func enables computer to blodck opponent's win.
 TODO: Filter all indexes that are occupied, add them to Filled array.
 TODO: Go thru Filled array, check if any mini-array has length of 3.
 TODO: Compare mini-array with mini-array inside Winner.
 TODO: Check for the index that is causing a difference btn the 2 arrays.
 TODO: Push it to the diff array.
*/

handleMoves=()=>{
    const Filled = []
      Winner.map(item=>{
      Filled.push(item.filter(num =>{
      return this.state.ArrayValues[num] !== 0
      }))
    })
    Filled.map((item,index)=>{
    if (item.length === 3){
      const [c1,c2,c3] = item
      let Array = this.state.ArrayValues
      if (Array[c1] === Array[c2] && Array[c2] === Array[c3]){
          Winner.map((win,i)=>{
        if (index === i){
          diff =  win.filter(number=>{
            if(!item.includes(number)){
              return number
            }
          })
        }        
      })
      }
    }
    })
  }

/*
  !When user click Comp btn, a random circle is selected.
TODO: Call handleMoves func, check if diff isn't empty.
TODO: If it's not, pass in the value as id in handleClick and empty diff array.
TODO: If diff is empty, go thru state array and push all empty circles to validMoves.
TODO: Use validMoves to generate a random index and pass it in handleClick.
*/

  handleComputer = ()=>{
    this.handleMoves()
    let validMoves=[]
    let i;
    if (diff.length === 1){
      i = diff[0]
      this.handleClick(i)
      diff=[]
    }else{
      this.state.ArrayValues.map((item,index)=>{
      if (item === 0){
        validMoves.push(index)
      }
      return
    })
    i = Math.floor(Math.random()*validMoves.length)
    this.handleClick(validMoves[i]) 
    }
    this.handleWinner()
    this.handleDraw()
  }

  /*
!When user clicks newGame btn, initialize state.
*/

handleGame= ()=>{
    this.setState({
      currentPlayer: Player1,
      displayMsg: "Player1's Turn",
      hasWon:false,
      isInitial:true,
      ArrayValues: Array(16).fill(0)
  })
}

/*
  !User wins when four horizontal/vertical/diagonal circles have same colour.
  TODO: Check if any of the arrays inside Winner array contains the same values.
  TODO: If they do, display winner and stop game.
*/

  handleWinner=()=>{
    Winner.map(item=>{
    const [c1,c2,c3,c4] = item
    const Array = this.state.ArrayValues
    if (Array[c1] > 0 && 
        Array[c1] === Array[c2]
          && Array[c2] === Array[c3]
          && Array[c3] === Array[c4]
        ){
          this.setState(()=>{
            let Msg = `Player ${this.state.currentPlayer} has Won!`
            return{
              hasWon:true,
              displayMsg:Msg
            }
          })
    }
  })
}

  /*
  !When no player wins.
  TODO: Check if state array doesnot contain any zeros(empty circles).
  TODO: If so, display Draw message and stop the game.
*/

  handleDraw=()=>{
    if (this.state.ArrayValues.includes(0)){
      return
    }else{
      this.setState({
        displayMsg:'Draw!',
        hasWon:true
      })
    }
  }
  render(){
    let circle = data.map(item=><GameCircle 
      id = {item} key={item} 
      handleClick={this.handleClick} 
      handleWinner={this.handleWinner}
      handleDraw={this.handleDraw} 
      className={`Player${this.state.ArrayValues[item]}`}
      />)
    
    let newGameButton = (this.state.isInitial || this.state.hasWon) 
      &&  <button className='innergame' 
      onClick={this.handleGame}>
        New Game
        </button>
        
    let computerButton = (!this.state.isInitial && !this.state.hasWon) 
      && <button className='computer' 
      onClick={this.handleComputer}>
        Computer
        </button>
    
    return(
      <div className='main'>
        <h4 className='title'>
          {this.state.displayMsg}
        </h4>
      <div className='board'>
          {circle}
      </div>
      <div className='newgame'>
          {newGameButton}
          {computerButton}
      </div>
    </div>
    )
  }
}

export default GameBoard