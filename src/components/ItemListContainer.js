import React, { useEffect, useState } from "react";
import "./styles/ItemListContainer.css"
import ItemList from "./ItemList";

const items=[  {id: '1', name: 'produto1', description: 'descr', stok: 10},
{id: '2', name: 'produto2', description: 'descr', stok: 8},]




const ItemListContainer= ()=>{
const [product,setProduct]= useState([]);


  const productList=()=>{
    return new Promise((resolve,reject)=>{
        resolve(items);
    })
  }

  useEffect(
  ()=> {

setTimeout(()=>{
 productList().then(result => setProduct(result));
},2000)

  },

  []);
return(
    
    <div className="inner">
      <div>Produtos</div>
    <ItemList items = {product}/>
      </div>
    
)

};


export default ItemListContainer;