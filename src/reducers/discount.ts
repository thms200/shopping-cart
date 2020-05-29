import {
  DiscountProps,
  UPDATE_SELECTED_DISCOUNTS,
  DELETE_DISCOUNT,
  DiscountsActionTypes,
  DiscountsState,
} from '../constants/types';

const initialState: DiscountsState = {
  selectedDiscounts: {}
};

const deleteDiscount = (selectedDiscounts: DiscountProps, id: string, ) => {
  const copySelectedDiscounts = { ...selectedDiscounts };
  delete copySelectedDiscounts[id];
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
    default:
      return state;
  }
}
