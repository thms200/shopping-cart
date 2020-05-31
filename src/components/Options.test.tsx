import React from 'react';
import { shallow } from 'enzyme';
import Options, { NameLi, OptionWrapper } from './Options';

const mockOptions = {
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

const mockItemList = {
  'i_1': {
    'count': 1,
    'name': '여성컷',
    'price': 35000
  },
  'i_2': {
    'count': 2,
    'name': '남성컷',
    'price': 30000
  },
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

const mockItem = {
  'i_3': {
    'count': 1,
    'name': '드라이',
    'price': 30000
  },
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => mockItemList),
}));

describe('<Options>', () => {
  const options = shallow(
    <Options
      kind="item"
      options={mockOptions}
      selectedOptions={mockItem}
      handleClick={() => {}}
      currency_code="KRW"
      totalItemPrice={130000}
      itemList={mockItemList}
    />
  );

  it('should be render with given item List', () => {
    expect(options.find(NameLi).length).toEqual(2);
    expect(options.find(NameLi).at(0).text()).toEqual('드라이');
    expect(options.find(NameLi).at(1).text()).toEqual('기본펌');
  });

  it('should render SelectedOption component if aselectedOptions is given', () => {
    expect(options.find(OptionWrapper).length).toEqual(2);
    expect(options.find(OptionWrapper).at(0).children().length).toEqual(2);
    expect(options.find(OptionWrapper).at(1).children().length).toEqual(1);
  });
});
