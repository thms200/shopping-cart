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
