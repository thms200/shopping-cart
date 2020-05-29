import { MONEY_UNIT } from '../constants';
import { ItemProps } from '../constants/types';

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

export const sumPrice = (selectedItems: ItemProps) => {
  return Object.values(selectedItems).reduce((sum, item) => {
    sum = sum + item.count * item.price;
    return sum;
  }, 0);
};

export const makeDiscountPrice = (rate: number, totalPrice: number, unit: string) => {
  const caculatedPrice = Math.round(totalPrice * rate);
  const percentage = `${(rate! * 100).toFixed()}%`;
  const result = caculatedPrice
    ? `-${makeMoneyUnit(caculatedPrice, unit)}(${percentage})`
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
