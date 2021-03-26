import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CreateProduct } from './pages/CreatePoduct';
import { EditProduct } from './pages/EditProduct';
import { Home } from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}></Route>
      <Route path='/products/create' component={CreateProduct}></Route>
      <Route path='/products/:id/edit' component={EditProduct}></Route>
    </BrowserRouter>
  );
};

export { Routes };