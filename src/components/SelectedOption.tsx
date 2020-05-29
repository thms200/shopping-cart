import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const SelectedOption = styled('div')`
  margin-right: 1rem;
  color: #998BE9;
`;

export default function SelectdOption() {
  return (
    <SelectedOption><AiOutlineCheck size={25} /></SelectedOption>
  );
}
