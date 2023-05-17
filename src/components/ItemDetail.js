import React, { useState } from "react";
import ItemCount from "./ItemCount";








function ItemDetail ({item}){
const[add,setAdd]=useState(true); 
        
function addHandler(){
  setAdd(false)
}
return (
          <div key={item.id}>
            <h2>Id: {item.id}</h2>
            <h2>Nome: {item.name}</h2>
            <h2>Descrição:{item.description}</h2>
            <h2>Estoque: {item.stok}</h2>
           {add? (<ItemCount stok={item.stok}/>
           ):<p>Carrinho</p>}
           
           <button onClick={addHandler}>Comprar</button>
          
          </div>
        );
      
};
export default ItemDetail;
