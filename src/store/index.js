import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import { ACTIONS, list, filter } from './reducers';

const reducer = combineReducers({ list, filter });

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title) => dispatch({ type: ACTIONS.ADDTODO, title }),
        setFilter: (filter) => dispatch({ type: ACTIONS.SETFILTER, filter }),
        toggleStatus: (id) => dispatch({ type: ACTIONS.TOGGLESTATE, id }),
    }
}

export const connectComponent = (ctrl) => connect(mapStateToProps, mapDispatchToProps)(ctrl);

export default createStore(reducer);
