import React, {useState,useEffect} from "react";
import { Outlet} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer'
import Categories from './Components/Category';
import { fetcher } from './fetcher';
import { CategoryProductContainer } from "./Components/Styles/SideBarStyles";

function SharedLayout(){
  const [categoriesData, setCategories] = useState({errorMessage:'', data:[]})
  useEffect(()=>{
    const fetchData = async ()=>{
      const responseData = await fetcher('categories')
      setCategories(responseData)
    }
    fetchData()
  },[])

  return(
      <>
      <Header/>
      <CategoryProductContainer>
      <Categories categories={categoriesData}/>
      <div>
        <Outlet/>
      </div>
      </CategoryProductContainer>
      <Footer/>
      </>
    )
}
export default SharedLayout