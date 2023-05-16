import React, {  useState } from "react"
import "./styles/ItemCount.css"


const ItemCount= (props) => {
    const count = props.stok;
    const [qnt, setQnt] = new useState(1);
   
function addToCart(){
  if(props.stok>= qnt && qnt>0){
    alert("adicionado ao carrinho " +qnt+ " unidades")
  }
  else{
    alert("quantidade invalida")
  }
}
    
        //const input
        let hasStock = (count>0 && count>qnt ) ? true : false; 
        let removeStock=( qnt>=1   ) ? true: false;

console.log("teste"+removeStock)
    return (
        <div className="Counter">
            <h2>Estoque:</h2>
            <h1>{props.stok}</h1>
                <p>{qnt}</p>
                 <div>
                    <button onClick={hasStock? ()=> setQnt((qnt)=> qnt+1):console.log("err")}>+</button>
				            <button onClick={removeStock?()=> setQnt((qnt)=>qnt-1):console.log("err")}>-</button>
                 </div>
              <button onClick={addToCart}>Adicionar ao carrinho</button>

        </div>
    )

};export default ItemCount