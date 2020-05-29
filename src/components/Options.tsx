import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import Number from './Number';
import { OptionProps } from '../constants/types';

const OptionWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled('ul')`
  width: 80%;
  margin: 1rem 0 1rem 1rem;
  padding-left: 0;
  list-style: none;
`;

const SelectedOption = styled('div')`
  color: #998BE9;
  margin-right: 1rem;
`;

export default function Options({ kind, options, selectedOptions, handleClick, currency_code }: OptionProps) {
  const isItemPage = kind === 'Item';
  const idStarter = isItemPage ? 'i' : 'd';
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    if(handleClick) handleClick!(ev, options);
  };
  return (
    <Fragment>
      {Object.values(options).map((option, index) => {
        const { name } = option;
        const id = `${idStarter}_${index + 1}`;
        return (
          <OptionWrapper key={id} data-id={id} onClick={onClick}>
            <Ul>
              <li>{name}</li>
              <Number
                kind={kind}
                currency_code={currency_code}
                price={option.price}
                rate={option.rate}
              />
            </Ul>
            {selectedOptions && selectedOptions![id] && <SelectedOption><AiOutlineCheck size={25} /></SelectedOption>}
          </OptionWrapper>
        );
      })}
    </Fragment>
  );
}
