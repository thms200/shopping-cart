import {
  ItemProps,
  UPDATE_SELECTED_ITEMS,
  UPDATE_CURRENCY_CODE,
  UPDATE_ITEM_COUNT,
  DELETE_ITEM,
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

const deleteItem = (selectedItems: ItemProps, id: string, ) => {
  const copySelectedItems = { ...selectedItems };
  delete copySelectedItems[id];
  return copySelectedItems;
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
