/*
  !Component contains the information which will appear on each page. 
  !That is the header, sidebar and footer.
  !Uses context to share state among the pages.
  !When the page is displayed, an API call is made to the server
  !to retrieve categories which are passed to Categories.
*/

import React, {useState,useEffect, useReducer} from "react";
import { Outlet} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer'
import Categories from './Components/Category';
import { fetcher } from './fetcher';
import CartContext from "./Contexts/cartContext";
import DispatchContext from "./Contexts/dispatchContext";
import ReducerFunction from "./Components/ReducerFunction";
import './index.css'


const initialState={
  cartItems:[]
}

function SharedLayout(){

  const [state,dispatch] = useReducer(ReducerFunction,initialState)
  const [categoriesData, setCategories] = useState({errorMessage:'', data:[]})

  useEffect(()=>{
    const fetchData = async ()=>{
      const responseData = await fetcher('categories')
      setCategories(responseData)
    }
    fetchData()
  },[])

  return(
    <DispatchContext.Provider value={dispatch}>
        <CartContext.Provider value={state}>
            <div className="layout">
                <Header/>
                <Categories categories={categoriesData}/>
                <div>
                  <Outlet/>
                </div>
                <Footer/>
            </div>
        </CartContext.Provider>
    </DispatchContext.Provider>
  )
}
export default SharedLayout