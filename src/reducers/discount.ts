import {
  UPDATE_SELECTED_DISCOUNTS,
  DELETE_DISCOUNT,
  UPDATE_DISCOUNT_ITEM,
  DELETE_DISCOUNT_ITEM,
  DiscountsActionTypes,
  DiscountsState,
} from '../constants/types';
import { deleteDiscount, updateDiscountItem, deleteDiscountItem } from '../utils';

const initialState: DiscountsState = {
  selectedDiscounts: {}
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
        selectedDiscounts: updateDiscountItem(state.selectedDiscounts, action.id, action.selectedItems),
      };
    case DELETE_DISCOUNT_ITEM:
      return {
        ...state,
        selectedDiscounts: deleteDiscountItem(state.selectedDiscounts, action.deletedId),
      };
    default:
      return state;
  }
}
