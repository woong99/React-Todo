export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function addTodo(text, index) {
  return {
    type: ADD_TODO,
    text,
    index,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    index,
  };
}

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}
