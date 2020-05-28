import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Title from '../components/Title';
import Options from '../components/Options';
import { fetchInformation } from '../utils/api';
import { RootState } from '../reducers';
import { updateSelectedItems, updateSelectedDiscounts } from '../actions';
import { SelectionProps, InformationsProps, ItemProps, DiscountProps } from '../constants/types';
import { FOOTER_TEXT } from '../constants';

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

export default function Selection({ kind }: SelectionProps) {
  const dispatch = useDispatch();
  const currentSelectedItems = useSelector((state: RootState) => state.item.selectedItems);
  const currentSelectedDiscounts = useSelector((state: RootState) => state.discount.selectedDiscounts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [informations, setInformation] = useState<InformationsProps>({ items: {}, discounts: {}, currency_code: '' });
  const [selectedItems, setSelectedItems] = useState<ItemProps>(currentSelectedItems);
  const [selectedDiscounts, setSelectedDiscounts] = useState<DiscountProps>(currentSelectedDiscounts);
  const isItemPage = kind === 'Item';
  const selectedOptions = isItemPage ? selectedItems : selectedDiscounts;

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

  const selectOption = (ev: React.MouseEvent<HTMLElement>, options: (ItemProps | DiscountProps)) => {
    const { id } = ev.currentTarget.dataset;
    const selectedOption = options[id as string];
    const newSelectedOptions = { ...selectedOptions };
    (newSelectedOptions[id as string])
      ? delete newSelectedOptions[id as string]
      : newSelectedOptions[id as string] = selectedOption;

    isItemPage
      ? setSelectedItems(newSelectedOptions as ItemProps)
      : setSelectedDiscounts(newSelectedOptions as DiscountProps);
  };

  const completeSelection = () => {
    isItemPage
      ? dispatch(updateSelectedItems(selectedItems))
      : dispatch(updateSelectedDiscounts(selectedDiscounts));
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Fragment>
      <Title text={kind}/>
      {isLoading && <Loading><div>Loading..</div></Loading>}
      {!isLoading &&
        <Options
          kind={kind}
          informations={informations}
          handleClick={selectOption}
          selectedOptions={selectedOptions}
        />
      }
      <Footer>
        <FooterInformation>{isItemPage ? FOOTER_TEXT.ITEM : FOOTER_TEXT.DISCOUNT}</FooterInformation>
        <Complete to="./" onClick={completeSelection}>완료</Complete>
      </Footer>
    </Fragment>
  );
}
