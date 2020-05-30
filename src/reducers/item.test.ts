import { item } from './item';
import {
  UPDATE_SELECTED_ITEMS,
  UPDATE_CURRENCY_CODE,
  UPDATE_ITEM_COUNT,
  DELETE_ITEM,
} from '../constants/types';

const initialState = {
  selectedItems: {},
  currencyCode: '',
};

// [mock data]
const mockItemOne = {
  'i_1': {
    'count': 1,
    'name': '여성컷',
    'price': 35000
  },
};

const mockItemTwo = {
  'i_3': {
    'count': 1,
    'name': '드라이',
    'price': 30000
  },
  'i_4': {
    'count': 1,
    'name': '기본펌',
    'price': 100000
  },
};

// [mock action]
const itemActionOne = {
  type: 'UPDATE_SELECTED_ITEMS' as typeof UPDATE_SELECTED_ITEMS,
  items: mockItemOne
};

const itemActionTwo = {
  type: 'UPDATE_SELECTED_ITEMS' as typeof UPDATE_SELECTED_ITEMS,
  items: mockItemTwo
};

const currencyCodeActionOne = {
  type: 'UPDATE_CURRENCY_CODE' as typeof UPDATE_CURRENCY_CODE,
  currencyCode: 'KRW',
};

const currencyCodeActionTwo = {
  type: 'UPDATE_CURRENCY_CODE' as typeof UPDATE_CURRENCY_CODE,
  currencyCode: 'USD',
};

const updateActionCountOne = {
  type: 'UPDATE_ITEM_COUNT' as typeof UPDATE_ITEM_COUNT,
  id: 'i_3',
  count: 3
};

const updateActionCountTwo = {
  type: 'UPDATE_ITEM_COUNT' as typeof UPDATE_ITEM_COUNT,
  id: 'i_3',
  count: 2
};

const updateActionCountThree = {
  type: 'UPDATE_ITEM_COUNT' as typeof UPDATE_ITEM_COUNT,
  id: 'i_4',
  count: 3
};

const deleteActionOne = {
  type: 'DELETE_ITEM' as typeof DELETE_ITEM,
  id: 'i_3',
};

const deleteItemTwo = {
  type: 'DELETE_ITEM' as typeof DELETE_ITEM,
  id: 'i_4',
};

describe('<Item Reducer>', () => {
  it('<UPDATE_SELECTED_ITEMS>: should update if selected items is given', () => {
    const stateOne = item(initialState, itemActionOne);
    const stateTwo = item(stateOne, itemActionTwo);
    expect(stateOne['selectedItems']['i_1']['name']).toEqual('여성컷');
    expect(stateTwo['selectedItems']['i_1']).toEqual(undefined);
    expect(stateTwo['selectedItems']['i_3']['name']).toEqual('드라이');
    expect(stateTwo['selectedItems']['i_4']['name']).toEqual('기본펌');
  });

  it('<UPDATE_CURRENCY_CODE>: should update if currency_code is given', () => {
    const stateOne = item(initialState, currencyCodeActionOne);
    const stateTwo = item(stateOne, currencyCodeActionTwo);
    expect(stateOne['currencyCode']).toEqual('KRW');
    expect(stateTwo['currencyCode']).toEqual('USD');
  });

  it('<UPDATE_ITEM_COUNT>: should update item count if item count is changed', () => {
    const state = item(initialState, itemActionTwo);

    expect(state['selectedItems']['i_3']['count']).toEqual(1);
    const stateOne = item(state, updateActionCountOne);
    expect(stateOne['selectedItems']['i_3']['count']).toEqual(3);
    const stateTwo = item(stateOne, updateActionCountTwo);
    expect(stateTwo['selectedItems']['i_3']['count']).toEqual(2);

    expect(stateTwo['selectedItems']['i_4']['count']).toEqual(1);
    const stateThree = item(stateTwo, updateActionCountThree);
    expect(stateThree['selectedItems']['i_4']['count']).toEqual(3);
  });

  it('<DELETE_ITEM>: should delete item if item is given', () => {
    const state = item(initialState, itemActionTwo);
    expect(state['selectedItems']['i_3']['name']).toEqual('드라이');
    expect(state['selectedItems']['i_4']['name']).toEqual('기본펌');
    
    const stateOne = item(state, deleteActionOne);
    expect(stateOne['selectedItems']['i_3']).toEqual(undefined);
    
    const stateTwo = item(stateOne, deleteItemTwo);
    expect(stateTwo['selectedItems']['i_4']).toEqual(undefined);
  });
});
