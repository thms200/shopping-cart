import { API } from '../constants';

export const fetchInformation = async() => {
  const response = await fetch(API);
  return await response.json();
};
