# Shopping Cart UI 구현

## Stack
- ES2015+
- TypeScript
- React
- Redux
- React Router
- Jest for unit-test
- Enzyme for component-test
- ESLint

## Install
```
git clone https://github.com/thms200/shopping-cart
cd shopping-cart
npm install
npm start
```

## Features
- `item`, `discount`는 각각 장바구니로 추가/삭제 가능
- 동일한 아이템을 장바구니로 담을 수 없음
- `item`의 수량 선택 가능 eg. `item x 3`
- `discount`의 할인 대상 `item`을 선택하지 않으면 장바구니에 담긴 모든 `item`을 할인 적용
- `discount`의 할인 대상 `item`을 선택한 경우 선택한 항목만 할인 적용
- 장바구니에 담긴 내용이 변경될 때 마다 사용자에게 최종 금액을 표시
- 최종 금액은 `currency_code`에 따라 표시
  - `USD`: $13.40
  - `KRW`: 30000원

## Process
- Notion을 이용한 Task Management
- Git을 이용한 Version 관리
