import { createAction, handleAction } from 'redux-actions';

export const addUser = createAction('react-todo/user/ADD_USER');

// const initialState = 'U44iUzQterSkDVMoIsjJZlhyJGx2';
const initialState = '';

const reducer = handleAction(
  'react-todo/user/ADD_USER',
  (state, action) => {
    return action.payload;
  },
  initialState,
);

export default reducer;
