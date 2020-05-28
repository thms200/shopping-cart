import { MONEY_UNIT } from '../constants';

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
