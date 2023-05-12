import React, { useEffect, useState } from "react";
import "./styles/ItemListContainer.css"
import ItemList from "./ItemList";
import {products} from "../mock/products";
import { useParams } from "react-router-dom";





const ItemListContainer= ()=>{
//const [product,setProduct]= useState([]);
const {categoryId} = useParams();
const[filteredProducts,setFilteredProducts]=useState([]);
  const productList=()=>{
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
  }
console.log("categoryid"+categoryId);
  useEffect(()=> {

 productList()
 .then((result)=>{
  const produtos =!!categoryId ? result.filter(p=>p.itemCategory === categoryId):result
 setFilteredProducts(produtos)})

  },

  [categoryId]);
 
return(
    
    <div className="inner">
      <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
    
    <ItemList items = {filteredProducts}/>
      </div>
      </div>
    </div>
)

};


export default ItemListContainer;