import { createActions, handleActions } from 'redux-actions';

export const { addTodo, completeTodo, removeTodo } = createActions(
  'ADD_TODO',
  'COMPLETE_TODO',
  'REMOVE_TODO',
  { prefix: 'react-todo/todos' },
);

const initialState = [
  { text: '아침 먹기', done: true, id: 0 },
  { text: '점심 먹기', done: false, id: 1 },
  { text: '저녁 먹기', done: false, id: 2 },
];

const reducer = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [...state, { text: action.payload[0], done: false, id: action.payload[1] }];
    },
    COMPLETE_TODO: (state, action) => {
      return state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
    REMOVE_TODO: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
  initialState,
  { prefix: 'react-todo/todos' },
);

export default reducer;
