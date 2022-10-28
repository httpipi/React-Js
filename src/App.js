import './App.css';
import NavBar from '../src/components/Navbar.js';
import ItemListContainer from '../src/components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings={"Proximamente tienda Online de Sucupots!"}/>
    </div>
  );
}

export default App;