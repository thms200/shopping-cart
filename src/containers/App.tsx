import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
=======
import { createGlobalStyle } from 'styled-components'
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
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
