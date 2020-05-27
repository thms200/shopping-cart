import React from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from "react-icons/io";

interface StyleProps {
  isItem: boolean;
}

interface SelectBoxProps {
  isItem: boolean;
  contents: string;
}

const Button = styled.button<StyleProps>`
  display:flex;
  justify-content: center;
  width: 42vw;
  margin: 0.5rem;
  padding: 0.8rem;
  border-radius: 8px;
  border-style: none;
  color: ${props => (props.isItem) ? "#95989D" : "#EC78A4"};
  background-color: ${props => (props.isItem) ? "#F7F7F7" : "#FDF2F5"};
`;

export default function SelectBox({ isItem, contents }: SelectBoxProps) {
  return (
    <Button isItem={isItem}><IoIosAddCircle size={15} />{contents}</Button>
  );
}
