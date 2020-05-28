import React, { Fragment } from 'react';
import styled from 'styled-components';
import SelectBox from '../components/SelectBox';

<<<<<<< HEAD
const Header = styled('header')`
=======
const Header = styled.header`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  display: flex;
  justify-content: space-around;
  border-bottom: 1px dashed #F3F3F3;
  height: 10vh;
`;

<<<<<<< HEAD
const Section = styled('section')`
=======
const Section = styled.section`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  height: 80vh;
  overflow-y: scroll;
`;

<<<<<<< HEAD
const Footer = styled('footer')`
=======
const Footer = styled.footer`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed #F3F3F3;
  height: 10vh;
`;

<<<<<<< HEAD
const FooterText = styled('h6')`
=======
const FooterText = styled.h6`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  margin: 1rem;
  color: #A6ABAE;
`;

<<<<<<< HEAD
const Sum = styled('h4')`
=======
const Sum = styled.h4`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
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
