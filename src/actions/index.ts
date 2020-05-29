import {
  ItemProps,
  DiscountProps,
  SELECTED_ITEMS,
  SELECTED_DISCOUNTS,
  ITEM_COUNT,
  CURRENCY_CODE,
  ItemsActionTypes,
  DiscountsActionTypes,
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

export function updateItemCount(id: string, count: number): ItemsActionTypes {
  return {
    type: ITEM_COUNT,
    id,
    count,
  };
}

export function updateSelectedDiscounts(discounts: DiscountProps): DiscountsActionTypes {
  return {
    type: SELECTED_DISCOUNTS,
    discounts,
  };
}


// export function toggleModal(isShow: boolean): ModalActionTypes {
//   return {
//     type: TOGGLE_MODAL,
//     isShow,
//   };
// }
