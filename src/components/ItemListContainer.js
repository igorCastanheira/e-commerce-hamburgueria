import React, { useEffect, useState } from "react";
import "./styles/ItemListContainer.css"
import ItemList from "./ItemList";
import {products} from "../mock/products";





const ItemListContainer= ()=>{
const [product,setProduct]= useState([]);


  const productList=()=>{
    return new Promise((resolve,reject)=>{
        resolve(products);
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
      <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
    <ItemList items = {product}/>
      </div>
      </div>
    </div>
)

};


export default ItemListContainer;