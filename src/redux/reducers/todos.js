import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions';

const initialState = [
  { text: '아침 먹기', done: true, id: 0 },
  { text: '점심 먹기', done: false, id: 1 },
  { text: '저녁 먹기', done: false, id: 2 },
];
export default function todos(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false, id: action.index }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
  }

  if (action.type === REMOVE_TODO) {
    return previousState.filter((todo) => todo.id !== action.index);
  }
  return previousState;
}
