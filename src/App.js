import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';

export const CartContext = React.createContext([]);

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider >
        <NavBar />
        <Routes>
          <Route path='/macetas/:categoryId' element={<ItemListContainer />} />
          <Route path='/macetas/:categoryId' element={<ItemListContainer />} />
          <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;