import {
  UPDATE_SELECTED_ITEMS,
  UPDATE_CURRENCY_CODE,
  UPDATE_ITEM_COUNT,
  DELETE_ITEM,
  ItemsActionTypes,
  ItemsState,
} from '../constants/types';
import { updateCount, deleteItem } from '../utils';

const initialState: ItemsState = {
  selectedItems: {},
  currencyCode: '',
};

export function item(state = initialState, action: ItemsActionTypes) {
  switch(action.type) {
    case UPDATE_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.items,
      };
    case UPDATE_CURRENCY_CODE:
      return {
        ...state,
        currencyCode: action.currencyCode,
      };
    case UPDATE_ITEM_COUNT:
      return {
        ...state,
        selectedItems: updateCount(state.selectedItems, action.id, action.count),
      };
    case DELETE_ITEM:
      return {
        ...state,
        selectedItems: deleteItem(state.selectedItems, action.id),
      };
    default:
      return state;
  }
}
