import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import styled from 'styled-components';
import SelectBox from '../components/SelectBox';
import Options from '../components/Options';
import { sumItemPrice, sumDiscountPrice, makeMoneyUnit } from '../utils';

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

export default function Cart() {
  const currentSelectedItems = useSelector((state: RootState) => state.item.selectedItems);
  const currentCurrencyCode = useSelector((state: RootState) => state.item.currencyCode);
  const currentSelectedDiscounts = useSelector((state: RootState) => state.discount.selectedDiscounts);
  const isDiscountDisabled = Object.keys(currentSelectedItems).length === 0;
  const itemsPrice = sumItemPrice(currentSelectedItems);
  const discountsPrice = sumDiscountPrice(itemsPrice, currentSelectedDiscounts, currentSelectedItems);
  const total = makeMoneyUnit(itemsPrice - discountsPrice, currentCurrencyCode);

  return (
    <Fragment>
      <Header>
        <SelectBox kind="Item" />
        <SelectBox kind="Discount" isClickDisabled={isDiscountDisabled} />
      </Header>
      <Section>
        {currentSelectedItems && (
          <Options
            kind="Item"
            options={currentSelectedItems}
            currency_code={currentCurrencyCode}
          />
        )}
        {currentSelectedDiscounts && (
          <Options
            kind="Discount"
            options={currentSelectedDiscounts}
            currency_code={currentCurrencyCode}
            itemsPrice={itemsPrice}
            itemList={currentSelectedItems}
          />
        )}
      </Section>
      <Footer>
        <FooterText>합계</FooterText>
        <Sum>{total}</Sum>
      </Footer>
    </Fragment>
  );
}
