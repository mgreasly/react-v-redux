import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'list',
    initialState: [
        { id: 1, title: 'first', completed: false },
        { id: 2, title: 'second', completed: true },
        { id: 3, title: 'third', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: state.length + 1,
                title: action.payload,
                completed: false
            });
        },
        toggleStatus: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) item.completed = !item.completed;
        }
    }
});

export const { addTodo, toggleStatus } = listSlice.actions;

export const listReducer = listSlice.reducer;