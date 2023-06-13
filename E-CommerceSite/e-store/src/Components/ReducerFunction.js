/*
 ! function handles all the logic of the website which include
 ! add, delete, increase or decrease number of cart items.
*/

function ReducerFunction(state,action){
  const oldState = JSON.parse(localStorage.getItem('State'))

  switch(action.type){

    case 'getStoredItems':
      return {
        ...state,
        cartItems:oldState.cartItems
      }

    case 'AddToBasket':
      const foundItem = state.cartItems.some(item=>item.id === action.value.productId)
      if (!foundItem){
        localStorage.setItem('State', JSON.stringify({...state,
        cartItems: [...state.cartItems,action.value.payLoad]}))

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
        localStorage.setItem('State', JSON.stringify({...state,cartItems: UpdatedCartItems}))
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
            qty:action.value.operator ===  '+'? item.qty + 1
            : item.qty === 0? 0: item.qty - 1
          }
        }
      return item
      })
      localStorage.setItem('State', JSON.stringify({...state,cartItems: UpdatedCartItems}))
      return {
        ...state,
        cartItems: UpdatedCartItems
    }

    case 'DeleteItem':
      localStorage.setItem('State', JSON.stringify({...state,
        cartItems:state.cartItems.filter(item=> item.id !== action.value)}))
      return {
        ...state,
        cartItems:state.cartItems.filter(item=> item.id !== action.value)
      }

      case 'ClearCart':
        localStorage.setItem('State', JSON.stringify({...state,cartItems:[]}))
        return {
          ...state,
          cartItems:[]
        }

      default:
        localStorage.setItem('State', JSON.stringify(state))
        return state
  }
  
}

export default ReducerFunction