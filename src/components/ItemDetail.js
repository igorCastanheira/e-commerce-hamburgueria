import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";









function ItemDetail ({item}){
  const valor = useCartContext();
  const[add,setAdd]=useState(true); 
const [itemCart,setItemCart]= useState([]);
const count = item.stok;
const [qnt, setQnt] = new useState(1);




    let hasStock = (count>0 && count>qnt ) ? true : false; 
    let removeStock=( qnt>0   ) ? true: false;
    var id= item.id;
function addHandler(){
  setAdd(false)
  setItemCart({"id": id,
  "ammount": qnt })
  valor.setItems({itemCart})
}
return (
          <div key={item.id}>
            <h2>Id: {item.id}</h2>
            <h2>Nome: {item.name}</h2>
            <h2>Descrição:{item.description}</h2>
            <h2>Estoque: {item.stok}</h2>
           {add? ( 

        <div className=" Counter">
           
            <p>{qnt}</p>
            <div>
         <button onClick={hasStock? ()=> setQnt((qnt)=>qnt+1):console.log("err")}>+</button>
				<button onClick={removeStock?()=> setQnt((qnt)=>qnt-1):console.log("err")}>-</button>
            </div>
            

        </div>
    
           ):<p>Carrinho</p>}
           
           <button onClick={addHandler}>Comprar</button>
          
          </div>
        );
      
};
export default ItemDetail;
