import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { OptionProps, SelectionProps } from '../constants/types';
import { makeMoneyUnit } from '../utils';

const Section = styled('section')`
  height: 75vh;
  overflow-y: scroll;
`;

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

const NumberLi = styled('li')`
  font-size: 0.7rem;
  color: ${(props: SelectionProps) => (props.kind === 'Item') ? '#95989D' : '#EC78A4'};
`;

const SelectedOption = styled('div')`
  color: #998BE9;
  margin-right: 1rem;
`;

export default function Options({ kind, informations, handleClick, selectedOptions }: OptionProps) {
  const isItemPage = kind === 'Item';
  const { items, discounts, currency_code } = informations;
  const options = isItemPage ? items : discounts;
  const idStarter = isItemPage ? 'i' : 'd';
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    handleClick(ev, options);
  };
  return (
    <Section>
      {Object.values(options).map((option, index) => {
        const { name } = option;
        const id = `${idStarter}_${index + 1}`;
        return (
          <OptionWrapper key={id} data-id={id} onClick={onClick}>
            <Ul>
              <li>{name}</li>
              <NumberLi kind={kind}>
                {isItemPage
                  ? makeMoneyUnit(option.price, currency_code)
                  : `${(option.rate * 100).toFixed()}%`
                }
              </NumberLi>
            </Ul>
            {selectedOptions[id] && <SelectedOption><AiOutlineCheck size={25} /></SelectedOption>}
          </OptionWrapper>
        );
      })}
    </Section>
  );
}
