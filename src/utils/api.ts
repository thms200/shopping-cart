import { API } from '../constants';

export const fetchInformation = async() => {
  const response = await fetch(API);
  return await response.json();
};
<<<<<<< HEAD
=======

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
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
