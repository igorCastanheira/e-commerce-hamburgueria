
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemDetail from './components/ItemDetail';



function App(){
  return (
<BrowserRouter>
 <div className='App'>
    
    <NavBar />
    
    <Routes>
  <Route exact path='/:categoryId' element={<ItemListContainer/>}/> 
  <Route exact path='/' element={<ItemListContainer/>}/> 
  <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
  </Routes>
</div>
<a link href='/teste'>teste</a>
</BrowserRouter>

)
};

export default App;
