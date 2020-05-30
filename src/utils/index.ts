import { MONEY_UNIT } from '../constants';
import { ItemProps, DiscountProps } from '../constants/types';

export const addComma = (price: string) => {
  const split = price.split('.');
  const int = split[0];
  const decimal = split[1];
  const result = [];
  let count = 0;
  for (let i = int.length - 1; i >= 0; i--) {
    count++;
    ((count % 3 === 0) && i !== 0)
      ? result.unshift(`,${price[i]}`)
      : result.unshift(price[i]);
  }
  return decimal
    ? result.join('') + '.' + decimal
    : result.join('');
};

export const makeMoneyUnit = (price: number, unit: string) => {
  const currentUnit = MONEY_UNIT[unit];
  const priceWithComma = addComma(price.toString());
  switch(currentUnit) {
    case '원':
      return `${priceWithComma}원`;
    case '$':
      return `$${priceWithComma}`;
    default:
      return `${priceWithComma}원`;
  }
};

export const makeTotalItemPrice = (selectedItems: ItemProps) => {
  return Object.values(selectedItems).reduce((sum, item) => {
    sum = sum + item.count * item.price;
    return sum;
  }, 0);
};

export const calculateDiscountPrice = (itemList: ItemProps, item: string, rate: number, totalItemPrice: number) => {
  const result = item && itemList[item]
    ? Math.round((itemList[item!].price * itemList[item!].count) * rate)
    : Math.round(totalItemPrice * rate);
  return result;
};

export const makeTotalDiscountPrice = (totalItemPrice: number, currentDiscounts: DiscountProps, itemList: ItemProps) => {
  return Object.values(currentDiscounts).reduce((sum, discount) => {
    const { item, rate } = discount;
    sum = sum + calculateDiscountPrice(itemList, item!, rate, totalItemPrice);
    return sum;
  }, 0);
};

export const makeDiscountValue = (rate: number, totalItemPrice: number, unit: string, itemList: ItemProps, item: string) => {
  const price = calculateDiscountPrice(itemList, item!, rate, totalItemPrice);
  const percentage = `${(rate! * 100).toFixed()}%`;
  const result = price
    ? `-${makeMoneyUnit(price, unit)}(${percentage})`
    : percentage;
  return result;
};

export const makeCountArray = (max: number) => {
  const result = [];
  for (let i = 1; i <= max; i++) {
    result.push(i);
  }
  return result;
};
