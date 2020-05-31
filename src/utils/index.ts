import { MONEY_UNIT } from '../constants';
import { ItemProps, DiscountProps, ItemOrDiscount, TogglableOptions, ItemCountUpdateParames } from '../constants/types';

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

export const makeDiscountWithSelectedItems = (itemList: ItemProps, selectedItems: string[], rate: number) => {
  return selectedItems.reduce((sum, selectedItem) => {
    sum = sum + Math.round((itemList[selectedItem].price * itemList[selectedItem].count) * rate);
    return sum;
  }, 0);
};

export const calculateDiscountPrice = (itemList: ItemProps, selecteditems: string[], rate: number, totalItemPrice: number) => {
  const result = Array.isArray(selecteditems)
    ? makeDiscountWithSelectedItems(itemList, selecteditems, rate)
    : Math.round(totalItemPrice * rate);
  return result;
};

export const makeTotalDiscountPrice = (totalItemPrice: number, currentDiscounts: DiscountProps, itemList: ItemProps) => {
  return Object.values(currentDiscounts).reduce((sum, discount) => {
    const { selectedItems, rate } = discount;
    sum = sum + calculateDiscountPrice(itemList, selectedItems!, rate, totalItemPrice);
    return sum;
  }, 0);
};

export const makeDiscountValue = (rate: number, totalItemPrice: number, unit: string, itemList: ItemProps, selectedItems: string[]) => {
  const price = calculateDiscountPrice(itemList, selectedItems!, rate, totalItemPrice);
  const percentage = `${(rate! * 100).toFixed()}%`;
  const result = price
    ? `-${makeMoneyUnit(price, unit)}(${percentage})`
    : percentage;
  return result;
};

export const makeCountArray = (max: number) => {
  const result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const deleteDiscount = (selectedDiscounts: DiscountProps, id: string) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  delete copySelectedDiscounts[id];
  return copySelectedDiscounts;
};

export const updateDiscountItem = (selectedDiscounts: DiscountProps, id: string, selectedItem: Array<string>) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  (copySelectedDiscounts[id] as any).selectedItems = selectedItem;
  return copySelectedDiscounts;
};

export const deleteDiscountItem = (selectedDiscounts: DiscountProps, deletedId: string) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  for (let key in copySelectedDiscounts) {
    if(Array.isArray(copySelectedDiscounts[key].selectedItems!)){
      const newItemList = copySelectedDiscounts[key].selectedItems!.filter((item) => item !== deletedId);
      copySelectedDiscounts[key].selectedItems = newItemList;
    }
  }
  return copySelectedDiscounts;
};

export const updateCount = (selectedItems: ItemProps, item: ItemCountUpdateParames ) => {
  const { id, count, name, price } = item;
  const copySelectedItems = { ...selectedItems };
  const newItem = { count, name, price };
  copySelectedItems[id] = newItem;
  return copySelectedItems;
};

export const deleteItem = (selectedItems: ItemProps, id: string, ) => {
  const copySelectedItems = { ...selectedItems };
  delete copySelectedItems[id];
  return copySelectedItems;
};

export const toggleOptionList = (currentOptionList: ItemOrDiscount, newOption: TogglableOptions, id: string) => {
  const currentList = { ...currentOptionList };
  currentList[id]
    ? delete currentList[id]
    : (currentList[id] as any) = newOption;
  return currentList;
};
