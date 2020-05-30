import { MONEY_UNIT } from '../constants';
import { ItemProps, DiscountProps } from '../constants/types';

const addComma = (price: string) => {
  const result = [];
  let count = 0;
  for (let i = price.length - 1; i >= 0; i--) {
    count++;
    ((count % 3 === 0) && i !== 0)
      ? result.unshift(`,${price[i]}`)
      : result.unshift(price[i]);
  }
  return result.join('');
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

export const sumItemPrice = (selectedItems: ItemProps) => {
  return Object.values(selectedItems).reduce((sum, item) => {
    sum = sum + item.count * item.price;
    return sum;
  }, 0);
};

export const calculateDiscountPrice = (itemList: ItemProps, item: string, rate: number, itemsPrice: number) => {
  const result = item && itemList[item]
    ? Math.round((itemList[item!].price * itemList[item!].count) * rate)
    : Math.round(itemsPrice * rate);
  return result;
};

export const sumDiscountPrice = (itemsPrice: number, currentDiscounts: DiscountProps, itemList: ItemProps) => {
  return Object.values(currentDiscounts).reduce((sum, discount) => {
    const { item, rate } = discount;
    sum = sum + calculateDiscountPrice(itemList, item!, rate, itemsPrice);
    return sum;
  }, 0);
};

export const makeDiscountPrice = (rate: number, itemsPrice: number, unit: string, itemList: ItemProps, item: string) => {
  const price = calculateDiscountPrice(itemList, item!, rate, itemsPrice);
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
