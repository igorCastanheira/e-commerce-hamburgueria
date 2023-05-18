
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import CartPage from './components/CartPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext } from './context/CartContext';
//import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemDetail from './components/ItemDetail';



function App(){
  return (
<BrowserRouter>
 <CartContext.Provider value={[]}>;
 <div className='App'>
    
    <NavBar />
    
    <Routes>
  <Route exact path='/:categoryId' element={<ItemListContainer/>}/> 
  <Route exact path='/' element={<ItemListContainer/>}/> 
  <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
  <Route exact path='/cart' element={<CartPage/>}/>
  </Routes>
</div>
</CartContext.Provider>
</BrowserRouter>

)
};

export default App;
