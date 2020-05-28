import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import Title from '../components/Title';
import { fetchInformation } from '../utils/api';
import { makeMoneyUnit } from '../utils';
import { RootState } from '../reducers';
import { updateSelectedItems } from '../actions';
import { SelectionProps, ItemsProps, InformationsProps } from '../constants/types';
import { FOOTER_TEXT } from '../constants';

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

export default function Item({ kind }: SelectionProps) {
  const dispatch = useDispatch();
  const currentSelectedItems = useSelector((state: RootState) => state.item.selectedItems);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [informations, setInformation] = useState<InformationsProps>({ items: {}, discounts: {}, currency_code: '' });
  const [selectedItems, setSelectedItems] = useState<ItemsProps>(currentSelectedItems);
  const isItemPage = kind === 'Item';

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

  const completeSelection = () => {
    dispatch(updateSelectedItems(selectedItems));
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Fragment>
      <Title text={kind}/>
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
        <FooterInformation>{isItemPage ? FOOTER_TEXT.ITEM : FOOTER_TEXT.DISCOUNT}</FooterInformation>
        <Complete to="./" onClick={completeSelection}>완료</Complete>
      </Footer>
    </Fragment>
  );
}
