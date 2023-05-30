import React from "react"
import { CheckOutTitle,YourDetails,NameEmail,StyledInput } from "./Styles/CheckOutStyles"

function CheckOut(){
 return(
  <>
   <CheckOutTitle>Shopping CheckOut</CheckOutTitle>
   <YourDetails>Your Details</YourDetails>
   <NameEmail>
    <label>
     Name: <StyledInput type='text' placeholder="Enter Name"/>
    </label>
    <label>
     Email: <StyledInput type='text' placeholder="Enter Email"/>
    </label>
   </NameEmail>
  </>
 )
}

export default CheckOut