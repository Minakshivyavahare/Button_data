import React, { createContext, useState } from 'react'
import { PRODUCTS } from "../products";
import { useReducer } from 'react';


export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

  const reducer = (state,action) =>
  {
     switch(action.type)
     {
       case 'ADD':
           const tempState = state.filter((item) => action.payload.id ===item.id)
           if(tempState.length > 0)
           {
            return state
           }else
           {
            return [...state,action.payload] 
           }
          

        default:
           return state;
     }
  }
    const[state,dispatch] = useReducer(reducer,[])
  
    // const[cartItems,setCartItems] = useState(getDefaultCart())

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //   };


      // const contextValue = {addToCart,cartItems}
      // console.log(cartItems);

       const info={state,dispatch}
  return<ShopContext.Provider value={info}>{props.children}</ShopContext.Provider>
    
  
}

export default ShopContextProvider;