import React from "react";          

const Item =(props)=>{
return(
<div>
<div className="card" >
  <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <p>{props.stock}</p>
    <a href="#" className="btn btn-primary">Adicionar</a>
  </div>
</div>

</div>
)

};export default Item;