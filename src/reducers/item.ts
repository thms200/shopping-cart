import {
  SELECTED_ITEMS,
  ItemsActionTypes,
  ItemsState,
} from '../constants/types';

const initialState: ItemsState = {
  selectedItems: {}
};

export function item(state = initialState, action: ItemsActionTypes) {
  switch(action.type) {
    case SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.items,
      };
    default:
      return state;
  }
}
