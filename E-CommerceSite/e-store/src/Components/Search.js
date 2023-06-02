/*
     !navigates to search results page.
*/

import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


function Search(){
     const [searchWord, setSearchWord] = useState('')
     const navigate = useNavigate()
     useEffect(()=>{
          const timeId = setTimeout(()=>{
          if(searchWord){
               navigate(`/search?s=${searchWord}`)
          }
     },500)
     return ()=> clearTimeout(timeId)
     },[searchWord])
     return(
     <label >
          Search <input type="text"  name="search" 
          onChange={(event)=>setSearchWord(event.target.value)}/>
     </label>
     )
}

export default Search