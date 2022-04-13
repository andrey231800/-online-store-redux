import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Main } from './pages/Main';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
