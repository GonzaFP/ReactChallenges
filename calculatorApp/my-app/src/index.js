import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainContent from './main'


function App(){
  return(
    <div className='main'>
      <MainContent/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))




















// class App extends Component{
//  constructor(){
//   super()
//   this.state={
//     character:{},
//     Loading:false
//   }
//  }

//  componentDidMount(){
//   this.setState({
//       Loading: true
//   })
//   fetch('https://swapi.dev/api/planets/3/')
//    .then(response => response.json())
//     .then(data=> {
//       this.setState({
//         character:data,
//         Loading:false
//       })
//     })
//  }
//  render(){
//   let data = this.state.Loading? 'Loading.....' : this.state.character.name
//   return(
//    <>
//     <h1>{data}</h1>
//    </>
//   )
//  }
// }

// function App(){
//   return(
//     <>
//       <Header/>
//       <List/>
//       <Body/>
//       </>
//   )
// }
// ReactDOM.render(<App/>, document.getElementById('root'))




// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       firstName: '',
//       lastName:'',
//       Loading:true,
//       gender: '',
//       favColor:'blue'
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event){
//     const {name,value,type,checked} = event.target
//     type == 'checkbox'? this.setState({[name]:checked}):this.setState({[name]:value})
//   }
//   render(){
//     return(
//       <>
//         <input 
//         type='text'
//         name='firstName' 
//         value = {this.state.firstName} 
//         placeholder='First Name' 
//         onChange={this.handleChange}/>

//         <br/>

//         <input type='text' 
//         name='lastName' 
//         value = {this.state.lastName} 
//         placeholder='Last Name' 
//         onChange={this.handleChange}/>

//         <h1>{this.state.firstName} 
//         {this.state.lastName}
//         </h1>
//         <br/>

//         <input 
//           type='checkbox'
//           name='Loading'
//           checked={this.state.Loading}
//           onChange={this.handleChange}
//         />
//         <br/>

//         <input 
//           type='radio'
//           name='gender'
//           value='female'
//           checked={this.state.gender == 'female'}
//           onChange={this.handleChange}
//         />
//         <br/>
//         <input 
//           type='radio'
//           name='gender'
//           value='male'
//           checked={this.state.gender == 'male'}
//           onChange={this.handleChange}
//         />
//         <br/>
//         <h1>You are a {this.state.gender}</h1>

//         {/* Selectors */}
//         <label>Favorite Color</label>
//         <select 
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name='favColor'
//         >
//           <option value='blue'>Blue</option>
//           <option value='purple'>Purple</option>
//           <option value='orange'>Orange</option>
//           <option value='red'>Red</option>
//         </select>
//         <h2>You are a {this.state.favColor}</h2>
//       </>
//     )
//   }
// }

// import Form from './form'

// function App(){
//   return(
//     <Form/>
//   )
// }