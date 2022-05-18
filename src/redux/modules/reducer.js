import { combineReducers } from 'redux';
import todos from './todos';
import users from './users';
import user from './user';

const reducer = combineReducers({
  todos,
  users,
  user,
});

export default reducer;
