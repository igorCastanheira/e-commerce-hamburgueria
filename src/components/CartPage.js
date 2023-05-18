import React,{useContext} from "react"
import { CartContext } from "../context/CartContext";
function CartPage(){
    const valueVar = useContext(CartContext);
    return(
        
        <div>Lista de items: {console.log(valueVar)}</div>
    )
}
export default CartPage;