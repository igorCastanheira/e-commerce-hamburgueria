
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemCount from './components/ItemCount';




function App(){
  return (
<BrowserRouter>
 <div className='App'>
    
    <NavBar />
    
    <Routes>
  <Route exact path='/' element={<ItemListContainer/>}/> 
  <Route exact path='/teste' element={<ItemCount/>}/>
  </Routes>
</div>
<a link href='/teste'>teste</a>
</BrowserRouter>

)
};

export default App;
