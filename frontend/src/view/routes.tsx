import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateProduct } from './pages/CreatePoduct';
import { EditProduct } from './pages/UpdateProduct';
import { Home } from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/products/create' component={CreateProduct}></Route>
        <Route path='/products/:id/edit' component={EditProduct}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };