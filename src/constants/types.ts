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

export type ItemOrDiscount = ItemProps | DiscountProps;

export interface OptionProps {
  kind: string;
  options: ItemOrDiscount;
  selectedOptions?: ItemOrDiscount
  handleClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  currency_code: string;
}

export interface NumberProps {
  kind: string;
  currency_code: string;
  price?: number;
  rate?: number;
}

export interface ModifyOptionProps {
  count: number;
  name: string;
}

export interface ModalProps {
  isShow: boolean;
  name: string;
  count: number;
}

// [Redux] - item
export const SELECTED_ITEMS = 'SELECTED_ITEMS';
export const CURRENCY_CODE = 'CURRENCY_CODE';
export const ITEM_COUNT = 'ITME_COUNT';

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

interface UpdateItemCount {
  type: typeof ITEM_COUNT,
  id: string;
  count: number;
}

export type ItemsActionTypes = SelectedItems | UpdatedCurrencyCode | UpdateItemCount;

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
