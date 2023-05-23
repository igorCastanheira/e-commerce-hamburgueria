import React from "react";
import { createContext,  useState } from "react";

export const CartContext = createContext([]);

export function CartContextProvider(props){
const[items,setItems] = useState([]);

    return(
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    )
};export default CartContextProvider;