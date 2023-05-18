import React from 'react'
import ButtonData from './content'
import ScreenComponent from './screencomponent'

/* 
!component that handles state
*/
let prevAnswers = []
const data = [
  ['7','8','9','/'],
  ['4','5','6','*'],
  ['1','2','3', '-'],
  ['C','0','=','+']
]

class MainContent extends React.Component{
  constructor(){
    super()
    this.state={
      currentNumber:'0',
      isInitial:true,
      previousNumber:'',
      operator:'',
      index:0
    }
  }

/* 
  if a number is clicked, update state.
  if C is clicked, set state to 0
  if an operator is clicked, update state
  if = is clicked, join values in state and evalualte, set state to answer and store answer in previous answers.
*/

handleClick = (num)=>{
    if (isNaN(num) && num !== 'C' && num !== '='){
      this.setState(function(prevState){
        return{
          previousNumber: prevState.currentNumber,
          operator:num,
          isInitial:true
        }
      })
  }
    if(num === 'C'){
    this.setState({
      currentNumber: '0',
      isInitial:true
  })
  }
    else if (!isNaN(num)){
      if (this.state.isInitial){
        this.setState(
          {
          currentNumber: num,
          isInitial:false
        }
      )
    }
    else {
      this.setState(function(prevState){
          return{
            currentNumber:prevState.currentNumber + num
        }              
        })
      }
  }
    else if (num=== '='){
      let expression = this.state.previousNumber + this.state.operator + this.state.currentNumber
      let answer = eval(expression)
      prevAnswers.push(answer)
      localStorage.setItem('previousAnswers', JSON.stringify(prevAnswers))
      this.setState({
      currentNumber:answer
    })
  }
  }
    
/* 
 !if enter is pressed, fetch what is in state, evaluate it & set state to answer
 !arrow up or arrow down is pressed, display previous answers.
*/

handleChange = (event)=>{
  const {name,value} = event.target
  this.setState({
  [name]:value
  })
}
  
 handleKey = (event)=>{
    const {name} = event.target
    if (event.keyCode === 13 ){
      this.setState(function(prevState){
        const userexpression = prevState.currentNumber
        let answer = eval(userexpression)
        prevAnswers.push(answer)
        return{
          [name]:answer
        }
      })
    }
    
    if(event.keyCode === 38){
      this.setState(function(prevState){
        if (prevState.index === 0){
          return {
            currentNumber:prevAnswers[prevAnswers.length - 1],
            index: prevAnswers.length - 1
          }
      }else{
        return{
          currentNumber:prevAnswers[prevState.index - 1],
          index:prevState.index - 1
        }
      }
      })
    }
    
    if(event.keyCode === 40){
      this.setState(function(prevState){
        if (prevState.index === prevAnswers.length - 1){
          return {
            currentNumber:prevAnswers[0],
            index: 0
          }
      }else{
        return{
          currentNumber:prevAnswers[prevState.index + 1],
          index:prevState.index + 1
        }
      }
      })
    }
  }
  

  render(){
    let BtnData = data.map(item=>
      <ButtonData 
      data={item} 
      handleClick={this.handleClick}
      />)

    return(
      <>
        <ScreenComponent 
          state={this.state} 
          handleChange={this.handleChange} 
          handleKey={this.handleKey}
          />

        {BtnData}

      </>
    )
  }
}

   

export default MainContent