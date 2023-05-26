import React, {Component} from 'react'
import Header from './Components/Header';
import SideBar from './Components/sidebar';
import { fetcher } from './fetcher';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      categories:{
        errorMessage:'',
        data:[]
      },
      products:{
        errorMessage:'',
        data:[]
      }
    }
  }

  componentDidMount(){
    const fetchData = async ()=>{
      const responseData = await fetcher('categories')
      this.setState({
        categories:{
          errorMessage:responseData.errorMessage,
          data:responseData.data
        }
      })
    }
    fetchData()
  }

  handleProducts = async (id)=>{
    const ProductData = await fetcher(`products?catId=${id}`)
    this.setState({
      products:{
        errorMessage:ProductData.errorMessage,
        data:ProductData.data
      }
    })
  }
  render(){
    return(
      <>
      <Header/>
      <SideBar products = {this.state.products} categories={this.state.categories} onClick={this.handleProducts}/>
      </>
    )
  }
}

export default App;
