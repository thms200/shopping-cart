import React, { Fragment } from 'react';
import styled from 'styled-components';
import SelectBox from '../components/SelectBox';

const Header = styled.header`
  display:flex;
  justify-content: space-around;
`;

export default function Cart() {
  return (
    <Fragment>
      <Header>
        <SelectBox isItem={true} contents="item" />
        <SelectBox isItem={false} contents="Discount" />
      </Header>
      <section></section>
      <footer></footer>
    </Fragment>
  )
}
