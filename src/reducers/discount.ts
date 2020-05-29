import {
  DiscountProps,
  UPDATE_SELECTED_DISCOUNTS,
  DELETE_DISCOUNT,
  UPDATE_DISCOUNT_ITEM,
  DiscountsActionTypes,
  DiscountsState,
} from '../constants/types';

const initialState: DiscountsState = {
  selectedDiscounts: {}
};

const deleteDiscount = (selectedDiscounts: DiscountProps, id: string) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  delete copySelectedDiscounts[id];
  return copySelectedDiscounts;
};

const updateDiscountItem = (selectedDiscounts: DiscountProps, id: string, item: string) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  copySelectedDiscounts[id].item = item;
  return copySelectedDiscounts;
};

export function discount(state = initialState, action: DiscountsActionTypes) {
  switch(action.type) {
    case UPDATE_SELECTED_DISCOUNTS:
      return {
        ...state,
        selectedDiscounts: action.discounts,
      };
    case DELETE_DISCOUNT:
      return {
        ...state,
        selectedDiscounts: deleteDiscount(state.selectedDiscounts, action.id),
      };
    case UPDATE_DISCOUNT_ITEM:
      return {
        ...state,
        selectedDiscounts: updateDiscountItem(state.selectedDiscounts, action.id, action.selectedItem),
      };
    default:
      return state;
  }
}
