import { combineReducers, createStore } from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { list, filter } from './reducers';

const reducer = combineReducers({ list, filter });

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
        setFilter: (filter) => dispatch({ type: 'SET_FILTER', filter }),
        toggleStatus: (id) => dispatch({ type: 'TOGGLE_STATE', id }),
    }
}

export const connectComponent = (ctrl) => connect(mapStateToProps, mapDispatchToProps)(ctrl);

export default configureStore({reducer});
