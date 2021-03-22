1. 리액트란 무엇인가

자동으로 업데이트 되는 UI

UI = render(state)

render 함수는 순수 함수로 작성 (순수함수 : 입력값이 같으면 출력값도 같다)

- 랜덤 함수 사용 (x)

- 외부 상태 변경 (x)

state는 불변 변수로 관리(객체의 속성변경시 새로운 객체 생성하여 할당)

가상 돔(virtual dom)

2. 리액트 개발 환경 직접 구축하기

babel, webpack 사용안하고 순수한 라이브러리 사용

http://unpkg.com/react@16/umd/react.development.js

http://unpkg.com/react-dom@16/umd/react-dom.development.js

3. 바벨 사용해보기

자바스크립트 코드를 변환해주는 컴파일

최신 자바스크립트 문법(es6)을 지원하지 않는 환경에서도 최신 문법 사용 가능

그 외에도 다양한 용도로 사용

- 코드에서 주석을 제거하거나 코드를 압축...

리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

npm init y
npm i @babel/core @babel/cli @babel/preset-react
npx babel --watch src --out-dir . --presets @babel/preset-react

npx를 실행하게 되면 node_modules ./bin 폴더에있는 바이너리 실행