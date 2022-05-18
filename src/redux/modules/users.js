import { createAction, handleAction } from 'redux-actions';

export const addAccount = createAction('react-todo/users/ADD_ACCOUNT');
const initialState = [
  {
    name: '정웅교',
    id: 'dndry1072',
    pwd: 'jhan00254!',
  },
  { name: '홍길동', id: 'dndry562', pwd: 'jhan00254!' },
  { name: '김갑수', id: 'woong562', pwd: 'jhan00254!' },
];

const reducer = handleAction(
  'react-todo/users/ADD_ACCOUNT',
  (state, action) => {
    return [...state, { name: action.payload[0], id: action.payload[1], pwd: action.payload[2] }];
  },
  initialState,
);

export default reducer;
