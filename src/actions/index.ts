import {
  ItemProps,
  DiscountProps,
  SELECTED_ITEMS,
  SELECTED_DISCOUNTS,
  CURRENCY_CODE,
  ItemsActionTypes,
  DiscountsActionTypes
} from '../constants/types';

export function updateSelectedItems(items: ItemProps): ItemsActionTypes {
  return {
    type: SELECTED_ITEMS,
    items,
  };
}

export function updateCurrencyCode(currencyCode: string): ItemsActionTypes {
  return {
    type: CURRENCY_CODE,
    currencyCode,
  };
}

export function updateSelectedDiscounts(discounts: DiscountProps): DiscountsActionTypes {
  return {
    type: SELECTED_DISCOUNTS,
    discounts,
  };
}
