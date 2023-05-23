import React from "react";          
import { Link } from "react-router-dom";


const Item =(props)=>{
  
  return(
   

<div className="card border-secondary mb-3" style={{width:200}}>
  <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <p>{props.stock}</p>
    <p>Preço:</p>
    <p>R$:{props.preco}</p>
  </div>
  
  <Link to={`/item/${props.name}`}className="btn btn-secondary" >Detalhes</Link>
</div>


)

};export default Item;