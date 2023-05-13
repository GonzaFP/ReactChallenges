import React from 'react'
import ButtonData from './content'


/* 
 !component that handles state
*/

let numbers=[]
let prevAnswers = []
const data = [
 [7,8,9,'/'],
 [4,5,6,'*'],
 [1,2,3, '-'],
 ['C',0,'=','+']
]

class MainContent extends React.Component{
  constructor(){
    super()
    this.state={
      input:0,
      index:0
    }
  }

/* 
 !if a number is clicked, join numbers array & and set state to joined expression
 !if C is clicked, clear numbers array & set state to 0
 !if = is clicked, get items from storage, join it, evalualte it, set state to answer
 !empty numbers array, push answer to numbers array and store answer in previous answers.
*/

handleClick = (num)=>{
 if (num !== 'C' && num !== '='){
  numbers.push(num)
   localStorage.setItem('number', JSON.stringify(numbers)) 
 }
 if(num === 'C'){
  numbers=[]
  this.setState({
   input: 0
  })
 }else if (typeof num == 'number'){
  let displayedNumber = numbers.join('')
   this.setState(
    {
     input:displayedNumber
     }
   )
 }else if (num=== '='){
  let expression = JSON.parse(localStorage.getItem('number'))
  let joinedExpression = expression.join('')
  let answer = eval(joinedExpression)
  numbers = []
  numbers.push(answer)
  prevAnswers.push(answer)
  this.setState({
   input:answer
  })
 }
}

/* 
 !if enter is pressed, fetch what is in state, evaluate it & set state to answer
 !arrow up or arrow down is pressed, display previous answers.
*/

handleChange = (event)=>{
 const {name,value} = event.target
 numbers.push(value)
  this.setState({
  [name]:value
  })
}
  
 handleKey = (event)=>{
  const {name} = event.target
  if (event.keyCode === 13 ){
   this.setState(prevState=>{
   const userexpression = prevState.input
   let answer = eval(userexpression)
   numbers = []
   prevAnswers.push(answer)
   localStorage.setItem('previousAnswers', JSON.stringify(prevAnswers))
   return{
   [name]:answer
   }
  })
 }

 if(event.keyCode === 38){
  this.setState(prevState=>{
  if (prevState.index === 0){
   return {
   input:prevAnswers[prevAnswers.length - 1],
   index: prevAnswers.length - 1
   }
  }else{
   return{
   input:prevAnswers[prevState.index - 1],
   index:prevState.index - 1
   }
 }
 })
}

if(event.keyCode === 40){
 this.setState(prevState=>{
  if (prevState.index === prevAnswers.length - 1){
   return {
    input:prevAnswers[0],
    index: 0
   }
  }else{
   return{
   input:prevAnswers[prevState.index + 1],
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

/* 
!component that renders the screen area
*/

class ScreenComponent extends MainContent{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <>
      <input 
        type='text'
        value={this.props.state.input}
        name='input'
        onChange={this.props.handleChange}
        onKeyUp={this.props.handleKey}
       />
      </>
    )
  }
}      

export default MainContent