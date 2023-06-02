import styled from 'styled-components'

export const CheckOutTitle = styled.h3`
  margin:20px;
`

export const CheckOutDetails = styled.div`
  display:flex:
  flex-direction:column;
  width:80vw;
`
export const YourDetails = styled.h4`
  margin:20px;
  margin-bottom:5px;
  width:100%;
`
export const NameEmail = styled.div`
  width:100%;
`
export const StyledInput = styled.input`
  width:300px;
  outline:none;
  margin-left:10px;
  margin-bottom:10px;
`
export const StyledInputContainer = styled.div`
  margin:20px 10px 10px 50px;
  @media screen and (min-width:850px){
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
  }
`
export const HorizontalRule = styled.hr`
  color:black;
  border-top:1px solid black;
`
export const AddressDetails = styled.div`
  width:100%;
  display:flex:
  flex-direction:row;
`
export const StyledCheckBox = styled.div`
@media screen and (min-width:900px){
  margin: 10px 5px 10px 50px;
}
  margin: 10px 5px 10px 10px;
  input{
  margin-left:10px;
  }
`
export const ButtonContainer = styled.div`
  @media screen and (min-width:900px){
    grid-template-columns:90px 0.2fr;
    column-gap: 500px;
    margin:20px 0 0 20px;
  }
  display:grid;
  grid-template-columns:0.25fr 0.25fr;
  column-gap: 200px;
  margin:20px 0 10px 20px;
`
export const StyledButton = styled.button`
  border:2px solid black;
  padding:8px 10px;
  border-radius:5px;
`
export const SecondaryInput = styled.div`
  color:red;
`
export const StyledLabel = styled.div`
  color:black;
  margin-bottom:10px;
`
export const StyledOrder = styled.div`
  width:200vw;
  margin:0 auto 20px auto;
  background-color:red;
  display: grid;
  h3{
    margin:auto;
  }
`