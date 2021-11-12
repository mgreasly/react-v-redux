import { combineReducers, createStore } from 'redux';
import { list, filter } from './reducers';

const reducer = combineReducers({ list, filter });

export default createStore(reducer);
