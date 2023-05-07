import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer';

function App() {
  return (<div className='App'>
    <NavBar />
    <MainContainer name="Coder House"/>
  </div>)
}

export default App;
