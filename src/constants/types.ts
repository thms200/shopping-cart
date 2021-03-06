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
    originalPrice?: number;
  };
}

export interface DiscountProps {
  [key: string]: {
    name: string;
    rate: number;
    selectedItems?: string[];
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
  totalItemPrice?: number;
  itemList?: ItemProps;
}

export interface NumberProps {
  kind: string;
  currency_code: string;
  price?: number;
  discountRate?: number;
  totalItemPrice?: number;
  itemList?: ItemProps;
  selectedItems?: string[];
}

export interface ModifyOptionProps {
  count: number;
  name: string;
  id: string;
  price: number;
  originalPrice?: number;
  isDeleteRendering: boolean;
}

export interface ModalProps {
  isShow: boolean;
  name: string;
  count: number;
  onClose: () => void;
  id: string;
  price: number;
  isDeleteRendering?: boolean;
}

export interface CountProps {
  handleClick: (ev: React.MouseEvent<HTMLElement>) => void;
  currentCount: number;
}

export interface CurrentColorProps {
  isActive: boolean;
}

export interface ItemCountUpdateParames {
  id: string;
  count: number;
  name: string;
  price: number;
}

// [Redux] - item
export const UPDATE_SELECTED_ITEMS = 'UPDATE_SELECTED_ITEMS';
export const UPDATE_CURRENCY_CODE = 'UPDATE_CURRENCY_CODE';
export const UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT';
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
  name: string,
  price: number;
}

interface DeleteItem {
  type: typeof DELETE_ITEM,
  id: string;
}

export type ItemsActionTypes = UpdateSelectedItems | UpdateCurrencyCode | UpdateItemCount | DeleteItem;

// [Redux] - discount
export const UPDATE_SELECTED_DISCOUNTS = 'UPDATE_SELECTED_DISCOUNTS';
export const DELETE_DISCOUNT = 'DELETE_DISCOUNT';
export const UPDATE_DISCOUNT_ITEM = 'UPDATE_DISCOUNT_ITEM';
export const DELETE_DISCOUNT_ITEM = 'DELETE_DISCOUNT_ITEM';

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

interface UpdateDiscountItem {
  type: typeof UPDATE_DISCOUNT_ITEM,
  id: string
  selectedItems: string[];
}

interface DeleteDiscountItem {
  type: typeof DELETE_DISCOUNT_ITEM,
  deletedId: string
}

export type DiscountsActionTypes = UpdateSelectedDiscounts | DeleteDiscount | UpdateDiscountItem | DeleteDiscountItem;
