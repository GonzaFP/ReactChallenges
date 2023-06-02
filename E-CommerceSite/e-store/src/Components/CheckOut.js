import React,{useState} from "react"
import {useNavigate} from 'react-router-dom'
import '../index.css'
import { CheckOutTitle,
  YourDetails,
  NameEmail,
  StyledInput,
  HorizontalRule,
  CheckOutDetails,
  AddressDetails,
  StyledInputContainer,
  StyledCheckBox,
  StyledButton,
  ButtonContainer,
  SecondaryInput,
  StyledLabel
} from "./Styles/CheckOutStyles"

function CheckOut(){
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState({
    Name:'',
    className:'hide',
    Email:'',
    shippingAddress:''
  })
  const [formState, setFormState] = useState({
    Name:'',
    Email:'',
    shippingAddress1:'',
    shippingAddress2:'',
    shippingAddress3:'',
    billingAddress1:'',
    billingAddress2:'',
    billingAddress3:'',
    checked:false
  })
  const namePattern = /[a-zA-z]+/
  const emailPattern = /^([\w]+)@[a-zA-Z]+(\.[a-zA-Z]+)?\.[a-zA-z]{2,3}$/
  const validName = namePattern.test(formState.Name)
  const validEmail = emailPattern.test(formState.Email)

  const handleChange = (event)=>{
    const {name,value,type} = event.target
    if (type === 'checkbox'){
      formState.checked? setFormState(prevState=>{
        return{
          ...prevState,
          shippingAddress1:'',
          shippingAddress2:'',
          shippingAddress3:'',
          checked:false
        }
      }):
      setFormState(prevState=>{
        return{
          ...prevState,
          checked:true,
          shippingAddress1:prevState.billingAddress1,
          shippingAddress2:prevState.billingAddress2,
          shippingAddress3:prevState.billingAddress3
        }
      })
      
    }
    setFormState(prevState=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const handleError = (formField,empty,Error,Valid,inValid)=>{
    if (formField.trim() === ''){
      debugger
      setErrorMessage(prevState=>{
        return{
          ...prevState,
          [Error]:empty
        }
      })
    }
    else{
      if (!Valid){
        setErrorMessage(prevState=>{
          return{
            ...prevState,
            [Error]: inValid
          }
        })
      }else{
        setErrorMessage(prevState=>{
          return{
            ...prevState,
            [Error]:''
          }
        })
      }
    }
  }

  const handleSubmit = (event)=>{
    let emptyMessage = 'This field cannot be empty.'
    event.preventDefault()
    handleError(formState.Name, emptyMessage,'Name',validName,'Name should consist of only letters.')
    handleError(formState.Email, emptyMessage,'Email',validEmail,'Please enter a valid email.')
    handleError(formState.shippingAddress1, emptyMessage, 'shippingAddress')
    if (validName && validEmail && formState.shippingAddress1.trim() !== ''){
      navigate('/confirmedorder')
    }
  }

  return( 
  <form onSubmit={handleSubmit}>
  <CheckOutTitle>Shopping CheckOut</CheckOutTitle>
    <CheckOutDetails>
    <NameEmail>
      <YourDetails>Your Details</YourDetails>
      <HorizontalRule/>

      <StyledInputContainer>
        <div>
        <label>Name <span>*</span></label>
        <StyledInput type='text' placeholder="Enter Name" name='Name' value={formState.Name} onChange={handleChange}/>
        <p className="show">{errorMessage.Name}</p>
        </div>

        <div>
        <label>Email <span>*</span></label>
        <StyledInput type='text' placeholder="Enter Email" name="Email" value={formState.Email} onChange={handleChange}/>
        <p className="show">{errorMessage.Email}</p>
        </div>

        </StyledInputContainer>
    </NameEmail>

    <AddressDetails>
      <YourDetails>Address Details</YourDetails>
      <HorizontalRule/>
      <StyledCheckBox>
      <label id="check">
        Copy to shipping<input type='checkbox' onChange={handleChange}/>
      </label>
      </StyledCheckBox>

      <StyledInputContainer>
      <div>
      <div>
        <StyledLabel>
        <label>Billing Address</label>
      </StyledLabel>
        <StyledInput type='text' placeholder="Enter billing address" name="billingAddress1" 
        value={formState.billingAddress1}
        onChange={handleChange}/>
      </div>
      <SecondaryInput>
      <StyledInput type='text' name="billingAddress2" value={formState.billingAddress2} onChange={handleChange}/>
      <StyledInput type='text' name="billingAddress3" 
        value={formState.billingAddress3}
        onChange={handleChange}/>
      </SecondaryInput>
      </div>

      
      <div>
      <div>
        <StyledLabel>
        <label>Shipping Address <span>*</span></label>
      </StyledLabel>
        <StyledInput type='text' placeholder="Enter first shipping address" name="shippingAddress1" value={formState.shippingAddress1} onChange={handleChange}/>
        <p className="show">{errorMessage.shippingAddress}</p>
      </div>
      <SecondaryInput>
      <StyledInput type='text' name="shippingAddress2" value={formState.shippingAddress2} onChange={handleChange}/>
      <StyledInput type='text' name="shippingAddress3" value={formState.shippingAddress3} onChange={handleChange}/>
      </SecondaryInput>
      </div>


      </StyledInputContainer>
    </AddressDetails>
  </CheckOutDetails>

  <ButtonContainer>
  <StyledButton onClick={()=>{
    navigate('/basket')
  }}>Cancel</StyledButton>
  
  <StyledButton>Confirm Order</StyledButton>
  </ButtonContainer>
  </form>
)
}

export default CheckOut