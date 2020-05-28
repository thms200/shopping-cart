import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Cart from './Cart';
import Selection from './Selection';

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
        <Route path="/item" render={() => <Selection kind="Item" />} />
        <Route path="/discount" render={() => <Selection kind="Discount" />} />
        <Redirect path="*" to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
