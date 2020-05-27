import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import Cart from './Cart';


const GlobalStyle = createGlobalStyle`
  html {
    min-width: 360px;
    font-size: 20px;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Cart} />
      </Switch>
    </Fragment>
  );
}

export default App;
