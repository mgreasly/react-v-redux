import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    list: [
        { id: 1, title: 'first', completed: false },
        { id: 2, title: 'second', completed: true },
        { id: 3, title: 'third', completed: false },
    ],
    filter: 'all'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const list = [...state.list, {
                id: state.list.length + 1,
                title: action.title,
                completed: false
            }];
            return { list, filter: state.filter };
        }
        case 'SET_FILTER': {
            return { list: state.list, filter: action.filter };
        }
        case 'TOGGLE_STATE': {
            const list = state.list.map(item => item.id == action.id ? {
                id: item.id,
                title: item.title,
                completed: !item.completed
            } : item);
            return { list, filter: state.filter };
        }
        default:
        // nothing to do here
    }
    return state;
}

export const mapStateToProps = state => state;

export const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
        setFilter: (filter) => dispatch({ type: 'SET_FILTER', filter }),
        toggleStatus: (id) => dispatch({ type: 'TOGGLE_STATE', id }),
    }
}

export default configureStore({ reducer });
