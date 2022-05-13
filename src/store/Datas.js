import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function Datas(props) {
  const [datas, setDatas] = useState([
    { input: '농구', checked: true, id: 0 },
    { input: '야구', checked: false, id: 1 },
    { input: '배구', checked: false, id: 2 },
  ]);
  const [users, setUsers] = useState([
    {
      name: '정웅교',
      id: 'dndry1072',
      pwd: 'jhan00254!',
      img: '../assets/woong.jpeg',
    },
    { name: '홍길동', id: 'dndry562', pwd: 'jhan00254!' },
    { name: '김갑수', id: 'woong562', pwd: 'jhan00254!' },
  ]);
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ datas, setDatas, users, setUsers, user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Datas;
