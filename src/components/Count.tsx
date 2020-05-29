import React, { Fragment } from 'react';
import styled from 'styled-components';
import { makeCountArray } from '../utils';
import { CountProps, CurrentColorProps } from '../constants/types';

const Number = styled('div')<CurrentColorProps>`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #F3F3F3;
  color: ${({ isActive }) => (isActive) ? '#FF93BC' : 'black'};
  background-color: ${({ isActive }) => (isActive) ? '#F3F3F3' : 'white'};
`;

export default function Count({ handleClick, currentCount }: CountProps) {
  const countArray = makeCountArray(10);
  return (
    <Fragment>
      {countArray.map((num, index) => {
        const isActive = (index + 1) === currentCount;
        return (
          <Number key={num} onClick={handleClick} isActive={isActive}>
            {num}
          </Number>
        );
      })}
    </Fragment>
  );
}
