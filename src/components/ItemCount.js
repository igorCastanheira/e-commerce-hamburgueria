import React, {  useState } from "react"

const ItemCount= (props) => {
    const count = props.stok;
    const [qnt, setQnt] = new useState(1);
   

    
    
        let hasStock = (count>0 && count>qnt ) ? true : false; 
        let removeStock=( qnt>0   ) ? true: false;

console.log("teste"+removeStock)
    return (
        <div className=" Counter">
            <h1>{props.stok}</h1>
            <p>{qnt}</p>
            <div>
                <button onClick={hasStock? ()=> setQnt((qnt)=>qnt+1):console.log("err")}>+</button>
				<button onClick={removeStock?()=> setQnt((qnt)=>qnt-1):console.log("err")}>-</button>
            </div>
            

        </div>
    )

};export default ItemCount