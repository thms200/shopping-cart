import React from 'react';
import styled from 'styled-components';
import { makeMoneyUnit, makeDiscountValue } from '../utils';
import { NumberProps, SelectionProps } from '../constants/types';

export const NumberLi = styled('li')<SelectionProps>`
  font-size: 0.7rem;
  color: ${({ kind }) => (kind === 'Item') ? '#95989D' : '#EC78A4'};
`;

export default function Number({ kind, currency_code, price, discountRate, totalItemPrice, itemList, selectedItems }: NumberProps) {
  return (
    <NumberLi kind={kind}>
      {kind === 'Item'
        ? makeMoneyUnit(price!, currency_code)
        : makeDiscountValue(discountRate!, totalItemPrice!, currency_code, itemList!, selectedItems!)
      }
    </NumberLi>
  );
}
