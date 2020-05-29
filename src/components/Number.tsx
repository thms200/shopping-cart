import React from 'react';
import styled from 'styled-components';
import { makeMoneyUnit, makeDiscountPrice } from '../utils';
import { NumberProps, SelectionProps } from '../constants/types';

const NumberLi = styled('li')<SelectionProps>`
  font-size: 0.7rem;
  color: ${({ kind }) => (kind === 'Item') ? '#95989D' : '#EC78A4'};
`;

export default function Number({ kind, currency_code, price, rate, totalPrice, itemList, itemId }: NumberProps) {
  return (
    <NumberLi kind={kind}>
      {kind === 'Item'
        ? makeMoneyUnit(price!, currency_code)
        : makeDiscountPrice(rate!, totalPrice!, currency_code, itemList!, itemId)
      }
    </NumberLi>
  );
}
