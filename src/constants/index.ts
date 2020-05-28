export const API = 'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData';

interface MoneyUnit {
  [key: string]: string;
  KRW: string;
  USD: string;
}

export const MONEY_UNIT: MoneyUnit = {
  KRW: '원',
  USD: '$',
};

export const FOOTER_TEXT = {
  ITEM: '서비스를 선택하세요(여러 개 선택가능)',
  DISCOUNT: '할인을 선택하세요(여러 개 선택가능)',
};
