import React, { useEffect, useState } from "react";
import {products} from "../mock/products";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer (id){
const [item,setItem] = useState([]);
//const [itemFiltered,setItemFiltered] = useState([]);
function getItem() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

useEffect(
    ()=> {
  
  setTimeout(()=>{
   getItem().then(result => setItem(result))
  },2000);
  
    },
  
    []);
let found= item.find(obj => obj.id === id );

 
   return(
    <div>
    <ItemDetail item={found}/>    
    </div>
   )
    }   ;
    
    
        


    
export default ItemDetailContainer;