import React from 'react';
import styled from 'styled-components';
import { makeMoneyUnit } from '../utils';
import { NumberProps, SelectionProps } from '../constants/types';

const NumberLi = styled('li')<SelectionProps>`
  font-size: 0.7rem;
  color: ${({ kind }) => (kind === 'Item') ? '#95989D' : '#EC78A4'};
`;

export default function Number({ kind, currency_code, price, rate }: NumberProps) {
  return (
    <NumberLi kind={kind}>
      {kind === 'Item'
        ? makeMoneyUnit(price!, currency_code)
        : `${(rate! * 100).toFixed()}%`
      }
    </NumberLi>
  );
}
