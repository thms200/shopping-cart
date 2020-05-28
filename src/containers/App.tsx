import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Cart from './Cart';
import Item from './Item';
import Discount from './Discount';

const GlobalStyle = createGlobalStyle`
  html {
    min-width: 320px;
    font-size: 20px;
  }
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/item" component={Item} />
        <Route path="/discount" component={Discount} />
      </Switch>
    </Fragment>
  );
}

export default App;
