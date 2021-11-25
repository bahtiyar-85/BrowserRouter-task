import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    // указывает что роутинг будет в браузере
    <BrowserRouter>
   {/* header будет для все страниц */}
    <Header/>
    {/* дляперечисления роутов */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route path="/" element={<ProductList />}/>
        <Route path='/add-product' element={<h1>Add product</h1>}/>
        <Route path='/edit-product' element={<h1>Edit product</h1>}/>
        <Route path='/contacts' element={<h1>Contacts</h1>}/>
        <Route path='/about-us' element={<h1>About us</h1>}/>
      </Routes>
      {/* footer будет на всех страницах  */}
    <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;