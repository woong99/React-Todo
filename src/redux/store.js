import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules/reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
