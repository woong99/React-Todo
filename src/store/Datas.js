import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function Datas(props) {
  const [datas, setDatas] = useState([]);

  return <UserContext.Provider value={{ datas, setDatas }}>{props.children}</UserContext.Provider>;
}

export default Datas;
