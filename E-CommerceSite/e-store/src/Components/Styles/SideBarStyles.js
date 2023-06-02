import styled from "styled-components";

export const CategoryProductContainer = styled.div`
  grid-area:sidebar;
  background: lavender;
  padding:20px;
  h4{
    color:red;
  }
  ul{
    margin-left:10px;
    margin-top:20px;
  }
  ul li{
  list-style:none;
  }
  @media screen and (min-width:800px){
    height:300vh;
  }

  @media screen and (max-width:800px){
    ul{
      display:${({display}) => display || 'none'};
    }
  }
`