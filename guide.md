## 리액트란 무엇인가

자동으로 업데이트 되는 UI

UI = render(state)

render 함수는 순수 함수로 작성 (순수함수 : 입력값이 같으면 출력값도 같다)

* 랜덤 함수 사용 (x)

* 외부 상태 변경 (x)

state는 불변 변수로 관리(객체의 속성변경시 새로운 객체 생성하여 할당)

가상 돔(virtual dom)
 
## 리액트 개발 환경 직접 구축하기

babel, webpack 사용안하고 순수한 라이브러리 사용

http://unpkg.com/react@16/umd/react.development.js

http://unpkg.com/react-dom@16/umd/react-dom.development.js

## 바벨 사용해보기

자바스크립트 코드를 변환해주는 컴파일

최신 자바스크립트 문법(es6)을 지원하지 않는 환경에서도 최신 문법 사용 가능

그 외에도 다양한 용도로 사용

* 코드에서 주석을 제거하거나 코드를 압축...

리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

npm init y
npm i @babel/core @babel/cli @babel/preset-react
npx babel --watch src --out-dir . --presets @babel/preset-react
npx를 실행하게 되면 node_modules ./bin 폴더에있는 바이너리 실행

## 웹팩의 기본 개념 이해하기

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
export default function func1() {}   
export function func2() {}   
export cont variable11 = 123;   
export let variable2 = 'hello';   

// file1.js 파일   
import myFunc1, { func2, variable1, variable2 } from './file1.js';

// file3.js 파일   
import { func2 as myFunc2 } from './file1.js';

default 는 중괄호 없이 나머지는 중괄호 필요

* 웹사이트가 동적으로 변하면서 여러개의 파일 관리가 필요해 졌고   
* 어떤 파일에서 외부로 노출하는 글로벌 변수가 있다고 할때 다른 파일에서 같은 이름으로 글로벌 변수 노출을 하게되면 문제가 생김   
* jquery 같은 외부라이브러리 사용한다할때 cdn 문제가 발생했을때 서비스 까지 영향을 줄수있음
* 요즘 브라우저는 ESM 지원 
    - 오래된 브라우저, 많은 오픈 소스가 commonJS로 작성됨