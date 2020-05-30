# Shopping Cart UI 구현

* [Tech Stack](https://github.com/thms200/shopping-cart#Tech-Stack)
* [Install](https://github.com/thms200/shopping-cart#Install)
* [Features](https://github.com/thms200/shopping-cart#Features)
* [Process](https://github.com/thms200/shopping-cart#Process)
* [Challenge](https://github.com/thms200/shopping-cart#Challenge)

<div>
<img style="display : block;" src="https://user-images.githubusercontent.com/48754671/83324932-6967ca00-a2a3-11ea-84ef-f8ef9bcdd61c.gif" />
</div>

## Tech Stack
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
모바일 웹으로 구현하였고, 해상도 375 * 667 (아이폰 6/7/8)에서 최적화되어있습니다.

멀티 디바이스를 고려하여 비율로 UI를 구성하였기 때문에 대부분의 모바일 해상도를 대응합니다. (최소 가로 320)

- `item`, `discount`는 각각 장바구니로 추가 및 삭제가 가능합니다.
- 동일한 아이템을 장바구니로 담을 수 없습니다.
- `item`의 수량은 선택 가능합니다. (최대 10개 - )
- `discount`의 할인 대상 `item`을 선택하지 않으면 장바구니에 담긴 모든 `item`을 할인 적용합니다.
- `discount`의 할인 대상 `item`을 선택한 경우 선택한 항목만 할인 적용합니다.
- `item`을 선택하지 않으면 `discount`는 선택 창은 비활성화 되어있습니다.
- 장바구니에 담긴 내용이 변경될 때 마다 사용자에게 최종 금액을 표시합니다.
- 최종 금액은 `currency_code`에 따라 표시합니다.
  - `USD`: $13.40
  - `KRW`: 30000원

## Process
- [Notion을 이용한 Task Management](https://www.notion.so/0986db43491d40518cea43fe70b04803?v=f3d5f957d55a4fea90c589b95007485b)
- Git을 이용한 Version 관리

## Challenge
- component의 재사용

  Options 컴포넌트는 장비구니에 담길 아이템 혹은 할인을 선택하는 컴포넌트와, 아이템의 수량을 변경하거나 할인을 적용할 아이템을 선택하는 모달 컴포넌트에서 적용하고 있습니다. `아이템 혹은 할인 리스트`라는 공통의 역할로 추상화가 가능하기 때문입니다.

  그러나 아이템은 화폐단위, 수량, 금액에 따라 총 금액을 표시해야했고, 할인은 할인율에 따른 금액을 나타내야했습니다. 또 적용되는 컴포넌트에 따라 화면 상 동일한 Layout이지만 선택 여부를 나타내는 UI 혹은 수량을 변경할 수 있는 UI 혹은 할인 적용 여부를 선택하는 UI처럼 제각기 다른 역할을 하는 UI가 적용되어야 했습니다.
  
  이를 위해 컴포넌트의 props 정보를 바탕으로 그 역할을 구분하여 페이지에 구현되어야할 UI가 적용되도록 구현하였습니다.

- typescript의 적용

  타입스크립트는 모든 변수와 값에 타입을 지정해야합니다. 즉, 타입스크립트는 정적 타입의 언어이기 때문에 동적 타입의 자바스크립트로 인한 에러를 사전에 방지할 수 있습니다. 하지만 코드를 작성하는 과정에서는 타입스크립의 엄격함으로 인한 에러가 발생하여 어려웠습니다.

  예를 들어 컴포넌트가 렌더링되면 객체로 설계된 props가 지정된 key값과 그에 맞는 value가 만들어지는데, 현재 코드에서는 key값이 undefined이므로 에러가 발생했고, Union Type으로 구성된 props이기 때문에 현재는 어떤 값이 적용될 지 알 수 없어 에러가 발생했습니다.

  또 아이템 혹은 할인을 선택하는 페이지처럼 UI를 고려했을 때 뷰 로직은 비슷한 컴포넌트이지만 그 안에서 상태를 업데이트하는 로직이 다를 경우 어떤 값을 인자로 받을지 알 수 없어서 에러가 발생했습니다.

  이를 위해 컴포넌트에 적용될 props 혹은 함수에 들어가는 인자를 최대한 예측이 가능한 코드가 될 수 있도록 단일 역할을 가진 컴포넌트 혹은 함수로 구성하기 위해 고민하였습니다.
