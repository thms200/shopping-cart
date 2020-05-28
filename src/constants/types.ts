export interface SelectionProps {
  kind: string;
}

export interface TitleProps {
  text: string;
}

export interface ItemsProps {
  [key: string]: {
    name: string;
    price: number;
    count: number;
  };
}

export interface DiscountsProps {
  [key: string]: {
    name: string;
    rate: number;
  };
}

export interface InformationsProps {
  items: ItemsProps;
  discounts: DiscountsProps;
  currency_code: string;
}

// [Redux]
export const SELECTED_ITEMS = 'SELECTED_ITEMS';

export interface ItemsState {
  selectedItems: ItemsProps;
}

interface SelectedItems {
  type: typeof SELECTED_ITEMS,
  items: ItemsProps,
}

export type ItemsActionTypes = SelectedItems;
