import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/macetas/:categoryId' element={<ItemListContainer />} />
          <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;