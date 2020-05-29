import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { ModifyOptionProps } from '../constants/types';
import Modal from './Modal';

const Wrapper = styled('div')`
  border-radius: 10px;
  margin-right: 1rem;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  color: #90979D;
  background-color: #F7F7F7;
`;

export default function ModifyOption({ count, name }: ModifyOptionProps) {
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClick = () => {
    setIsShow(true);
  };
  return (
    <Wrapper onClick={onClick}>
      {count || '수정'}&nbsp;
      <BsChevronDown size={12} />
      <Modal isShow={isShow} name={name} count={count} />
    </Wrapper>
  );
}
