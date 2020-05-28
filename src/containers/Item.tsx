import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { fetchInformation } from '../utils/api';
import { makeMoneyUnit } from '../utils';
import { RootState } from '../reducers';
import { updateSelectedItems } from '../actions';
import { ItemsProps, InformationsProps } from '../constants/types';

const Header = styled('header')`
=======
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
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
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

<<<<<<< HEAD
const Title = styled('h4')`
=======
const Title = styled.h4`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  margin: 0 auto;
  padding-right: 35px;
`;

<<<<<<< HEAD
const Section = styled('section')`
=======
const Section = styled.section`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  height: 75vh;
  overflow-y: scroll;
`;

<<<<<<< HEAD
const ItemRectangle = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled('ul')`
  width: 80%;
  margin: 1rem 0 1rem 1rem;
=======
const Ul = styled.ul`
  width: 80%;
  margin: 1rem 0;
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  padding-left: 0;
  list-style: none;
`;

<<<<<<< HEAD
const NameLi = styled('li')`
=======
const ItemRectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameLi = styled.li`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  height: 1.2rem;
  overflow-x: scroll;
`;

<<<<<<< HEAD
const PriceLi = styled('li')`
=======
const PriceLi = styled.li`
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  font-size: 0.7rem;
  color: #C6D0DA;
`;

<<<<<<< HEAD
const SelectedItem = styled('div')`
  color: #998BE9;
  margin-right: 1rem;
`;

const Footer = styled('footer')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
=======
const SelectedItem = styled.div`
  color: grey;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  height: 15vh;
  background-color: #9985F0;
`;

<<<<<<< HEAD
const FooterInformation = styled('div')`
  margin-bottom: 0.5rem;
=======
const FooterInformation = styled.div`
  margin: 0.5rem;
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  font-size: 0.3rem;
  color: #E6D9FF;
`;

<<<<<<< HEAD
const Complete = styled(Link)`
  width: 90%;
  padding: 0.5rem 0;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #FDF8FF;
  text-align: center;
  text-decoration: none;
  background-color: #DACDFF;
`;

const Loading = styled('div')`
  height: 75vh;
  text-align: center;
  color: #9985F0;

  div {
    padding-top: 1rem;
  }
`;

export default function Item() {
  const dispatch = useDispatch();
  const currentSelectedItems = useSelector((state: RootState) => state.item.selectedItems);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [informations, setInformation] = useState<InformationsProps>({ items: {}, discounts: {}, currency_code: '' });
  const [selectedItems, setSelectedItems] = useState<ItemsProps>(currentSelectedItems);
=======
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
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9

  const getInformation = async() => {
    try {
      setIsLoading(true);
      const informations = await fetchInformation();
      setInformation(informations);
      setIsLoading(false);
    } catch(err) {
      console.warn(err);
    }
<<<<<<< HEAD
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

  const completeSelection = () => {
    dispatch(updateSelectedItems(selectedItems));
=======
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
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Fragment>
      <Header>
<<<<<<< HEAD
        <Close to="./"><AiOutlineClose size={25} /></Close>
        <Title>Item</Title>
      </Header>
      {isLoading && <Loading><div>Loading..</div></Loading>}
      {!isLoading && <Section>
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
      </Section>}
      <Footer>
        <FooterInformation>서비스를 선택하세요(여러 개 선택가능)</FooterInformation>
        <Complete to="./" onClick={completeSelection}>완료</Complete>
=======
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
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
      </Footer>
    </Fragment>
  );
}
