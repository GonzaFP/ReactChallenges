import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './asabeneh.jpg'
import './index.css'

/*
   !Arrays of data
*/
const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
]
const techs = ['HTML', 'CSS', 'JavaScript']

function changeBodyColor(color){
   document.body.style.backgroundColor = color
}
/*
   ! End Arrays of data
*/

/*
   !Button JSX
*/
class ButtonContent extends React.Component{
   constructor(props){
      super(props)
      console.log(props)
   }
   render(){
      return(
         <div className='content'>
            <img src={asabenehImage} alt=''/>
            <h4>AsabenehYetayeh</h4>
            <button onClick={this.props.greet}>Greet People</button>
            <button onClick={this.props.showTime}>Show Time</button>
            <button onClick={this.props.changeBg}>Change Background</button>
            <h4 id='count'>{this.props.state}</h4>
            <button onClick={this.props.add}>Add</button>
            <button onClick={this.props.sub}>Subtract</button>
         </div>
      )
   }
}

/*
   !All App data
*/

class ParentClass extends React.Component{
   constructor(){
      super()
      this.state={
         count:0,
         footerClass:'footer',
         headerClass:'header',
         color: 'darkred',
         mainDiv:''
      }
      this.Greet = this.Greet.bind(this)
      this.showTime = this.showTime.bind(this)
      this.changeBg = this.changeBg.bind(this)
      this.Add = this.Add.bind(this)
      this.Sub = this.Sub.bind(this)
   }

   changeBg(){
      this.setState(function(PrevState){
         if (PrevState.footerClass === 'footer'|| PrevState.headerClass === 'header'){
            changeBodyColor(PrevState.color)
            return{
               headerClass:'header2',
               footerClass:'footer2',
               color: '',
               mainDiv:'mainDiv'
            }
         }else{
            changeBodyColor(PrevState.color)
            return {
               footerClass: 'footer',
               headerClass:'header',
               color: 'darkred',
               mainDiv:''
            }
         }
      })
   }

    Greet(){
      alert('Welcome to 30 Days Of React Challenge, 2020')
   }

   showTime(){
      let date = new Date()
      let month = months[date.getMonth()]
      let day = date.getDay()
      let year = date.getFullYear()
      alert(`${month} ${day}, ${year}`)
   }

   Add(){
      this.setState(function(PrevState){
         return{
            count: PrevState.count + 1
         }
      })
   }

   Sub(){
      this.setState(function(PrevState){
         if(PrevState.count > 0){
            return{
               count: PrevState.count - 1
            }
         }else{
            return{
               count: 0
            }
         }
      })
   }

   render(){
      return(
         <div className={this.state.mainDiv}>
         <Header headerClass={this.state.headerClass}/>
         <List/>
         <ButtonContent
            sub={this.Sub} 
            add={this.Add} 
            greet={this.Greet} 
            showTime={this.showTime}
            state={this.state.count}
            changeBg={this.changeBg}
         />
         <Footer footerClass={this.state.footerClass}/>
         </div>
      )
   }
}

/*
   !End Parentclass data
*/

/*
   !Header inherits props from ParentClass
*/
class Header extends ParentClass{
   constructor(props){
      super(props)
   }
   render(){
      const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
         firstName: 'Asabeneh',
         lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
}
      return(
         <>
            <HeaderContent data={data} header={this.props.headerClass}/>
         </>
      )
   }
}

/*
   !HeaderContent inherits props from Header
*/

function HeaderContent(props){
   const {welcome,title,subtitle,author:{firstName,lastName},date} = props.data
   return(
      <header className={props.header}>
         <h1>{welcome}</h1>
         <h2>{title}</h2>
         <h3>{subtitle}</h3>
         <p>{firstName} {lastName}</p>
         <small>{date}</small>
         </header>
   )
}

/*
   !List items data
*/

class ListContent extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      return(
         <div className='content'>
            <ul>
               <li>{this.props.data}</li>
            </ul>
         </div>
      )
   } 
}

class List extends React.Component{
   constructor(){
      super()
   }
   render(){
      return(
         techs.map(item =>{ 
            return(
               <ListContent 
            data ={item} 
            />
            )
         })
      )
   }
}
/*
   !End of List items
*/

/*
   !Footer inherits props from ParentClass
*/
class Footer extends ParentClass{
   constructor(props){
      super(props)
      console.log(props)
   }
   render(){
      return(
         <FooterContent footer={this.props.footerClass}/>

      )
   }
}

/*
   !FooterContent inherits props from Footer
*/
function FooterContent(props){
   return(
      <footer className={props.footer}>
         <p>Copyright 2023</p>
         </footer>
   )
}

/*
   !App data
*/
function App(){
   return(
      <ParentClass/>
   )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)