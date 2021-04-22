## 리액트란 무엇인가

자동으로 업데이트 되는 UI

* UI = render(state)

render 함수는 순수 함수로 작성 (순수함수 : 입력값이 같으면 출력값도 같다)

* 랜덤 함수 사용 (x)
* 외부 상태 변경 (x)

state는 불변 변수로 관리(객체의 속성변경시 새로운 객체 생성하여 할당)

* 가상 돔(virtual dom)
 
## 리액트 개발 환경 직접 구축하기

* babel, webpack 사용안하고 순수한 라이브러리 사용
* http://unpkg.com/react@16/umd/react.development.js
* http://unpkg.com/react-dom@16/umd/react-dom.development.js

## 바벨 사용해보기

* 자바스크립트 코드를 변환해주는 컴파일
* 최신 자바스크립트 문법(es6)을 지원하지 않는 환경에서도 최신 문법 사용 가능
* 그 외에도 다양한 용도로 사용
* 코드에서 주석을 제거하거나 코드를 압축...
* 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

* npm init y
* npm i @babel/core @babel/cli @babel/preset-react
* npx babel --watch src --out-dir . --presets @babel/preset-react
* npx를 실행하게 되면 node_modules ./bin 폴더에있는 바이너리 실행

## 웹팩의 기본 개념 이해하기

* 리액트는 첫 로딩시, 최종으로 번들된 js 파일이 연결된 html 파일을 로드한다.  
* 웹팩은 여러 개의 컴포넌트로 분리되어 있는 js 파일을 하나의 번들 파일로 만들어주는 역할을 한다.
* 다양한 기능 제공
    - 파일 내용을 기반으로 파일 이름에 해시값 추가 -> 효율적으로 브라우저 캐싱 이용
      + etag를 이용했을 때는 서버한테 캐시 사용 여부를 물어보는 단계가있는데
        파일 이름 자체를 해시로 사용할경우 더 효율적
    - 사용되지 않은 코드 제거
    - 자바스크립트 압축
    - JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기
    - 환경변수 주입
    
* 웹팩을 사용하는 가장 큰 이유 -> 모듈 시스템(ESM(ES6), commonJS(Node))을 사용하고 싶어서

* 모듈 시스템 

// file1.js 파일   
* export default function func1() {}   
* export function func2() {}
* export cont variable11 = 123;   
* export let variable2 = 'hello';   

// file1.js 파일   
* import myFunc1, { func2, variable1, variable2 } from './file1.js';

// file3.js 파일   
* import { func2 as myFunc2 } from './file1.js';
*default 는 중괄호 없이 나머지는 중괄호 필요

* 웹사이트가 동적으로 변하면서 여러개의 파일 관리가 필요해 졌고   
* 어떤 파일에서 외부로 노출하는 글로벌 변수가 있다고 할때 다른 파일에서 같은 이름으로 글로벌 변수 노출을 하게되면 문제가 생김   
* jquery 같은 외부라이브러리 사용한다할때 cdn 문제가 발생했을때 서비스 까지 영향을 줄수있음
* 요즘 브라우저는 ESM 지원 
    - 오래된 브라우저, 많은 오픈 소스가 commonJS로 작성됨
  
* npm install webpack webpack-cli react react-dom
* npx webpack

## create-react-app으로 시작하기

* 리액트 개발 환경을 직접 구출하려면 많은 지식과 노력이 필요
  - webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리, ...
* 페스북에서 관리하는 공식 툴
* 서버사이드 렌더링을 하는 프로젝트라면 crate-react-app 보다는 Next.js 사용
* 빌드시스템이나 eslint 등의 설정을 거의 변경 할 수 없음 
* Next.js에서는 바벨, 웹펙, eslint 등의 설정을 변경 할 수 있음

## create-react-app으로 시작하기2

* https로 실행 set HTTPS=tru&&npm start
* build명령어 npm run build
* npx serve -s build
* 사이즈가 작은 이미지는 자바스크립트에 내장 HTTP 요청 횟수 감소 및 빠르게 이미지 렌더링
* 파일명.spec.js 로 변경해도 test 파일로 인식
* 폴더명 __tests__
* polyfill
  - 폴리필(polyfill)은 웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을  구현하는 코드를 뜻함

## CSS 작성 방법 결정하기

* 일반적인 CSS 파일로 작성하기
  - 이름이 충돌할 수 있는 문제 발생
* css-module로 작성하기
  - class 명을 간편하게 작성하기 위해 npm install classnames 사용
* Sass로 작성하기
  - cra에서 sass를 사용하기 위해서는 node-sass 패키지 필요
* css-in-js로 작성하기
  - css 코드를 자바스크립 파일 안에서 사용 styled-components 사용
  
## 단일 페이지 애플리케이션(SPA) 만들기 

![spa](images/spa.png)
* SPA가 가능하기 위한 조건
  - 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있다.
    - 단, 브라우저는 서버로 요청을 보내지 않아야 한다.
  - 브라우저의 뒤로 가기와 같은 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있다.
    - 이때도 브라우저는 서버로 요청을 보내지 않아야 한다.
* 위 조건을 만족시켜주는 브라우저 API
  - pushState, repalceState 함수 (javascript -> 브라우저)
  - popstate 이벤트 (브라우저 -> javascript)
* useEffect
  - 이벤트 핸들러를 등록하거나 api를 호출하는 부수 효과를 발생시킬때 사용
* react-router-dom
  - 현재 페이지 정보에 따라서 어떤 컴포넌트를 렌더링할지 (다양한 조건)
  - 현재 상태 정보 관리를 자동으로 해줌 (onpopstate 등)
  - 코드 스플리팅(분할) 기능 제공
  
## 리액트를 사용한 코드의 특징 

* 비구조화문법
  - 각 아이템을 변수로 만들 수 있음
  - const person = ['mike', 23];
  - const [name, age] = person;

* ... 전개연산자
  - const arr = [1, 2, 3];
  - const arr2 = [...arr];
  - const arr2 = [arr[0], arr[1], arr[2], todo];
  
* react는 비즈니스로직과 UI코드가 분리
  - UI코드는 jsx에서 한번만 작성
  - 선언형 프로그래밍 <-> 명령형 프로그래밍
  - 추상화 단계가 높아 비즈니스 로직에 집중 가능

## 컴포넌트의 속성값과 상탯값

* 리액트 컴포넌트 에서는 UI데이터를 속성값이나 상태값으로 관리 해야함
* 비구조화 문법 {}
* React.memo 속성값이 변경될때만 컴포넌트 렌더링
* 상태값은 불변변수로 관리하는것이 좋다(ex: 전개연산자 이용)

## 컴포넌트 함수의 반환값

* 컴포넌트는 리액트 요소 반환 가능
* 리액트 요소는 key를 항상 가지고있어야함 -> 렌더링 효율적
* <React.Fagment>, <> -> key를 입력하지 않아도 됨
* 컴포넌트에서는 React Portal 반환 가능
  - {ReactDOM.createPortal(<div></div>, document.getElementBy('something')}

## 리액트 요소와 가상돔1

* component 추가 mount <-> unmount