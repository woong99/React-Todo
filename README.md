# React-TodoList v2.5

투두리스트틀 만들고 업데이트 시키면서 리액트의 기초부터 공부!!

[배포 페이지 (Netlify)](https://storied-puffpuff-a9206d.netlify.app/)

## 🫣 미리 보기 🫣

###

<img width="1436" alt="스크린샷 2022-05-14 오후 1 26 04" src="https://user-images.githubusercontent.com/76946536/168410612-8b65b95f-e486-46f5-a063-002c244fc212.png">

---

## ⭐️ 주요 기능 ⭐️

### 🎯 날짜 기능

![스크린샷 2022-05-05 오후 1 42 24](https://user-images.githubusercontent.com/76946536/166864642-bb0d533a-7d47-4512-a985-194a12bc6872.png)

- `new Date()` 를 이용해 날짜를 나타내었다.
- 추후에는 시계 기능을 추가할 것이다.

### 🎯 일정 관리 기능

![스크린샷 2022-05-05 오후 1 44 31](https://user-images.githubusercontent.com/76946536/166864755-46f93552-be73-4833-a22e-b39480cf88d8.png)

- 입력창을 통해 일정을 추가할 수 있다.
- 왼쪽 체크 박스를 통해 완료한 일과 완료하지 않은 일로 구분할 수 있다.
- 각 일정의 오른쪽에 마우스를 갖다대면 X 버튼이 나와 클릭 시 해당 일정이 삭제된다.

### 🎯 날씨 기능

<img width="177" alt="스크린샷 2022-05-10 오후 5 32 27" src="https://user-images.githubusercontent.com/76946536/167585380-141bf00f-0ac2-45fe-88e1-8dbc5f79cfe6.png">

- 현재 위치의 날씨와 기온을 알 수 있다.
- geolocation을 이용해 현재 위치의 좌표를 받아온다.
- openweathermapAPI를 이용해 현재 날씨를 받아온다.

### 🎯 로그인 기능

<img width="450" alt="스크린샷 2022-05-14 오후 1 27 24" src="https://user-images.githubusercontent.com/76946536/168410638-2943912d-dbdb-4e02-9191-c593842afd4b.png">

- react-router-dom을 도입해 로그인 기능을 구현해보았다.
- 아직은 백엔드도 없고 DB도 없기 때문에 임시로 Context API에서 상태를 관리해 로그인하는 방식이다.

### 🎯회원가입 기능

<img width="450" alt="스크린샷 2022-05-14 오후 1 28 55" src="https://user-images.githubusercontent.com/76946536/168410667-3cc804a4-2bba-4a34-aa20-d97a240c857f.png">

- 이름과 사진을 입력받아 메인 페이지에서 사용자 UI로 이용한다.

---

## 🧩 구조 🧩

### Main Page

![Main](https://user-images.githubusercontent.com/76946536/168410934-bf9d4d9a-ec15-47f0-af0e-f195fd86bbae.png)

### Login Page

![Login](https://user-images.githubusercontent.com/76946536/168411014-02dfdb79-4c34-4edd-b4a5-e317919789c0.png)

### SignUp Page

![SignUp](https://user-images.githubusercontent.com/76946536/168411054-b1c1a4d8-90a7-4b9d-8ce1-6718c915f28a.png)

```
public/
index.js
index.css
src
├──components # 컴포넌트들
├──pages # 페이지들
├──redux # Redux를 사용하기 위한 디렉토리
├──hooks # 커스텀 훅을 위한 디렉토리
├──assets # 사진 파일을 위한 디렉토리
├──router # 라우터를 위한 디렉토리
└──Styles # css 파일들
```

---

## 💡 사용 기술 💡

- JS (ES5+)
- React
- React Hooks
- css (css modules)
- react-router-dom v6
- redux
- react-redux
- redux-actions

---

## 📖 학습 내용 📖

- React Basic
- React Custom Hook
- Context API
- axios를 통한 API 호출
- 비동기 처리 (Promise, async & await)
- react-router-dom을 이용한 router 처리
  - localStorage를 이용한 PrivateRoute
- input[file]을 이용한 사진 업로드
- redux를 이용한 전역 상태 관리
- react-redux를 통해 컴포넌트와 리덕스를 연결
- redux ducks pattern
- redux-actions를 이용해 모듈화 및 ducks pattern 적용

---

## 🤪 업데이트 예정 🤪

- FireBase를 이용한 DB 관리 및 auth 구현

---

## 🎖 배운 점 🎖

Context API와 redux의 차이점을 공부하고 redux의 사용법부터 심화 과정까지 공부할 수 있었다. Context API와 크게 다른 점은 없어서 쉽게 배울 수 있었다. 아직은 redux를 이용한 비동기 처리는 사용하지 않았지만 나중에는 react-sage까지 공부할 예정이다.
