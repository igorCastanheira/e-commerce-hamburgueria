import React from "react";
import ItemCount from "./ItemCount";
import "./styles/ItemCount.css"

function ItemDetail ({item}){
   

        return (
          <div className="Container" key={item.id}>
           
            <h1> {item.name}</h1>
            <h5>Descrição:{item.description}</h5>
            <ItemCount stok={item.stok}/>
          </div>
        );
      
};
export default ItemDetail;
