import {
  ItemProps,
  DiscountProps,
  UPDATE_SELECTED_ITEMS,
  UPDATE_SELECTED_DISCOUNTS,
  UPDATE_ITEM_COUNT,
  UPDATE_CURRENCY_CODE,
  DELETE_ITEM,
  ItemsActionTypes,
  DiscountsActionTypes,
} from '../constants/types';

export function updateSelectedItems(items: ItemProps): ItemsActionTypes {
  return {
    type: UPDATE_SELECTED_ITEMS,
    items,
  };
}

export function updateCurrencyCode(currencyCode: string): ItemsActionTypes {
  return {
    type: UPDATE_CURRENCY_CODE,
    currencyCode,
  };
}

export function updateItemCount(id: string, count: number): ItemsActionTypes {
  return {
    type: UPDATE_ITEM_COUNT,
    id,
    count,
  };
}

export function deleteItem(id: string): ItemsActionTypes {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export function updateSelectedDiscounts(discounts: DiscountProps): DiscountsActionTypes {
  return {
    type: UPDATE_SELECTED_DISCOUNTS,
    discounts,
  };
}
