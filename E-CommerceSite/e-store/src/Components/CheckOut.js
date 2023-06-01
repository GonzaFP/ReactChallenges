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
    shippingAddress:''
  })
  const namePattern = /[a-zA-z]+/
  const emailPattern = /^([\w]+)\@[a-zA-Z]+(\.[a-zA-Z]+)?\.[a-zA-z]{2,3}$/
  const validName = namePattern.test(formState.Name)
  const validEmail = emailPattern.test(formState.Email)
  const handleChange = (event)=>{
    const {name,value} = event.target
    setFormState(prevState=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const displayError = (name,value,blankMessage,valid, invalidMessage)=>{
    if (value === ''){
      setErrorMessage(prevState=>{
        return {
          ...prevState,
          [name]:blankMessage
        }
      })
    }else{
      if (!valid){
        setErrorMessage(prevState=>{
        return {
          ...prevState,
          [name]:invalidMessage
        }
      })
      }else{
        setErrorMessage(prevState=>{
        return {
          ...prevState,
          [name]:''
        }
      })
      }
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    displayError(errorMessage.Name,formState.Name, 'This field cannot be empty', validName,'Name must consist of only letters.')
    displayError(errorMessage.Email,formState.Email, 'This field cannot be empty', validEmail,'Please enter a valid email.')
    displayError(errorMessage.shippingAddress,formState.shippingAddress, 'This field cannot be empty')
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
        <label>Name</label>
        </div>
        <div>
        <StyledInput type='text' placeholder="Enter Name" name='Name' value={formState.Name} onChange={handleChange}/>
        <p className="show">{errorMessage.Name}</p>
        </div>

        <div>
        <label>Email</label>
        </div>
        <div>
        <StyledInput type='text' placeholder="Enter Email" name="Email" value={formState.Email} onChange={handleChange}/>
        <p>{errorMessage.Email}</p>
        </div>

        </StyledInputContainer>
    </NameEmail>

    <AddressDetails>
      <YourDetails>Address Details</YourDetails>
      <HorizontalRule/>
      <StyledCheckBox>
      <label id="check">
        Copy to shipping<input type='checkbox'/>
      </label>
      </StyledCheckBox>

      <StyledInputContainer>
      <StyledLabel>
        <label>Billing Address</label>
      </StyledLabel>
      <div>
      <div>
        <StyledInput type='text' placeholder="Enter billing address"/>
      </div>
      <SecondaryInput>
      <StyledInput type='text'/>
      <StyledInput type='text'/>
      </SecondaryInput>
      </div>

      <StyledLabel>
        <label>Shipping Address</label>
      </StyledLabel>
      <div>
      <div>
        <StyledInput type='text' placeholder="Enter first shipping address" name="shippingAddress" value={formState.shippingAddress} onChange={handleChange}/>
        <p>{errorMessage.shippingAddress}</p>
      </div>
      <SecondaryInput>
      <StyledInput type='text'/>
      <StyledInput type='text'/>
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