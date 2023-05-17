import React from "react";



function ItemDetail ({item}){
    
        return (
          <div key={item.id}>
            <h2>Id: {item.id}</h2>
            <h2>Nome: {item.name}</h2>
            <h2>Descrição:{item.description}</h2>
            <h2>Estoque: {item.stok}</h2>
          </div>
        );
      
};
export default ItemDetail;
