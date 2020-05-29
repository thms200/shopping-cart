import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Options from './Options';
import Count from './Count';
import { RootState } from '../reducers';
import { updateItemCount, deleteItem, deleteDiscount } from '../actions';
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

export default function Modal({ isShow, name, count, onClose, id }: ModalProps) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.item.selectedItems);
  const [selectedItem, setSelectedItem] = useState<ItemProps>({});
  const [updatedCount, setUpdateCount] = useState<number>(0);

  if (!isShow) {
    return null;
  }

  const selectItem = (ev: React.MouseEvent<HTMLElement>) => {
    const { id } = ev.currentTarget.dataset;
    const selectedItem = items[id as string];
    const newItem: ItemProps = {};
    newItem[id as string] = selectedItem;
    setSelectedItem(newItem);
  };

  const updateCount = (ev: React.MouseEvent<HTMLElement>) => {
    setUpdateCount(Number(ev.currentTarget.innerText));
  };

  const completeProcess = () => {
    dispatch(updateItemCount(id, updatedCount));
    onClose();
  };

  const deleteOption = () => {
    count
      ? dispatch(deleteItem(id))
      : dispatch(deleteDiscount(id));
    onClose();
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
          handleClick={selectItem}
        />}
        {count && <Count handleClick={updateCount} currentCount={updatedCount}/>}
      </Section>
      <Footer>
        <Delete onClick={deleteOption}>삭제</Delete>
        <Complete onClick={completeProcess}>완료</Complete>
      </Footer>
    </Wrapper>
  );
}