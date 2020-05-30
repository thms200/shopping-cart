import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import { SelectionProps } from '../constants/types';

export const BoxLink = styled(Link)<SelectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42vw;
  margin: 0.5rem;
  border-radius: 8px;
  border-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  color: ${({ kind }) => (kind === 'Item') ? '#95989D' : '#EC78A4'};
  background-color: ${({ kind }) => (kind === 'Item') ? '#F7F7F7' : '#FDF2F5'};

  &.disabled {
    pointer-events: none;
    color: #95989D;
    background-color: #F7F7F7;
  }
`;

export default function SelectBox({ kind, isClickDisabled }: SelectionProps) {
  return (
    <BoxLink kind={kind} to={kind.toLowerCase()} className={isClickDisabled ? 'disabled' : ''}>
      <IoIosAddCircle size={15} />
      {kind}
    </BoxLink>
  );
}
