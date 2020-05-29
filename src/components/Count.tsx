import React, { Fragment } from 'react';
import styled from 'styled-components';
import { makeCountArray } from '../utils';

const Number = styled('div')`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #F3F3F3;
`;

export default function Count() {
  const countArray = makeCountArray(10);
  return (
    <Fragment>
      {countArray.map((num) => {
        return <Number key={num}>{num}</Number>;
      })}
    </Fragment>
  );
}
