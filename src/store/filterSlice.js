import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'completed',
    SHOW_ACTIVE: 'active'
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setFilter: (state, action) => action.payload
    }
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
