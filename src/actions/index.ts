import {
  ItemProps,
  DiscountProps,
  SELECTED_ITEMS,
  SELECTED_DISCOUNTS,
  ItemsActionTypes,
  DiscountsActionTypes
} from '../constants/types';

export function updateSelectedItems(items: ItemProps): ItemsActionTypes {
  return {
    type: SELECTED_ITEMS,
    items,
  };
}

export function updateSelectedDiscounts(discounts: DiscountProps): DiscountsActionTypes {
  return {
    type: SELECTED_DISCOUNTS,
    discounts,
  };
}
