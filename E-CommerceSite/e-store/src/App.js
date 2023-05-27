import React from 'react'
import SharedLayout from './SharedLayout';
import ProductDetails from './Components/productdetails';
import Products from './Components/products';
import CategoryProducts from './Components/CategoryProducts';
import Home from './Components/Home'
import Basket from './Components/Basket';
import {
  BrowserRouter,
  Routes,
  Route
}
from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='category/:categoryId' element={<CategoryProducts/>}/>
          <Route path='products/:productId' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
