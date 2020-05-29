import {
  UPDATE_SELECTED_DISCOUNTS,
  DiscountsActionTypes,
  DiscountsState,
} from '../constants/types';

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
    default:
      return state;
  }
}
