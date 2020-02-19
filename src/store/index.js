import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { listReducer } from './listSlice';
import { filterReducer } from './filterSlice';

export default configureStore({
    reducer: combineReducers({
        list: listReducer,
        filter: filterReducer
    })
});
