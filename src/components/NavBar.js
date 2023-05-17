
import "./styles/NavBar.css"
import CartIcon from "./cartWidget"
import CategoriesList from "./CategoriesList";
const categories = [{id:1,categorie:"Camisa"},{id:2,categorie:"Calças"},{id:3,categorie:"Sapatos"}];

   
    
   

    

function NavBar (){
    return(
        <nav className="navBar">
           
            <CartIcon/>
            
          <CategoriesList categories={categories}/>
            
        </nav>

    )

   
   
};

export default NavBar; 