import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import { SelectionProps } from '../constants/types';

const BoxLink = styled(Link)<SelectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42vw;
  margin: 0.5rem;
  border-radius: 8px;
  border-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  color: ${({ kind, isClickDisabled }) => (kind === 'Item' || isClickDisabled) ? '#95989D' : '#EC78A4'};
  background-color: ${({ kind, isClickDisabled }) => (kind === 'Item' || isClickDisabled) ? '#F7F7F7' : '#FDF2F5'};
  pointer-events: ${({ isClickDisabled }) => (isClickDisabled) ? 'none' : 'auto'};
`;

export default function SelectBox({ kind, isClickDisabled }: SelectionProps) {
  return (
    <BoxLink kind={kind} to={kind.toLowerCase()} isClickDisabled={isClickDisabled}>
      <IoIosAddCircle size={15} />
      {kind}
    </BoxLink>
  );
}
