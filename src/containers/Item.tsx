import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { fetchInformation, addComma } from '../utils/api';
import { MONEY_UNIT } from '../constants';

interface ItemProps {
  items: object;
  discounts: object;
  currency_code: string;
}

const Header = styled.header`
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

const Title = styled.h4`
  margin: 0 auto;
  padding-right: 35px;
`;

const Section = styled.section`
  height: 75vh;
  overflow-y: scroll;
`;

const Ul = styled.ul`
  width: 80%;
  margin: 1rem 0;
  padding-left: 0;
  list-style: none;
`;

const ItemRectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameLi = styled.li`
  height: 1.2rem;
  overflow-x: scroll;
`;

const PriceLi = styled.li`
  font-size: 0.7rem;
  color: #C6D0DA;
`;

const SelectedItem = styled.div`
  color: grey;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15vh;
  background-color: #9985F0;
`;

const FooterInformation = styled.div`
  margin: 0.5rem;
  font-size: 0.3rem;
  color: #E6D9FF;
`;

const SelectButton = styled.button`
  width: 90%;
  padding: 0.5rem 0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #DACDFF;
`;

const Loading = styled.div`
  margin: 1rem;
  text-align: center;
  color: #9985F0;
`;

export default function Item() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [informations, setInformation] = useState<ItemProps>({ items: {}, discounts: {}, currency_code: '' });

  const selectItem = (ev: React.MouseEvent<HTMLLIElement>) => {
    console.log(ev.currentTarget.innerHTML);
  };

  const getInformation = async() => {
    try {
      setIsLoading(true);
      const informations = await fetchInformation();
      setInformation(informations);
      setIsLoading(false);
    } catch(err) {
      console.warn(err);
    }
  }

  const makeMoneyUnit = (price: number, unit: string) => {
    const currentUnit = MONEY_UNIT[unit];
    const priceWithComma = addComma(price.toString());
    switch(currentUnit) {
      case '원':
        return `${priceWithComma}원`
      case '$':
        return `$${priceWithComma}`;
      default:
        return `${priceWithComma}원`
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Fragment>
      <Header>
        <Close to="./"><AiOutlineClose size={25}/></Close>
        <Title>Item</Title>
      </Header>
      {isLoading && <Loading>Loading..</Loading>}
      <Section>
        {Object.values(informations.items).map(({ name, price }) => {
          return (
            <ItemRectangle key={name}>
              <Ul>
                <NameLi onClick={(ev) => selectItem(ev)}>{name}</NameLi>
                <PriceLi>{makeMoneyUnit(price, informations.currency_code)}</PriceLi>
              </Ul>
              <SelectedItem><AiOutlineCheck size={25} /></SelectedItem>
            </ItemRectangle>
          );
        })}
      </Section>
      <Footer>
        <FooterInformation>서비스를 선택하세요(여러 개 선택가능</FooterInformation>
        <SelectButton>완료</SelectButton>
      </Footer>
    </Fragment>
  );
}
