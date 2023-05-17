import React from "react"
import "./styles/NavBar.css"
import CartIcon from "./cartWidget"
function ListItem(props){
    return(
    <li><a href="#/" id="lista" >
             {props.text}
        </a></li>
    )
    
}


function NavBar (){
    return(
        <nav className="navBar">
           
            <CartIcon/>
            <ul>
               <ListItem text="Lista do pedido"/>
               <ListItem text="Preços"/>
               <ListItem text="Pagamento"/>
              
            </ul>
        </nav>

    )
}

export default NavBar;