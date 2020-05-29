import {
  SELECTED_ITEMS,
  CURRENCY_CODE,
  ItemsActionTypes,
  ItemsState,
} from '../constants/types';

const initialState: ItemsState = {
  selectedItems: {},
  currencyCode: '',
};

export function item(state = initialState, action: ItemsActionTypes) {
  switch(action.type) {
    case SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.items,
      };
    case CURRENCY_CODE:
      return {
        ...state,
        currencyCode: action.currencyCode,
      };
    default:
      return state;
  }
}
