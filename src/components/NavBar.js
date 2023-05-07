import React from "react"
import "./styles/NavBar.css"
import Logo from "./assets/x-salada.jpg"
function NavBar (){
    return(
        <nav className="navBar">
            <div className="logo">
                <img src={Logo}alt="logo-img" className="logo"/>
            </div>
            <ul>
                <li><a href="#/" id="lista" >
                        <ion-icon name="archive-outline"></ion-icon>
                        Lista pedido
                    </a></li>
                <li><a href="#/" id="preco">
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                        Preços
                    </a></li>
                <li><a href="#/" id="pagamento">
                        <ion-icon name="cash-outline"></ion-icon>
                        pagamento
                    </a></li>
            </ul>
        </nav>

    )
}

export default NavBar;