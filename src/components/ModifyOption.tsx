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

export default function ModifyOption({ count, name, id, price, originalPrice, isDeleteRendering }: ModifyOptionProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const displayCount = originalPrice
    ? count
    : count || '수정';

  const onClick = () => {
    setIsShow(!isShow);
  };
  return (
    <Wrapper>
      {displayCount}&nbsp;
      <BsChevronDown size={12}  onClick={onClick}/>
      <Modal isShow={isShow} name={name} count={count} onClose={onClick} id={id} price={price} isDeleteRendering={isDeleteRendering} />
    </Wrapper>
  );
}
