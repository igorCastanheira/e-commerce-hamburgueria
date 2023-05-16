import React from "react";
import Item from "./Item";

const ItemList = ({items})=>{
    return items.map((product) => <Item name = {product.name} description ={product.description} stok={product.stok}>
      
    </Item>);
  }
  ;export default ItemList;