export interface SelectionProps {
  kind: string;
  isClickDisabled?: boolean;
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

export interface TogglableOptions {
  name: string;
  price?: number;
  count?: number;
  rate?: number;
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
  selectedOptions?: ItemOrDiscount;
  handleClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  currency_code: string;
  totalPrice?: number;
}

export interface NumberProps {
  kind: string;
  currency_code: string;
  price?: number;
  rate?: number;
  totalPrice?: number;
}

export interface ModifyOptionProps {
  count: number;
  name: string;
  id: string;
}

export interface ModalProps {
  isShow: boolean;
  name: string;
  count: number;
  onClose: () => void;
  id: string;
}

export interface CountProps {
  handleClick: (ev: React.MouseEvent<HTMLElement>) => void;
  currentCount: number;
}

export interface CurrentColorProps {
  isActive: boolean;
}

// [Redux] - item
export const UPDATE_SELECTED_ITEMS = 'UPDATE_SELECTED_ITEMS';
export const UPDATE_CURRENCY_CODE = 'UPDATE_CURRENCY_CODE';
export const UPDATE_ITEM_COUNT = 'ITEM_COUNT';
export const DELETE_ITEM = 'DELETE_ITEM';

export interface ItemsState {
  selectedItems: ItemProps;
  currencyCode: string;
}

interface UpdateSelectedItems {
  type: typeof UPDATE_SELECTED_ITEMS,
  items: ItemProps,
}

interface UpdateCurrencyCode {
  type: typeof UPDATE_CURRENCY_CODE,
  currencyCode: string;
}

interface UpdateItemCount {
  type: typeof UPDATE_ITEM_COUNT,
  id: string;
  count: number;
}

interface DeleteItem {
  type: typeof DELETE_ITEM,
  id: string;
}

export type ItemsActionTypes = UpdateSelectedItems | UpdateCurrencyCode | UpdateItemCount | DeleteItem;

// [Redux] - discount
export const UPDATE_SELECTED_DISCOUNTS = 'UPDATE_SELECTED_DISCOUNTS';
export const DELETE_DISCOUNT = 'DELETE_DISCOUNT';

export interface DiscountsState {
  selectedDiscounts: DiscountProps;
}

interface UpdateSelectedDiscounts {
  type: typeof UPDATE_SELECTED_DISCOUNTS,
  discounts: DiscountProps,
}

interface DeleteDiscount {
  type: typeof DELETE_DISCOUNT,
  id: string,
}

export type DiscountsActionTypes = UpdateSelectedDiscounts | DeleteDiscount;
