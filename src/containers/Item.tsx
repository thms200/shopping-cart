import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { fetchInformation } from '../utils/api';
import { makeMoneyUnit } from '../utils';

interface ItemsProps {
  [key: string]: {
    name: string;
    price: number;
    count: number;
  };
}

interface InformationsProps {
  items: ItemsProps;
  discounts: object;
  currency_code: string;
}

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

const Title = styled('h4')`
  margin: 0 auto;
  padding-right: 35px;
`;

const Section = styled('section')`
  height: 75vh;
  overflow-y: scroll;
`;

const ItemRectangle = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled('ul')`
  width: 80%;
  margin: 1rem 0 1rem 1rem;
  padding-left: 0;
  list-style: none;
`;

const NameLi = styled('li')`
  height: 1.2rem;
  overflow-x: scroll;
`;

const PriceLi = styled('li')`
  font-size: 0.7rem;
  color: #C6D0DA;
`;

const SelectedItem = styled('div')`
  color: #998BE9;
  margin-right: 1rem;
`;

const Footer = styled('footer')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #9985F0;
`;

const FooterInformation = styled('div')`
  margin-bottom: 0.5rem;
  font-size: 0.3rem;
  color: #E6D9FF;
`;

const SelectButton = styled('button')`
  width: 90%;
  padding: 0.5rem 0;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #FDF8FF;
  background-color: #DACDFF;
`;

const Loading = styled('div')`
  height: 75vh;
  margin: 1rem;
  text-align: center;
  color: #9985F0;
`;

export default function Item() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [informations, setInformation] = useState<InformationsProps>({ items: {}, discounts: {}, currency_code: '' });
  const [selectedItems, setSelectedItems] = useState<ItemsProps>({});

  const getInformation = async() => {
    try {
      setIsLoading(true);
      const informations = await fetchInformation();
      setInformation(informations);
      setIsLoading(false);
    } catch(err) {
      console.warn(err);
    }
  };

  const selectItem = (ev: React.MouseEvent<HTMLElement>) => {
    const { id } = ev.currentTarget.dataset;
    const selectedItem = informations.items[id as string];
    const newSelectedItems = Object.assign({}, selectedItems);
    (newSelectedItems[id as string])
      ? delete newSelectedItems[id as string]
      : newSelectedItems[id as string] = selectedItem;
    setSelectedItems(newSelectedItems);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Fragment>
      <Header>
        <Close to="./"><AiOutlineClose size={25} /></Close>
        <Title>Item</Title>
      </Header>
      {isLoading && <Loading>Loading..</Loading>}
      <Section>
        {Object.values(informations.items).map((item, index) => {
          const { name, price } = item;
          const id = `i_${index + 1}`;
          return (
            <ItemRectangle key={id} data-id={id} onClick={(ev) => selectItem(ev)}>
              <Ul>
                <NameLi>{name}</NameLi>
                <PriceLi>{makeMoneyUnit(price, informations.currency_code)}</PriceLi>
              </Ul>
              {selectedItems[id] && <SelectedItem><AiOutlineCheck size={25} /></SelectedItem>}
            </ItemRectangle>
          );
        })}
      </Section>
      <Footer>
        <FooterInformation>서비스를 선택하세요(여러 개 선택가능)</FooterInformation>
        <SelectButton>완료</SelectButton>
      </Footer>
    </Fragment>
  );
}
