import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from '@firebase/firestore';
import { getFirestore } from '@firebase/firestore';

// 액션 타입 정의
const LOAD_TODO = 'react-todo/todos/LOAD_TODO';
const ADD_TODO = 'react-todo/todos/ADD_TODO';
const REMOVE_TODO = 'react-todo/bucket/REMOVE_TODO';
const COMPLETE_TODO = 'react-todo/bucket/COMPLETE_TODO';

// TODO 리스트를 불러옴
export function loadTodo(todo) {
  return { type: LOAD_TODO, todo };
}

// TODO 추가
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

// TODO 삭제
export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

// TODO의 isDone 상태 변경
export function changeTodo(id, isDone) {
  return { type: COMPLETE_TODO, id, isDone };
}

// 액션 생성 함수
export const loadTodoFB = (uid) => {
  return async function (dispatch) {
    const todos = await getDocs(collection(getFirestore(), `users/${uid}/todos`));
    todos.forEach((data) => {
      dispatch(loadTodo({ id: data.id, ...data.data() }));
    });
  };
};

export const addTodoFB = (uid, todo) => {
  console.log(todo);
  return async function (dispatch) {
    const dataFB = await addDoc(collection(getFirestore(), `users/${uid}/todos`), todo);
    await updateDoc(doc(getFirestore(), `users/${uid}/todos`, dataFB.id), { todoID: dataFB.id });
    const data = { id: dataFB.id, ...todo };
    dispatch(addTodo(data));
  };
};

export const removeTodoFB = (uid, id) => {
  return async function (dispatch) {
    const data = doc(getFirestore(), `users/${uid}/todos`, id);
    await deleteDoc(data);
    dispatch(removeTodo(id));
  };
};

export const changeTodoFB = (uid, id, done) => {
  return async function (dispatch) {
    await updateDoc(doc(getFirestore(), `users/${uid}/todos`, id), { isDone: !done });
    dispatch(changeTodo(id, done));
  };
};

// 초기 상태
const initialState = [];

// 리듀서
function reducer(state = initialState, action) {
  if (action.type === LOAD_TODO) {
    return [
      ...state,
      { title: action.todo.title, isDone: action.todo.isDone, todoID: action.todo.id },
    ];
  }

  if (action.type === ADD_TODO) {
    console.log(action);
    return [...state, { title: action.todo.title, isDone: false, todoID: action.todo.id }];
  }

  if (action.type === REMOVE_TODO) {
    return state.filter((todo) => todo.todoID !== action.id);
  }

  if (action.type === COMPLETE_TODO) {
    return state.map((todo) => {
      if (todo.todoID === action.id) {
        return { ...todo, isDone: !action.isDone };
      }
      return todo;
    });
  }
  return state;
}

export default reducer;
