import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { listReducer, addTodo, toggleStatus } from './listSlice';
import { filterReducer, setFilter } from './filterSlice';

export const connectComponent = (ctrl) => connect(
    state => state,
    { addTodo, toggleStatus, setFilter }
)(ctrl);

export default configureStore({
    reducer: combineReducers({
        list: listReducer,
        filter: filterReducer
    })
});
