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
  options: ItemProps | DiscountProps;
  selectedOptions?: ItemProps | DiscountProps;
  handleClick?: (ev: React.MouseEvent<HTMLElement>, options: (ItemProps | DiscountProps)) => void;
  currency_code: string;
}

export interface NumberProps {
  kind: string;
  currency_code: string;
  price?: number;
  rate?: number;
}

// [Redux] - item
export const SELECTED_ITEMS = 'SELECTED_ITEMS';
export const CURRENCY_CODE = 'CURRENCY_CODE';

export interface ItemsState {
  selectedItems: ItemProps;
  currencyCode: string;
}

interface SelectedItems {
  type: typeof SELECTED_ITEMS,
  items: ItemProps,
}

interface UpdatedCurrencyCode {
  type: typeof CURRENCY_CODE,
  currencyCode: string;
}

export type ItemsActionTypes = SelectedItems | UpdatedCurrencyCode;

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
