import { addComma,
  makeMoneyUnit,
  makeTotalItemPrice,
  calculateDiscountPrice,
  makeTotalDiscountPrice,
  makeDiscountValue,
  makeCountArray,
} from './index';

const mockItemOne = {
  'i_1': {
    'count': 1,
    'name': '여성컷',
    'price': 35000
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

const mockItemTwo = {
  'i_2': {
    'count': 2,
    'name': '남성컷',
    'price': 30000
  },
};

const mockItemThree = {
  'i_1': {
    'count': 2,
    'name': '여성컷',
    'price': 35000
  },
  'i_3': {
    'count': 1,
    'name': '드라이',
    'price': 30000
  },
  'i_4': {
    'count': 3,
    'name': '기본펌',
    'price': 100000
  },
};

const mockDiscountOne = {
  'd_3': {
    'name': '회원권 할인',
    'rate': 0.1
  },
};

const mockDiscountTwo = {
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

describe('<Util Index>', () => {
  describe('<function addComma>', () => {
    it('should be returned price with comma as thousands seperators', () => {
      expect(addComma('1000')).toEqual('1,000');
      expect(addComma('10000')).toEqual('10,000');
      expect(addComma('100000000')).toEqual('100,000,000');
      expect(addComma('100')).toEqual('100');
    });
  });

  describe('<function makeMoneyUnit>', () => {
    it('should be created price with currency code', () => {
      expect(makeMoneyUnit(1000, 'KRW')).toEqual('1,000원');
      expect(makeMoneyUnit(100, 'KRW')).toEqual('100원');
      expect(makeMoneyUnit(100, 'USD')).toEqual('$100');
      expect(makeMoneyUnit(13.4, 'USD')).toEqual('$13.4');
      expect(makeMoneyUnit(1322.4, 'USD')).toEqual('$1,322.4');
    });
  });

  describe('<function makeTotalItemPrice>', () => {
    it('should be returend sum of items price', () => {
      expect(makeTotalItemPrice(mockItemOne)).toEqual(165000);
      expect(makeTotalItemPrice(mockItemTwo)).toEqual(60000);
      expect(makeTotalItemPrice(mockItemThree)).toEqual(400000);
    });
  });

  describe('<function calculateDiscountPrice>', () => {
    it('should be returend discounted price according to item price if item is selected', () => {
      expect(calculateDiscountPrice(mockItemOne, ['i_1'], 0.1, 10000)).toEqual(3500);
      expect(calculateDiscountPrice(mockItemTwo, ['i_2'], 0.5, 10000)).toEqual(30000);
      expect(calculateDiscountPrice(mockItemThree, ['i_3', 'i_4'], 0.2, 10000)).toEqual(66000);
    });

    it('should be returend discounted price according to total item price if item is not selected', () => {
      expect(calculateDiscountPrice(mockItemOne, undefined, 0.1, 10000)).toEqual(1000);
      expect(calculateDiscountPrice(mockItemThree, undefined, 0.2, 10000)).toEqual(2000);
      expect(calculateDiscountPrice(mockItemThree, undefined, 0.5, 10000)).toEqual(5000);
    });
  });

  describe('<function makeTotalDiscountPrice>', () => {
    it('should be returend total discounted price', () => {
      expect(makeTotalDiscountPrice(100000, mockDiscountOne, mockItemTwo)).toEqual(10000);
      expect(makeTotalDiscountPrice(100000, mockDiscountTwo, mockItemOne)).toEqual(20000);
      expect(makeTotalDiscountPrice(10000, mockDiscountTwo, mockItemTwo)).toEqual(2000);
    });
  });

  describe('<function makeDiscountValue>', () => {
    it('should be returend discount price if item is selected', () => {
      expect(makeDiscountValue(0.1, 10000, 'KRW', mockItemOne, ['i_1'])).toEqual('-3,500원(10%)');
      expect(makeDiscountValue(0.2, 10000, 'KRW', mockItemOne, ['i_3'])).toEqual('-6,000원(20%)');
      expect(makeDiscountValue(0.07, 10000, 'KRW', mockItemOne, ['i_4'])).toEqual('-7,000원(7%)');
    });

    it('should be returend discount rate if item and total item price is not selected', () => {
      expect(makeDiscountValue(0.1, undefined, 'KRW', mockItemOne, undefined)).toEqual('10%');
      expect(makeDiscountValue(0.2, undefined, 'KRW', mockItemOne, undefined)).toEqual('20%');
      expect(makeDiscountValue(0.07, undefined, 'KRW', mockItemOne, undefined)).toEqual('7%');
    });
  });

  describe('<function makeCountArray>', () => {
    it('should be returend count array accoring to given max number', () => {
      expect(makeCountArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(makeCountArray(5)).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
});
