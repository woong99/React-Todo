import { combineReducers } from 'redux';
import todos from './todos';
import users from './users';
import user from './user';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const reducer = combineReducers({
  todos,
  users,
  user,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default reducer;
