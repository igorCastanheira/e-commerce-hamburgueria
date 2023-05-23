import React, { useState } from "react";
import { CartContext } from "../context/CartContext";

import { useContext } from "react";




function ItemDetail ({item}){
 
  const[add,setAdd]=useState(true); 

const count = item.stok;
const [qnt, setQnt] = new useState(1);
const valueVar = useContext(CartContext);


    let hasStock = (count>0 && count>qnt ) ? true : false; 
    let removeStock=( qnt>0   ) ? true: false;
  function addContext(){
    valueVar.setItems([...valueVar.items,{id:item.id,nome:item.name,ammount:qnt}])
    console.log(valueVar);
  }  

function addHandler(){
  setAdd(false)
 addContext();
 

}
return (
          <div key={item.id}>
           
            <h2> {item.name}</h2>
            <p>Descrição:</p>
            <p>{item.description}</p>
            <p>Estoque: {item.stok}</p>
            <h3>Preço:</h3>
            <p>R$:{item.preco}</p>
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
