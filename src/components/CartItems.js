import React,{useContext} from "react"
import { CartContext } from "../context/CartContext";



function CartItems(){
    const valueVar = useContext(CartContext);
    
    function removeItem(id){
       const result=  valueVar.items.filter(function(el) {
            return el.id !== id
           
          });
          valueVar.setItems(result);
          console.log(valueVar.items);
        }
    
    return valueVar.items.map((product) =><div className="card border-secondary mb-3" style={{width:200, height:100}}> 
    <h5>{product.nome}</h5>
    <h5>Quantidade: {product.ammount}</h5>
   <button onClick={()=> removeItem(product.id)  }>Remover Item</button>
    
</div>);
    
}
export default CartItems;