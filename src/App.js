
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
//import CartItems from './components/CartItems';
import CartPageContainer from'./components/CartpageContaier';


function App(){
  return (
<BrowserRouter>
 <CartContextProvider >
 <div className='App'>
    
    <NavBar />
    
    <Routes>
  <Route exact path='/:categoryId' element={<ItemListContainer/>}/> 
  <Route exact path='/' element={<ItemListContainer/>}/> 
  <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
  <Route exact path='/cart' element={<CartPageContainer/>}/>
  </Routes>
  </div>
</CartContextProvider>

</BrowserRouter>

)
};

export default App;
