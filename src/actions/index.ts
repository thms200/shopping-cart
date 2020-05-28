import {
  ItemsProps,
  SELECTED_ITEMS,
  ItemsActionTypes
} from '../constants/types';

export function updateSelectedItems(items: ItemsProps): ItemsActionTypes {
  return {
    type: SELECTED_ITEMS,
    items,
  };
}
