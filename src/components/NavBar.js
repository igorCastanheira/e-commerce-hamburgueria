
import "./styles/NavBar.css"
import CartIcon from "./cartWidget"
import CategoriesList from "./CategoriesList";
const categories = [{id:1,categorie:"camisa", link:"camisa"},{id:2,categorie:"acessorio",link:"acessorio"},{id:3,categorie:"sapato",link:"sapato"}];

   
    
   

    

function NavBar (){
    return(
        <nav className="navBar">
           
            <CartIcon/>
            
          <CategoriesList categories={categories}/>
            
        </nav>

    )

   
   
};

export default NavBar; 