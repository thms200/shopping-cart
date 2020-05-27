import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosAddCircle } from "react-icons/io";

interface Props {
  kind: string;
}

const BoxLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42vw;
  margin: 0.5rem;
  border-radius: 8px;
  border-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  color: ${(props: Props) => (props.kind === 'Item') ? "#95989D" : "#EC78A4"};
  background-color: ${(props: Props) => (props.kind === 'Item') ? "#F7F7F7" : "#FDF2F5"};
`;

export default function SelectBox({ kind }: Props) {
  return (
    <BoxLink kind={kind} to={kind.toLowerCase()}>
      <IoIosAddCircle size={15} />
      {kind}
    </BoxLink>
  );
}
