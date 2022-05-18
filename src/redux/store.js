import { createStore } from 'redux';
import todoApp from './modules/reducer';

const store = createStore(todoApp);

export default store;
