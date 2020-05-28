import React, { Fragment } from 'react';
import styled from 'styled-components';
import SelectBox from '../components/SelectBox';

const Header = styled('header')`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px dashed #F3F3F3;
  height: 10vh;
`;

const Section = styled('section')`
  height: 80vh;
  overflow-y: scroll;
`;

const Footer = styled('footer')`
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed #F3F3F3;
  height: 10vh;
`;

const FooterText = styled('h6')`
  margin: 1rem;
  color: #A6ABAE;
`;

const Sum = styled('h4')`
  margin: 1rem;
`;

const total = 0;

export default function Cart() {
  return (
    <Fragment>
      <Header>
        <SelectBox kind="Item" />
        <SelectBox kind="Discount" />
      </Header>
      <Section></Section>
      <Footer>
        <FooterText>합계</FooterText>
        <Sum>{total}원</Sum>
      </Footer>
    </Fragment>
  );
}
