export interface SelectionProps {
  kind: string;
}

export interface TitleProps {
  text: string;
}

export interface ItemProps {
  [key: string]: {
    name: string;
    price: number;
    count: number;
  };
}

export interface DiscountProps {
  [key: string]: {
    name: string;
    rate: number;
  };
}

export interface InformationsProps {
  items: ItemProps;
  discounts: DiscountProps;
  currency_code: string;
}

export interface OptionProps {
  kind: string;
  informations: InformationsProps;
  handleClick: (ev: React.MouseEvent<HTMLElement>, options: (ItemProps | DiscountProps)) => void;
  selectedOptions: ItemProps | DiscountProps;
}

// [Redux] - item
export const SELECTED_ITEMS = 'SELECTED_ITEMS';

export interface ItemsState {
  selectedItems: ItemProps;
}

interface SelectedItems {
  type: typeof SELECTED_ITEMS,
  items: ItemProps,
}

export type ItemsActionTypes = SelectedItems;

// [Redux] - discount
export const SELECTED_DISCOUNTS = 'SELECTED_DISCOUNTS';

export interface DiscountsState {
  selectedDiscounts: DiscountProps;
}

interface SelectedDiscounts {
  type: typeof SELECTED_DISCOUNTS,
  discounts: DiscountProps,
}

export type DiscountsActionTypes = SelectedDiscounts;
