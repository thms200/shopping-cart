import React from 'react';
import { shallow } from 'enzyme';
import SelectBox, { BoxLink } from './SelectBox';

describe('<SelectBox>', () => {
  const item = shallow(<SelectBox kind="Item" />);
  const discount = shallow(<SelectBox kind="Discount" isClickDisabled={false} />);
  const disabledDiscount = shallow(<SelectBox kind="Discount" isClickDisabled={true} />);

  it('should be render with given kind', () => {
    expect(item.find(BoxLink).text().split('>')[1]).toEqual('Item');
    expect(discount.find(BoxLink).text().split('>')[1]).toEqual('Discount');
  });

  it('should be render with routing address according to given kind', () => {
    expect(item.find(BoxLink).props().to).toEqual('item');
    expect(discount.find(BoxLink).props().to).toEqual('discount');
  });

  it('should be render with class name disabled if isClickDisabled props is true', () => {
    expect(discount.find('.disabled').length).toEqual(0);
    expect(disabledDiscount.find('.disabled').length).toEqual(1);
  });
});
