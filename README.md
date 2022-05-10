# React-TodoList v1.5

투두리스트틀 만들고 업데이트 시키면서 리액트의 기초부터 공부!!

[배포 페이지 (Netlify)](https://storied-puffpuff-a9206d.netlify.app/)

## 미리 보기

###

<img width="1434" alt="스크린샷 2022-05-10 오후 5 31 10" src="https://user-images.githubusercontent.com/76946536/167585153-cc63df88-0949-4f02-9503-a4d0859e6fb5.png">

---

## 주요 기능

### 날짜 기능

![스크린샷 2022-05-05 오후 1 42 24](https://user-images.githubusercontent.com/76946536/166864642-bb0d533a-7d47-4512-a985-194a12bc6872.png)

- `new Date()` 를 이용해 날짜를 나타내었다.
- 추후에는 시계 기능을 추가할 것이다.

### 일정 관리 기능

![스크린샷 2022-05-05 오후 1 44 31](https://user-images.githubusercontent.com/76946536/166864755-46f93552-be73-4833-a22e-b39480cf88d8.png)

- 입력창을 통해 일정을 추가할 수 있다.
- 왼쪽 체크 박스를 통해 완료한 일과 완료하지 않은 일로 구분할 수 있다.
- 각 일정의 오른쪽에 마우스를 갖다대면 X 버튼이 나와 클릭 시 해당 일정이 삭제된다.

### 날씨 기능

<img width="177" alt="스크린샷 2022-05-10 오후 5 32 27" src="https://user-images.githubusercontent.com/76946536/167585380-141bf00f-0ac2-45fe-88e1-8dbc5f79cfe6.png">

- 현재 위치의 날씨와 기온을 알 수 있다.
- geolocation을 이용해 현재 위치의 좌표를 받아온다.
- openweathermapAPI를 이용해 현재 날씨를 받아온다.

---

## 구조

![그림1](https://user-images.githubusercontent.com/76946536/166865626-a5895b05-9124-45e2-a7ca-82ca8f34aea3.png)

```
public/
index.js
index.css
src
├──components # 컴포넌트들
├──pages # 페이지들
├──store # Context API를 사용하기 위한 디렉토리
└──Styles # css 파일들
```

## 사용 기술

- JS (ES5+)
- React
- React Hooks
- css (css modules)

## 업데이트 예정

- 날씨 기능
- 현재 시간 기능

## 배운 점

Context API를 통한 전역 상태 관리에 대해 배울 수 있었고, map 함수를 이용한 컴포넌트 반복 출력을 배울 수 있었다. 다음 버전에서는 날씨 기능과 현재 시간 기능을 추가할 것이고, 추후에는 Context API 대신 Redux를 도입해 볼 것이다. 조금 더 React에 대해 공부하여 최적화까지 해 볼 것이다.
