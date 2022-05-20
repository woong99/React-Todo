import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from '@firebase/firestore';
import { getFirestore } from '@firebase/firestore';

// 액션 타입 정의
const LOAD_TODO = 'bucket/LOAD_TODO';
const ADD_TODO = 'bucket/ADD_TODO';
const REMOVE_TODO = 'bucket/REMOVE_TODO';

export function loadTodo(todo) {
  return { type: LOAD_TODO, todo };
}

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
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
    console.log(action.todo);
    return state.filter((todo) => todo.todoID !== action.todo);
  }
  return state;
}

export default reducer;
