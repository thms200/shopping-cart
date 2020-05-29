import React, { Fragment } from 'react';
import styled from 'styled-components';
import Number from './Number';
import SelectedOption from './SelectedOption';
import ModifyOption from './ModifyOption';
import { OptionProps } from '../constants/types';

const OptionWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled('ul')`
  width: 70%;
  margin: 1rem 0 1rem 1rem;
  padding-left: 0;
  list-style: none;
`;

const NameLi = styled('li')`
  color: black;
`;

export default function Options({ kind, options, selectedOptions, handleClick, currency_code, itemsPrice, itemList }: OptionProps) {
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    if(handleClick) handleClick!(ev);
  };
  return (
    <Fragment>
      {Object.values(options).map((option, index) => {
        const id = Object.keys(options)[index];
        const { name } = option;
        return (
          <OptionWrapper key={id} data-id={id} onClick={onClick}>
            <Ul>
              <NameLi>{name}</NameLi>
              <Number
                kind={kind}
                currency_code={currency_code}
                price={option.price * option.count}
                rate={option.rate}
                itemsPrice={itemsPrice}
                itemList={itemList}
                itemId={option.item}
              />
            </Ul>
            {selectedOptions && selectedOptions![id] && <SelectedOption />}
            {!selectedOptions && <ModifyOption count={option.count} name={option.name} id={id} />}
          </OptionWrapper>
        );
      })}
    </Fragment>
  );
}
