import { discount } from './discount';
import {
  UPDATE_SELECTED_DISCOUNTS,
  DELETE_DISCOUNT,
  UPDATE_DISCOUNT_ITEM,
} from '../constants/types';

const initialState = {
  selectedDiscounts: {}
};

// [mock data]
const mockDiscountOne = {
  'd_1': {
    'name': '지인 할인',
    'rate': 0.08
  },
  'd_2': {
    'name': '학생 할인',
    'rate': 0.07
  },
  'd_4': {
    'name': '기분이다 할인',
    'rate': 0.05
  },
};

const mockDiscountTwo = {
  'd_4': {
    'name': '기분이다 할인',
    'rate': 0.05
  },
};

// [mock action]
const discountActionOne = {
  type: 'UPDATE_SELECTED_DISCOUNTS' as typeof UPDATE_SELECTED_DISCOUNTS,
  discounts: mockDiscountOne
};

const discountActionTwo = {
  type: 'UPDATE_SELECTED_DISCOUNTS' as typeof UPDATE_SELECTED_DISCOUNTS,
  discounts: mockDiscountTwo
};

const deleteActionOne = {
  type: 'DELETE_DISCOUNT' as typeof DELETE_DISCOUNT,
  id: 'd_2'
};

const deleteActionTwo = {
  type: 'DELETE_DISCOUNT' as typeof DELETE_DISCOUNT,
  id: 'd_4'
};

const updateDiscountItemActionOne = {
  type: 'UPDATE_DISCOUNT_ITEM' as typeof UPDATE_DISCOUNT_ITEM,
  id: 'd_4',
  selectedItems: ['i_1', 'i_2'],
};

const updateDiscountItemActionTwo = {
  type: 'UPDATE_DISCOUNT_ITEM' as typeof UPDATE_DISCOUNT_ITEM,
  id: 'd_2',
  selectedItems: ['i_1', 'i_2'],
};

describe('<Discount Reducer>', () => {
  it('<UPDATE_SELECTED_DISCOUNTS>: should update selectedDiscounts if discounts is given', () => {
    const stateOne = discount(initialState, discountActionOne);
    const stateTwo = discount(stateOne, discountActionTwo);
    expect(stateOne['selectedDiscounts']['d_1']['name']).toEqual('지인 할인');
    expect(stateOne['selectedDiscounts']['d_2']['name']).toEqual('학생 할인');
    expect(stateTwo['selectedDiscounts']['d_1']).toEqual(undefined);
    expect(stateTwo['selectedDiscounts']['d_2']).toEqual(undefined);
    expect(stateTwo['selectedDiscounts']['d_4']['name']).toEqual('기분이다 할인');
  });

  it('<DELETE_DISCOUNT>: should delete selected discount in selectedDiscounts', () => {
    const state = discount(initialState, discountActionOne);
    expect(state['selectedDiscounts']['d_2']['name']).toEqual('학생 할인');
    expect(state['selectedDiscounts']['d_4']['name']).toEqual('기분이다 할인');

    const stateOne = discount(state, deleteActionOne);
    expect(stateOne['selectedDiscounts']['d_2']).toEqual(undefined);

    const stateTwo = discount(stateOne, deleteActionTwo);
    expect(stateTwo['selectedDiscounts']['d_4']).toEqual(undefined);
  });

  it('<UPDATE_DISCOUNT_ITEM>: should update dicounted item if item is selected', () => {
    const state = discount(initialState, discountActionOne);
    expect(state['selectedDiscounts']['d_4']).toEqual({
      'name': '기분이다 할인',
      'rate': 0.05
    },);
    expect(state['selectedDiscounts']['d_2']).toEqual({
      'name': '학생 할인',
      'rate': 0.07
    },);

    const stateOne = discount(state, updateDiscountItemActionOne);
    expect(stateOne['selectedDiscounts']['d_4']['selectedItems']).toEqual(['i_1', 'i_2']);

    const stateTwo = discount(stateOne, updateDiscountItemActionTwo);
    expect(stateTwo['selectedDiscounts']['d_2']['selectedItems']).toEqual(['i_1', 'i_2']);
  });
});
