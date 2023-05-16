import React, {  useState} from "react";
import {products} from "../mock/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer (){
    const [item,setItem] = useState({});
    const {itemId}= useParams();
function getItem() {
    
    return new Promise((resolve, reject) => {
        resolve(products.find(obj => obj.name ===itemId));
    });
}


    getItem().then((result) => setItem(result));
  
  
 
  
  console.log("error"+ item);
  


 
   return(
   
    <ItemDetail item={item}/>    
    
   )
    }   ;
    
    
        


    
export default ItemDetailContainer;