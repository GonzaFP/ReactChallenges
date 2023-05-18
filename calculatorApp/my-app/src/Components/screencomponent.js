import React,{Component} from 'react'

/* 
!component that renders the screen area
*/

class ScreenComponent extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <>
      <input 
        type='text'
        value={this.props.state.currentNumber}
        name='currentNumber'
        onChange={this.props.handleChange}
        onKeyUp={this.props.handleKey}
      />
      </>
    )
  }
}   

export default ScreenComponent