import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Options from './Options';
import Count from './Count';
import { RootState } from '../reducers';
import { ModalProps, ItemProps } from '../constants/types';

const Wrapper = styled('div')`
  position: fixed;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 300px;
  border: 1px solid #DADADA;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  background-color: white;
`;

const Header = styled('header')`
  display: flex;
  align-items: center;
  height: 15%;
  padding-left: 1rem;
  border-bottom: 1px solid #F3F3F3;
  color: black;
`;

const Footer = styled('footer')`
  display: flex;
  align-items: center;
  height: 20%;
  border-top: 1px solid #F3F3F3;
`;

const Section = styled('section')`
  height: 65%;
  overflow-y: scroll;
`;

const Delete = styled('div')`
  width: 50%;
  padding: 10px 0;
  border-right: 1px solid #F3F3F3;
  text-align: center;
  color: #FF93BC;
`;

const Complete = styled('div')`
  width: 50%;
  padding: 10px 0;
  border-right: 1px solid #F3F3F3;
  text-align: center;
`;

export default function Modal({ isShow, name, count }: ModalProps) {
  const items = useSelector((state: RootState) => state.item.selectedItems);
  const [selectedItem, setSelectedItem] = useState<ItemProps>({});
  if (!isShow) {
    return null;
  }
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    const { id } = ev.currentTarget.dataset;
    const currentSelectedItem = items[id as string];
    const newSelectedItem: ItemProps = {};
    newSelectedItem[id as string] = currentSelectedItem;
    setSelectedItem(newSelectedItem);
  };

  return (
    <Wrapper>
      <Header>{name}</Header>
      <Section>
        {!count && <Options
          kind="Item"
          options={items}
          currency_code={'KRW'}
          selectedOptions={selectedItem}
          handleClick={handleClick}
        />}
        {count && <Count />}
      </Section>
      <Footer>
        <Delete>삭제</Delete>
        <Complete>완료</Complete>
      </Footer>
    </Wrapper>
  );
}
