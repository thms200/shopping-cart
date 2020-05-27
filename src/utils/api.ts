import { API } from '../constants';

export const fetchInformation = async() => {
  const response = await fetch(API);
  return await response.json();
};

export const addComma = (price: string) => {
  const result = [];
  let count = 0;
  for (let i = price.length - 1; i >= 0; i--) {
    count++;
    ((count % 3 === 0) && i !== 0)
      ? result.unshift(`,${price[i]}`)
      : result.unshift(price[i])
  }
  return result.join('');
};
