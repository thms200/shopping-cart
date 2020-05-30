import React from 'react';
import { shallow } from 'enzyme';
import Number, { NumberLi } from './Number';

describe('<Number>', () => {
  it('should be render with given price and currency code', () => {
    const itemNumberOne = shallow(<Number kind="Item" currency_code="KRW" price={30000} />);
    const itemNumberTwo = shallow(<Number kind="Item" currency_code="USD" price={13.4} />);
    expect(itemNumberOne.find(NumberLi).text()).toEqual('30,000원');
    expect(itemNumberTwo.find(NumberLi).text()).toEqual('$13.4');
  });

  it('should be render only given discountRate', () => {
    const discountNumberOne = shallow(<Number kind="Discount" currency_code="KRW" discountRate={0.3} />);
    const discountNumberTwo = shallow(<Number kind="Discount" currency_code="USD" discountRate={0.07} />);
    expect(discountNumberOne.find(NumberLi).text()).toEqual('30%');
    expect(discountNumberTwo.find(NumberLi).text()).toEqual('7%');
  });

  it('should be render discount price with discount rate', () => {
    const discountNumberOne = shallow(<Number kind="Discount" currency_code="KRW" discountRate={0.3} totalItemPrice={50000} />);
    const discountNumberTwo = shallow(<Number kind="Discount" currency_code="USD" discountRate={0.3} totalItemPrice={10} />);
    expect(discountNumberOne.find(NumberLi).text()).toEqual('-15,000원(30%)');
    expect(discountNumberTwo.find(NumberLi).text()).toEqual('-$3(30%)');
  });
});
