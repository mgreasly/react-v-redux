export const ACTIONS = {
    ADDTODO: 'ADD_TODO',
    TOGGLESTATE: 'TOGGLE_STATE',
    SETFILTER: 'SET_FILTER'
};

export const list = (state = [
    { id: 1, title: 'redux first', completed: false },
    { id: 2, title: 'redux second', completed: true },
    { id: 3, title: 'redux third', completed: false },
], action) => {
    switch (action.type) {
        case ACTIONS.ADDTODO: {
            const list = [...state, {
                id: state.length + 1,
                title: action.title,
                completed: false
            }];
            return list;
        }
        case ACTIONS.TOGGLESTATE: {
            const list = state.map(item => item.id == action.id ? {
                id: item.id,
                title: item.title,
                completed: !item.completed
            } : item);
            return list;
        }
        default:
        // nothing to do here
    }
    return state;
};

export const filter = (state = 'all', action) => {
    switch (action.type) {
        case ACTIONS.SETFILTER: {
            return action.filter;
        }
        default:
        // nothing to do here
    }
    return state;
};
