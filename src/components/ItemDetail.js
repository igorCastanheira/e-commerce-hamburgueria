import React from "react";
import ItemCount from "./ItemCount";







function ItemDetail ({item}){
 
        return (
          <div key={item.id}>
            <h2>Id: {item.id}</h2>
            <h2>Nome: {item.name}</h2>
            <h2>Descrição:{item.description}</h2>
            <h2>Estoque: {item.stok}</h2>
           <ItemCount stok={item.stok}/>
  
            
          
          </div>
        );
      
};
export default ItemDetail;
