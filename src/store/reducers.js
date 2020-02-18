export const list = (state = [
    { id: 1, title: 'first', completed: false },
    { id: 2, title: 'second', completed: true },
    { id: 3, title: 'third', completed: false },
], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const list = [...state, {
                id: state.length + 1,
                title: action.title,
                completed: false
            }];
            return list;
        }
        case 'TOGGLE_STATE': {
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

export const filter = (state = false, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.filter;
        }
        default:
        // nothing to do here
    }
    return state;
};
