import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from 'components/routes/home/HomePage';
import ProductDetailPage from 'components/routes/products/ProductDetailPage';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/products" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}
