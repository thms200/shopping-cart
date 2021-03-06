import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import Number from './Number';
import SelectedOption from './SelectedOption';
import ModifyOption from './ModifyOption';
import { OptionProps } from '../constants/types';

export const OptionWrapper = styled('div')`
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

export const NameLi = styled('li')`
  color: black;
`;

export default function Options({ kind, options, selectedOptions, handleClick, currency_code, totalItemPrice, itemList }: OptionProps) {
  const currentSelectedItems = useSelector((state: RootState) => state.item.selectedItems);
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    if(handleClick) handleClick!(ev);
  };
  return (
    <Fragment>
      {Object.values(options).map((option, index) => {
        const id = Object.keys(options)[index];
        const { name, originalPrice, count } = option;
        const displayCount = currentSelectedItems[id] ? currentSelectedItems[id].count : count;
        return (
          <OptionWrapper key={id} data-id={id} onClick={onClick}>
            <Ul>
              <NameLi>{name}</NameLi>
              <Number
                kind={kind}
                currency_code={currency_code}
                price={originalPrice || option.price * option.count}
                discountRate={option.rate}
                totalItemPrice={totalItemPrice}
                itemList={itemList}
                selectedItems={option.selectedItems}
              />
            </Ul>
            {selectedOptions && selectedOptions![id] && <SelectedOption />}
            {!selectedOptions && <ModifyOption count={displayCount} name={option.name} id={id} price={option.price} originalPrice={originalPrice} isDeleteRendering={!!currentSelectedItems[id]} />}
          </OptionWrapper>
        );
      })}
    </Fragment>
  );
}
