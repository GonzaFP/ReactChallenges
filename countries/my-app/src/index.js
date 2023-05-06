import React from 'react'
import ReactDOM from 'react-dom'
import Countries from './countries'
import './index.css'


/*
!header component
 */
function HeaderContent(props){
   const {welcome,title,subtitle,author:{firstName,lastName},date,message} = props.data
   return(
      <header className='header'>
         <h1>{welcome}</h1>
         <h2>{title}</h2>
         <h3>{subtitle}</h3>
         <p>{firstName} {lastName}</p>
         <small>{date}</small>
         <p>{message}</p>
         </header>
   )
}
class Header extends React.Component{
   constructor(){
      super()
   }
   render(){
      const data = {
      welcome: 'Welcome to 30 Days Of Backpack Travel',
      title: 'Getting Started For Vacation',
      subtitle: 'Destinations Library',
      author: {
         firstName: 'Gonza',
         lastName: 'Fiona',
      },
      date: 'Oct 7, 2020',
      message: 'Browse through countries for your next holiday.'
}
      return(
         <>
            <HeaderContent data={data}/>
         </>
      )
   }
}

/*
!End of Header Component
 */

/*
!Footer Component
 */

function Footer(){
   return(
      <footer className='footer'>
         <p>Copyright 2023</p>
         </footer>
   )
}

/*
!Country Component
 */
class Country extends React.Component{
   constructor(){
      super()
      this.state = {
         id: 0,
         country : Countries.filter(function(item){
         return item.id === 0
      })}
      this.changeCountry = this.changeCountry.bind(this)
   }

   changeCountry(){
      this.setState(function(prevState){
         if(prevState.id < Countries.length - 1){
            return{
               id: prevState.id + 1,
               country:Countries.filter(function(item){
                  return item.id === prevState.id + 1
               })
            }
         }else if (prevState.id === Countries.length - 1){
            return{
               id: 0,
               country:Countries.filter(function(item){
                  return item.id === 0
               })
            }
         }
         else{
            return{
               id: 0,
               country:Countries.filter(function(item){
                  return item.id === 0
               })
            }
         }
      })
   }
   render(){
      return(
         <CountryComponent data={this.state.country} changeCountry={this.changeCountry}/>
      )
   }
}


function CountryComponent(props){
   const {country,language,capital,currency,src} = props.data[0]
   return(
      <>
         <div className='countryDiv'>
            <div className='countryInfo'>
               <img src={src} alt=''/>
               <h2>{country}</h2>
            </div>
            <p>
               <span className='label'>Capital:</span> {capital}.
               </p>
               <p>
                  <span className='label'>Language:</span> {language}.
               </p>
               <p>
                  <span className='label'>Currency:</span> {currency}.
               </p>
         </div>
         <button onClick={props.changeCountry}>Browse</button>
      </>
   )
}
/*
!End of Country Component
 */

function App(){
   return(
      <>
      <Header/>
      <Country/>
      <Footer/>
      </>
   )
}

ReactDOM.render(<App/>, document.getElementById('root'))