import React, {useState,useEffect, useReducer} from "react";
import { Outlet} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer'
import Categories from './Components/Category';
import { fetcher } from './fetcher';
import { CategoryProductContainer } from "./Components/Styles/SideBarStyles";
import CartContext from "./Contexts/cartContext";
import DispatchContext from "./Contexts/dispatchContext";

function ReducerFunction(state,action){
  switch(action.type){
    case 'AddToBasket':
      const foundItem = state.cartItems.some(item=>item.id === action.value.productId)
      if (!foundItem){
        return {
          ...state,
          cartItems: [...state.cartItems,action.value.payLoad]
        }
      }
      else{
        const UpdatedCartItems= state.cartItems.map(item=>{
          if (item.id === action.value.productId){
            return{
            ...item,
            qty:item.qty + 1
          }
          }
          return item
        })
        return {
          ...state,
          cartItems: UpdatedCartItems
        }
      }

      case 'AddSubQty':
        const UpdatedCartItems = state.cartItems.map(item=>{
        if(item.id === action.value.productId){
          return{
            ...item,
            qty:action.value.operator ===  '+'? item.qty + 1: item.qty === 0? 0: item.qty - 1
          }
        }
      return item
      })
      return {
        ...state,
        cartItems: UpdatedCartItems
    }

    case 'DeleteItem':
      return {
        ...state,
        cartItems:state.cartItems.filter(item=> item.id !== action.value)
      }

      case 'ClearCart':
        return {
          ...state,
          cartItems:[]
        }

      default:
        return state
  }
  
}

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
        <Header/>
        <CategoryProductContainer>
        <Categories categories={categoriesData}/>
        <div>
          <Outlet/>
        </div>
        </CategoryProductContainer>
        <Footer/>
      </CartContext.Provider>
    </DispatchContext.Provider>
    )
}
export default SharedLayout