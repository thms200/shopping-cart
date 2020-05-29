import {
  ItemProps,
  SELECTED_ITEMS,
  CURRENCY_CODE,
  ITEM_COUNT,
  ItemsActionTypes,
  ItemsState,
} from '../constants/types';

const initialState: ItemsState = {
  selectedItems: {},
  currencyCode: '',
};

const updateCount = (selectedItems: ItemProps, id: string, count: number) => {
  const copySelectedItems = { ...selectedItems };
  copySelectedItems[id].count = count;
  return copySelectedItems;
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
    case ITEM_COUNT:
      return {
        ...state,
        seleselectedItems: updateCount(state.selectedItems, action.id, action.count),
      };
    default:
      return state;
  }
}
