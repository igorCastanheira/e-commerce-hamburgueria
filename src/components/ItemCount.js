import React from "react";
import "./styles/MainContainer.css"

import { useState } from 'react';


const ItemCount = (props) => {

  const [product, setProduct] = useState({
    id: 1,
    name: "produto",
    stock: 10,
    ea: 1,
  })
  const add = () => {
    if (product.stock > product.ea) {
      setProduct((anterior) => { return anterior.ea + 1 })
    }
  }


  const remove = () => {
    if(product.ea>1){
    setProduct((anterior) => { return anterior.ea - 1 })
  }}

  return (

    <div>

      <h1>{product.name}</h1>
      <h2>{product.stock}</h2>
      <h3>{product.ea}</h3>
      <div>
        <button className="BtnPrimary" onClick={add}>+</button>
        <button className="BtnPrimary" onClick={remove}>-</button>
      </div>
    </div>


  )



}
export default ItemCount;