import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

export function CartContextProvider({defaulValue={}},children){
const[items,setItems] = useState([]);





    return(
        <CartContext.Provider value={{items,setItems}}>
            {children}
        </CartContext.Provider>
    )
}