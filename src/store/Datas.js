import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function Datas(props) {
  const [datas, setDatas] = useState([
    { input: '농구', checked: true, id: 0 },
    { input: '야구', checked: false, id: 1 },
    { input: '배구', checked: false, id: 2 },
  ]);

  return <UserContext.Provider value={{ datas, setDatas }}>{props.children}</UserContext.Provider>;
}

export default Datas;
