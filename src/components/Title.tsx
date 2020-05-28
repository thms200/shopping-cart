import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { TitleProps } from '../constants/types';

const Header = styled('header')`
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #F3F3F3;
  height: 10vh;
`;

const Close = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px; 
  color: #C6D0DA;
`;

const TitleText = styled('h4')`
  margin: 0 auto;
  padding-right: 35px;
`;

export default function Title({ text }: TitleProps) {
  return (
    <Header>
      <Close to="./"><AiOutlineClose size={25} /></Close>
      <TitleText>{text}</TitleText>
    </Header>
  );
}
